define([
    'jquery',
    'underscore',
    'backbone',
    'collections/wines',
    'text!templates/wines/list.html'
], function($, _, Backbone, WineCollection, wineListTemplate) {
    var WineListView = Backbone.View.extend({
        el: $("#sidebar"),

        initialize: function() {
            this.collection = new WineCollection();
            this.collection.fetch();
            var compiledTemplate = _.template(wineListTemplate, { wines: this.collection.models });
            this.$el.html(compiledTemplate);
        }
    });
});

/*
window.WineListView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
        this.model.bind("reset", this.render, this);
    },

    render: function(eventName) {
        _.each(this.model.models, function(wine) {
            $(this.el).append(new WineListItemView({model: wine}).render().el);
        }, this);
        return this;
    }
});
*/