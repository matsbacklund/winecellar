require.config({
    paths: {
        jquery: 'libs/jquery-1.9.0.min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require([
    // Load our app module and pass it to our definition function
    'app'
], function(App) {
    App.initialize();
});