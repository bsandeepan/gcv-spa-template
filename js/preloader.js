/**This script deals with things that should be operational before main content is 
 * loaded. Contains three sections of code -
 * 
 * 1.   Loader Animation Code: This is where loader animation code should go. If 
 *      you have no such code for your preferred animation, then leave it blank. 
 *      If any code for previous animation is here, delete it otherwisi it may 
 *      break your code.
 * 
 * 2.   Preloader Code: This section manipulates the background and font colors 
 *      for frames and loader animation to integrate today's theme. If you decide 
 *      to change loader animation code, then you may have to manipulate this 
 *      section as well. If so, identify your "targetID" element carefully and 
 *      proceed with caution as you change the code.
 * 
 * 3.   AfterLoaded Code: for things to do after entire website content is loaded.
 */

 ( function(){
    //  1. Loader Animation Code (Begin)
    //  Code for loader animation goes here
    //  1. Loader Animation Code (End)
    
    //  2. Preloader Code (Begin)
    /** Checks if DOM nodes are loaded. Uses querySelector() method */
    function onReady(selector, timeout, callback) {
        var intervalId = window.setInterval(function() {
            if (document.querySelector(selector) !== undefined) {
                window.clearInterval(intervalId);
                callback.call(this);
            }
        }, timeout);
    }
    
    /** Toggle class for selected node. Uses querySelector() method */
    function toggleVisible(selector, className, alreadyExists) {
        if(alreadyExists) {document.querySelector(selector).classList.remove(className);}
        else {document.querySelector(selector).classList.add(className);}
    }

    // an object containing important IDs and classNames for easy maintainance and manipulation
    var preLoadStr = {
        framelineID : "#framelines",
        preloaderID: "#preloader",
        mainBodyID : "#gcvSPA",
        hideHardCL : "hideHard"
    };

    // After preloader section is loaded, do these manipulations
    onReady(preLoadStr.preloaderID, 500,  function() {
        // put theme color in framelines
        var frames = document.querySelector(preLoadStr.framelineID).getElementsByTagName("div");
        for (let i = 0; i < frames.length; i++) frames[i].style.background = Settings.todayTheme;

        // select the parent preloader node into a variable
        var queriedNode = document.querySelector(preLoadStr.preloaderID);

        // insert Loading Header text content and font color from Settings
        queriedNode.firstElementChild.innerText = Settings.preLoad.loaderHeading;
        queriedNode.firstElementChild.style.color = Settings.todayTheme;

        // insert HTML content for loader animation
        queriedNode.lastElementChild.insertAdjacentHTML('afterbegin', Settings.preLoad.loaderHTML);

        // Select the target child node and change it's color to theme color
        var children = queriedNode.lastElementChild.getElementsByTagName("div");
        for(let i = 0; i< children.length;i++) {
            let targetID = children[i].getAttribute('id')
            if ( targetID == Settings.preLoad.targetID) {
                document.getElementById(targetID).style.background = Settings.todayTheme;
            }
        }
    });
    //  2. Preloader Code (End)
    

    // 3. AfterLoaded Code (Begin)
    // When ENTIRE window and document loading is done, do these
    window.addEventListener('load', (event) => {
        // toggle display state for preloader and main body
        toggleVisible(preLoadStr.preloaderID, preLoadStr.hideHardCL, false);
        toggleVisible(preLoadStr.mainBodyID, preLoadStr.hideHardCL, true);
    });
    // 3. AfterLoaded Code (End)
 })();