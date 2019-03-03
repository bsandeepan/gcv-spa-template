/***This script deals with initial settings. Contains $$ sections of code -
 * 1.   Initiation Code: it contains -
 *      - initial variable declarations.
 *      - setting today's theme.
 *      - loading stylesheets and scripts using FallbackJS.
 * 2.   Function Declarations: It contains -
 *      
 *      - Timeline functions
 * 3.   DOMContentLoaded Code: For things to do after basic HTML 
 *      structure is loaded. It contains -
 *      - Toggle Navbar burger
 *      - Add Blog Link to navbar
 *      - Footer credits
 * 4.   AfterLoaded Code: For things to do after entire website 
 *      content is loaded. It contains -
 *      - 
 */
( function() {
    /** ************************ Initiation Code ************************ */
    // Creating a new date obj
    var today = new Date();
    // if changeTheme is true, get the theme color for today
    if(Settings.changeTheme) Settings.todayTheme = Settings.colors[today.getDay()];

    /**Keeps tract of current UID and increments it per use */
    var pseudoUID = {
        _current: 0,
        getNew: function(){
            this._current++;
            return this._current;
        }
    };

    // an object containing important IDs and classNames for easy maintainance and manipulation
    var loadStrings = {
        preloaderID: "#preloader",
        mainBodyID : "#gcvSPA",
        hideHardCL : "hideHard",
        isActiveCL : "is-active"
    };

    // Load the preloader Stylesheet and Scripts
    fallback.load(Settings.preLoad.loaderFiles);

    // Load the main Stylesheets and Scripts from CDNs or fall back to local copies.
    fallback.load(Settings.toLoad);

    /** ************************ Function Declarations ************************ */

    /** Toggle class for selected node. Uses querySelector() method */
    function toggleHide(selector) {
        document.querySelector(selector).classList.toggle(loadStrings.hideHardCL);
    }

    
    function toggleActive(selector) {}

    /**Finds Selector and makes a style element for it containing
     * pseudo element modifications.
     */
    HTMLElement.prototype.pseudoStyle = function(selector,element,prop,value){
        var _this = this;
        var _sheetId = "pseudoStyles";
        // var _head = document.head || document.getElementsByTagName('head')[0];
        var _selected = document.querySelector(selector);
        var _sheet = document.getElementById(_sheetId) || document.createElement('style');
        _sheet.id = _sheetId;
        var className = "pseudoStyle" + pseudoUID.getNew();
        
        _this.className +=  " "+className; 
        
        _sheet.innerHTML += "."+className+":"+element+"{"+prop+":"+value+"}";
            _selected.appendChild(_sheet);
        return this;
    };

    /**Selects Nodelist for selector and applies pseudo element modifications */
    function applyPsuedoEl(selector,element,prop,value) {
        var el = document.querySelectorAll(selector);
        for(var i = 0; i < el.length; i++) el[i].pseudoStyle(selector,element,prop,value);
    }

    /** ************************ DOMContentLoaded Code ************************ */
    // After basic HTML Structure is loaded, do these things.
    document.addEventListener('DOMContentLoaded', (event) => {
        // Navbar Burger Toggle
        document.getElementById("nav-toggle").addEventListener ("click", function() {
            document.querySelector('.navbar-menu').classList.toggle(loadStrings.isActiveCL);
        });

        // Adding blog link to Navbar
        if (Settings.blog !== "")
        {
            var blogLink = `<a target="_blank" class="navbar-item is-tab" href="${Settings.blog}">Blog</a>`;
            document.querySelector(".navbar-start").insertAdjacentHTML('afterbegin', blogLink); 
        }

        // Footer credits
        // TODO: Get it as an entire HTML String with Github links
        let copyright, year, projectName, authorCred, sourceCode, creditsStr;
        copyright = `<i class="far fa-copyright"></i>`;
        year = today.getFullYear();
        authorCred = `Sandeepan B.`;
        projectName = `GlitchCV`;
        //Souce Code in Github
        sourceCode = `<a target="_blank" href="https://github.com/"><i class="fab fa-github-alt"></i></a>`;
        creditsStr = `${copyright} ${year} ${projectName}. Made by ${authorCred} ${sourceCode}`;
        document.getElementById("credits").insertAdjacentHTML('afterbegin', creditsStr);

        // load the last scripts
        fallback.load(Settings.lastLoad);
    });

    /** ************************ AfterLoaded Code ************************ */
    // When ENTIRE window and document loading is done, do these
    window.addEventListener("load", (event) => {
        // toggle display state for preloader and main body
        toggleHide(loadStrings.preloaderID);
        toggleHide(loadStrings.mainBodyID);

        // apply pseudo element edits on timeline
        applyPsuedoEl(".timeline", "before", "background", Settings.todayTheme);
        applyPsuedoEl(".tl-title", "before", "border", ("4px solid " + Settings.todayTheme + " !important"));
        applyPsuedoEl(".tl-end", "before", "border", ("4px solid " + Settings.todayTheme + " !important"));
    });
})();
