define([
    'backbone',
    'models/wine',
    '/assets/javascripts/routes'
], function(Backbone, WineModel, jsRoutes) {
    var WineCollection = Backbone.Collection.extend({
        model: WineModel,
        url: jsRoutes.controllers.Wines.list().url
    });
    return WineCollection;
});

/*
window.WineCollection = Backbone.Collection.extend({
    model: Wine,
    url: jsRoutes.controllers.Wines.list().url
});
*/