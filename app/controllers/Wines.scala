package controllers

import play.api.mvc._
import models.Wine
import play.api.libs.json.Json

/**
 * @author backlmat, 2013-02-25
 */
object Wines extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def list = Action {
    val wines = Wine.findAll()
    Ok(Json.toJson(wines))
  }

  // -- Javascript routing
  def javascriptRoutes = Action { implicit request =>
    import play.api.Routes
    Ok(
      Routes.javascriptRouter("jsRoutes")(
        routes.javascript.Wines.list
      )
    ).as(JAVASCRIPT)
  }
}
