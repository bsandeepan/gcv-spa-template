( function() {
    // Creating a new date obj
    var today = new Date();
    // Theme color by default is dodgerblue
    var todayTheme = "rgb(30, 144, 255)";
    // if changeTheme is true, get the theme color for today
    if(Settings.changeTheme) todayTheme = Settings.colors[today.getDay()];
    console.log(todayTheme);

    /** Checks if DOM nodes are loaded. Uses querySelector() method */
    function onReady(selector, timeout, callback) {
        var intervalId = window.setInterval(function() {
            if (document.querySelector(selector) !== undefined) {
                window.clearInterval(intervalId);
                callback.call(this);
            }
        }, timeout);
    }
    
    /** Toggle class for selected node. Uses querySelector() */
    function toggleVisible(selector, className, alreadyExists) {
        if(alreadyExists) {document.querySelector(selector).classList.remove(className);}
        else {document.querySelector(selector).classList.add(className);}
    }

    var preLoadStr = {
        framelineID : "#framelines",
        preloaderID: "#preloader",
        mainBodyID : "#gcvSPA",
        hideHardCL : "hideHard"
    };

    // After preloader section is loaded, do these
    onReady(preLoadStr.preloaderID, 500,  function() {
        // put theme color in framelines
        var frames = document.querySelector(preLoadStr.framelineID).getElementsByTagName("div");
        for (let i = 0; i < frames.length; i++) {
            frames[i].style.background = todayTheme;
        }
        // select the parent preloader node into a variable
        var queriedNode = document.querySelector(preLoadStr.preloaderID);
        // insert Loading Header text content and font color from Settings
        queriedNode.firstElementChild.innerText = Settings.preLoad.loaderHeading;
        queriedNode.firstElementChild.style.color = todayTheme;
        // insert HTML content for loader animation
        queriedNode.lastElementChild.insertAdjacentHTML('afterbegin', Settings.preLoad.loaderHTML);
        // Select the target child node and change it's color to theme color
        var children = queriedNode.lastElementChild.getElementsByTagName("div");
        for(let i = 0; i< children.length;i++) {
            let targetID = children[i].getAttribute('id')
            if ( targetID == Settings.preLoad.targetID) {
                document.getElementById(targetID).style.background = todayTheme;
            }
        }
    });

    // Load the preloader Stylesheet
    fallback.load(Settings.preLoad.loaderCSS);

    // When loading is done, do these
    window.addEventListener('load', (event) => {
        // toggle display state for preloader and main body
        toggleVisible(preLoadStr.preloaderID, preLoadStr.hideHardCL, false);
        toggleVisible(preLoadStr.mainBodyID, preLoadStr.hideHardCL, true);
    });

    // Load the Stylesheets and Scripts from CDNs or fall back to local copies.
    fallback.load(Settings.toLoad);

    // After basic HTML Structure is loaded, do these things.
    document.addEventListener('DOMContentLoaded', (event) => {
        // Navbar Burger Toggle
        document.getElementById("nav-toggle").addEventListener ("click", function() {
            document.querySelector('.navbar-menu').classList.toggle('is-active');
        });

        // Adding blog link to Navbar
        if (Settings.blog !== "")
        {
            var blogLink = `<a target="_blank" class="navbar-item is-tab" href="${Settings.blog}">Blog</a>`;
            document.querySelector(".navbar-start").insertAdjacentHTML('afterbegin', blogLink); 
        }

        // Footer Stuff
        // TODO: Get it as an entire HTML String with Github links
        let copyright, year, projectName, authorCred, creditsStr;
        copyright = `<i class="far fa-copyright"></i>`;
        year = today.getFullYear();
        authorCred = `Sandeepan B.`;
        projectName = `GlitchCV`; //Souce Code in Github
        creditsStr = ` ${year} ${projectName}. Made by ${authorCred}`;
        document.getElementById("credits").innerText = creditsStr;
        document.getElementById("credits").insertAdjacentHTML('afterbegin', copyright);
    });
})();