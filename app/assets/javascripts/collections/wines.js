window.WineCollection = Backbone.Collection.extend({
    model: Wine,
    url: jsRoutes.controllers.Wines.list().url
});