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
 * @file This script sets framelines styling dynamically.
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
    // load framelines stylling
    fallback.load(Settings.frameLoad);
    // load bulma
    fallback.load(Settings.toLoad);
    // color the button
    let myBtns = getAll(".is-btn-special");
     myBtns.forEach(el => {el.style.backgroundColor = Settings.todayTheme;});
})();