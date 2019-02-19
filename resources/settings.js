// DO NOT TOUCH
(function(window) {
    // MODIFY FROM HERE
    var Settings = {
        blog : "https://www.google.com/",
        changeTheme : true,
        colors : [
            "rgb(30, 144, 255)",
            "rgb(251, 119, 119)",
            "rgb(107, 142, 35)",
            "rgb(209, 153, 57)",
            "rgb(32, 178, 170)",
            "rgb(252, 130, 82)",
            "rgb(168, 94, 253)"
        ],
        preLoad: {
            loaderHeading : "Website is loading faster than this cube running away!",
            loaderHTML : '<div id="loader"><div id="shadow"></div><div id="box"></div></div>',
            targetID : "box",
            loaderCSS : {
                preloaderCSS : ["./css/preloader.css"]
            }
        },
        toLoad : {
            Bulma : [
                "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css",
                "https://cdn.jsdelivr.net/npm/bulma@0.7.4/css/bulma.min.css",
                "./css/lib/bulma.min.css"
            ],
            customCSS : ["./css/gcvmain.css"]
        }
    };

    // DO NOT TOUCH
    window.Settings = Settings;
}(window));
