/**
 * @copyright Sandeepan Bhattacharyya
 * @license
 * 1. The code structure and logic in this file is licensed under GNU GPL v3. 
 *      To view a copy of this license, See the local **LICENSE-code** file.
 * 2. Any and all dummy data content in this work is licensed under the 
 *      Creative Commons Attribution-NonCommercial-ShareAlike 4.0  
 *      International License. To view a copy of this license, visit 
 *      http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to 
 *      Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 * 
 * @author Sandeepan Bhattacharyya <bsandeepan95.work@gmail.com>
 * @file This script sets error pages dynamically.
*/

(function(){
    /**
     * Gets all queried nodes and returns an array of them. Uses querySelectorAll() method. 
     * To fetch multiple separate nodes, provide them using comma(,).
     * @param {Node} selector DOM Node value to search
     * @returns {Array} An array created from NodeList
     */
    function getAll (selector) {return Array.prototype.slice.call(document.querySelectorAll(selector), 0);}

    // Creating a new date obj
    let today = new Date();
    // if changeTheme is true, get the theme color for today
    if(Settings.changeTheme) Settings.todayTheme = Settings.colors[today.getDay()];
    // load error page styling
    fallback.load(Settings.errPageLoad);
    // color the button
    let myBtns = getAll(".is-btn-special");
     myBtns.forEach(el => {
         el.style.backgroundColor = Settings.todayTheme;
         el.href = `.${Settings.homepage}`;
        });
})();