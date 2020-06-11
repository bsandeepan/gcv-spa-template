/**
 * @copyright Sandeepan Bhattacharyya
 * @license
 * This work is licensed under the Creative Commons 
 *      Attribution-NonCommercial-ShareAlike 4.0 International License. 
 *      To view a copy of this license, visit 
 *      http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to 
 *      Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 * 
 * @author Sandeepan Bhattacharyya <bsandeepan95.work@gmail.com>
 * @file This script deals with things that should be operational before main 
 *      website content is loaded.
*/

/**
 * Content:
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
 */

 ( function(){
    /* ************************ Begin: Loader Animation Code ************************ */
    //  Code for loader animation goes here
    /* ************************ End: Loader Animation Code ************************ */

    /* ************************ Begin: Preloader Code ************************ */
    /**
     * Checks continuously if DOM nodes are loaded. Checking happenes in timed interval. 
     *      Uses querySelector() method.
     * @param {string} selector
     * @param {number} timeout
     * @param {function} callback
     */
    function onReady(selector, timeout, callback) {
        var intervalId = window.setInterval(function() {
            if (document.querySelector(selector) !== undefined) {
                window.clearInterval(intervalId);
                callback.call(this);
            }
        }, timeout);
    }

    /**
     * An obj containing important IDs and classNames for ease
     */
    let preloaderID = "#preloader";

    // After preloader section is loaded, do these manipulations
    onReady(preloaderID, 500,  function() {
        // load framelines stylling
        fallback.load(Settings.frameLoad);

        // select the parent preloader node into a variable
        var queriedNode = document.querySelector(preloaderID);

        // insert Loading Header text content and font color from Settings (if exists)
        if (Settings.preLoad.loaderHeading !== "") {
            queriedNode.firstElementChild.innerText = Settings.preLoad.loaderHeading;
            queriedNode.firstElementChild.style.color = Settings.todayTheme;
        }

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
    /* ************************ End: Preloader Code ************************ */
 })();
