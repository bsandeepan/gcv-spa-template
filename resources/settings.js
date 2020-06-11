/**
 * @copyright Sandeepan Bhattacharyya 2019
 * @license
 * This work is licensed under the Creative Commons 
 *      Attribution-NonCommercial-ShareAlike 4.0 International License. 
 *      To view a copy of this license, visit 
 *      http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to 
 *      Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 * 
 * @author Sandeepan Bhattacharyya <bsandeepan95.work@gmail.com>
 * @file Contains main settings info.
*/

(function(window) {
    // MODIFY FROM HERE
    var Settings = {
        blog : "https://wordpress.com/create-blog/",
        projImgRatio: "3by2",

        changeTheme : true,
        todayTheme : "rgb(30, 144, 255)",
        colors : [
            "rgb(34, 89, 145)",
            "rgb(173, 41, 41)",
            "rgb(130, 101, 146)",
            "rgb(107, 142, 35)",
            "rgb(32, 178, 170)",
            "rgb(134, 127, 22)",
            "rgb(207, 91, 44)"
        ],

        iconHTMLStr : `<!-- Link Tags -->
        <link rel="apple-touch-icon" sizes="180x180" href="./resources/icons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="./resources/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./resources/icons/favicon-16x16.png">
        <link rel="manifest" href="./resources/icons/site.webmanifest">
        <link rel="mask-icon" href="./resources/icons/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="./resources/icons/favicon.ico">
        <meta name="msapplication-TileColor" content="#2b5797">
        <meta name="msapplication-config" content="./resources/icons/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">`,

        RNF : {
            text: "no project(s) found for",
            reason: [
                ""
            ]
        },

        preLoad: {
            loaderHeading : "Website is loading faster than this cube running away!",
            loaderHTML : '<div id="loader"><div id="shadow"></div><div id="box"></div></div>',
            targetID : "box",
            loaderFiles : {
                preloaderCSS : ["./css/preloader.css"],
                preloaderJS : ["./js/preloader.js"]
            }
        },

        frameLoad: {
            frameCSS : ["./css/framelines.css"],
            frameJS : ["./js/framelines.js"]
        },

        toLoad : {
            Bulma : [
                "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css",
                "https://cdn.jsdelivr.net/npm/bulma@0.7.4/css/bulma.min.css",
                "./css/lib/bulma.min.css"
            ],
            ModalFX : [
                "https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css",
                "./css/lib/modal-fx.min.css"
            ],
            glitchCSS : ["./css/gcvglitch.css"],
            customCSS : ["./css/gcvmain.css"]
        },

        lastLoad : {
            FontAwesome : {
                urls: [
                    "https://use.fontawesome.com/releases/v5.7.2/js/all.js",
                    "./js/lib/fontawesome/all.js"
                ]
            },
            DevIcon : {
                urls: [
                    "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
                    "./css/lib/devicon.min.css"
                ]
            }
        }
    };

    // DO NOT TOUCH
    window.Settings = Settings;
}(window));
