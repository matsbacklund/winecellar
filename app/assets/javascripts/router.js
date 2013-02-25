define([
    'jquery',
    'underscore',
    'backbone',
    'views/wines/list'
], function($, _, Backbone, WineListView) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            "": 'list',
            "wines/:id": 'wineDetails'
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter;
        appRouter.on('list', function() {
            var wineListView = new WineListView();
            wineListView.render();
        });
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});

/*
var AppRouter = Backbone.Router.extend({

    routes: {
        "": 'list',
        "wines/:id": 'wineDetails'
    },

    list: function() {
        this.wineList = new WineCollection();
        this.wineListView = new WineListView({model: this.wineList});
        this.wineList.fetch();
        $('#sidebar').html(this.wineListView.render().el);
    },

    wineDetails: function(id) {
        this.wine = this.wineList.get(id);
        this.wineView = new WineView({model:this.wine});
        $('#content').html(this.wineView.render().el);
    }
});

var app = new AppRouter();
Backbone.history.start();
*/