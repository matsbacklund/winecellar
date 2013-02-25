package models

import anorm._
import anorm.SqlParser._
import play.api.db.DB
import play.api.Play.current
import play.api.libs.json._
import anorm.~
import anorm.~
import play.api.libs.json.JsObject

/**
 * @author backlmat, 2013-02-25
 */
case class Wine(id: Long, name: Option[String], year: Option[String], grapes: Option[String], country: Option[String], region: Option[String], description: Option[String], picture: Option[String])

object Wine {
  val parser = {
    get[Long]("id") ~
    get[Option[String]]("name") ~
    get[Option[String]]("year") ~
    get[Option[String]]("grapes") ~
    get[Option[String]]("country") ~
    get[Option[String]]("region") ~
    get[Option[String]]("description") ~
    get[Option[String]]("picture") map {
      case id~name~year~grapes~country~region~description~picture => {
        Wine(id, name, year, grapes, country, region, description, picture)
      }
    }
  }

  implicit object WineFormat extends Format[Wine] {
    def writes(o: Wine): JsValue = JsObject(
      List(
        "id" -> JsNumber(o.id),
        "name" -> Json.toJson(o.name),
        "year" -> Json.toJson(o.year),
        "grapes" -> Json.toJson(o.grapes),
        "country" -> Json.toJson(o.country),
        "region" -> Json.toJson(o.region),
        "description" -> Json.toJson(o.description),
        "picture" -> Json.toJson(o.picture)
      )
    )
    def reads(json: JsValue): JsResult[Wine] = JsSuccess(
      Wine(
        (json \ "id").as[Long],
        (json \ "name").asOpt[String],
        (json \ "year").asOpt[String],
        (json \ "grapes").asOpt[String],
        (json \ "country").asOpt[String],
        (json \ "region").asOpt[String],
        (json \ "description").asOpt[String],
        (json \ "picture").asOpt[String]
      )
    )
  }

  def findAll() = {
    DB.withConnection { implicit connection =>
      SQL(
        """
          select * from wine order by name
        """
      ).as(
        Wine.parser *
      )
    }
  }
}
