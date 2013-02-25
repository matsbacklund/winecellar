window.WineView = Backbone.View.extend({

    template: _.template($('#tpl-wine-details').html()),

    render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});
