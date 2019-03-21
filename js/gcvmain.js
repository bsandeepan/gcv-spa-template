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
 * @file This script loads website data and applies related styles.
*/

/**
 * Content:
 * 1.   *Variable Declarations*: it contains objects holding important strings 
 *          to manipulate DOM, and other important variables. 
 * 
 * 2.   *Function Declarations*: It contains -
 *      - General functions
 *      - Age calculation function
 *      - List (unordered) generation function
 *      - Filtering function
 *      - Timeline functions
 * 
 * 3.   *Data Loading Section*: This section loads all displayable data from 'data.js' file
 *          and attaches necessary event listeners.
 * 
 * 4.   *AfterLoaded Code*: For things to do after entire website 
 *          content is loaded. It contains -
 *      - toggle display state for preloader and main body
 *      - apply pseudo element edits on timeline
 *      - if (Data.portfolio.display.recentWork) then color the tags
 *      - responsive code for modals
 * 
 */

( function() {
    /* ========================================================================== */
    // Variable Declarations
    /* ========================================================================== */

    /**Link to guidelines for publications (a helpful thing) */
    let pubGuideLink = `http://wiki.lib.sun.ac.za/images/5/5d/Online_Visibility_Guidelines.pdf`;
    /**maps HTML data-attribute that contains content to apply glitch effect upon */
    let glitchData = "data-glitch";

    /**An one-stop obj solution to maintain all DOM IDs and classnames(CL) */
    let DOMStrings = {
        // general tags
        preloaderID: "#preloader",
        mainBodyID : "#gcvSPA",
        hideHardCL : "hideHard",
        hideVisualCL : "hideVisual",
        checkCL : "checked",
        glitchStaticCL : "glitch-static-effect",
        // landing page tags
        brandNameID : "brandName",
        displayNameID : "landingTitle",
        taglineWorkID : "landingTag",
        // profile page tags
        myImageID : "personImage",
        myAboutMeID : "personAboutMe",
        myNameID : "personName",
        colAgeCL: "col-age",
        myAgeID : "personAge",
        myJobID : "personJob",
        colResidenceCL: "col-residence",
        myResidenceID : "personResidence",
        cvBtnID: "btn-cv",
        expTLID : "tl-exp",
        edTLID : "tl-ed",
        hobbiesID : "hobby",
        langTableID : "lang-table",
        langListID : "lang-list",
        skillSetID : "skillset",
        // portfolio page tags
        publicationID : "publications",
        recentWorksID: "recentWorks",
        TagFiltersID : "tagbuttons",
        portfolioListID : "portfoliolist",
        projectCL : "project",
        filterInputCL : "inputfilter",
        // contact page tags
        myStatementID : "contactStatement",
        personPhoneID : "personPhone",
        personEmailID : "personEmail",
        personAddressID : "personAddress",
        contactLinksID: "catchME",
        "contactFormID" : "contactForm",
        "msgGuidelineID" : "msg-rule",
        // footer tag
        linksFooterID: "links-footer"
    };

    /**An obj keeping all id and class info for dynamic styling */
    let StyleStrings = {
        // general style options
        bgCol: "white",
        // classnames manipulated for styling
        splBtnCL: "is-btn-special",
        fieldCL: "fields",
        tlMainCL: "timeline",
        tlItemCL: "tl-title",
        tlEndCL: "tl-end",
        projectCardCL: "proj-card",
        projectButtonCL: "proj-button",
        contactBtnLinkCL: "contact-btn-link",
        footerLinkCL: "footer-link",
        // nested manipulations
        topNavItems: "#top-nav .navbar-item",
        formControls: "#contactForm .control input, #contactForm .control textarea"
    };

    /**Keeps tract of current pseudo UID and increments it per use */
    let pseudoUID = {
        _current: 0,
        getNew: function(){
            this._current++;
            return this._current;
        }
    };

    /* ========================================================================== */
    // Function Declarations
    /* ========================================================================== */

    /**
     * Toggle hideHard class for selected node. Uses querySelector() method.
     * @param {Node} selector DOM Node value to search
     */
    function toggleHide (selector) {document.querySelector(selector).classList.toggle(DOMStrings.hideHardCL);}

    /**
     * Gets all queried nodes and returns an array of them. Uses querySelectorAll() method. 
     * To fetch multiple separate nodes, provide them using comma(,).
     * @param {Node} selector DOM Node value to search
     * @returns {Array} An array created from NodeList
     */
    function getAll (selector) {return Array.prototype.slice.call(document.querySelectorAll(selector), 0);}

    /**
     * swaps color and backgroundcolor properties of selected node.
     * @param {Object} elSt Node.style Object
     */
    function swapColor (elSt) {[elSt.color, elSt.backgroundColor] = [elSt.backgroundColor, elSt.color];}

    /**
     * Calculates age in years.
     * @param {number} dobYear year value of D.O.B. (ex: 2020)
     * @param {number} dobMonth month value of D.O.B. (1 to 12) 
     * @param {number} dobDate date value of D.O.B. (1 to 28/29/30/31)
     * @returns {string} a string with value as "X years" where 'X' is age.
     */
    function calculate_age(dobYear, dobMonth, dobDate)
    {
        let tDate, tYear, tMonth, tDay, ageYears, ageText="";
        tDate = new Date();
        tYear = tDate.getFullYear();
        tMonth = tDate.getMonth();
        tDay = tDate.getDate();
        ageYears = tYear - dobYear;
        if ( tMonth < (dobMonth - 1)) ageYears--;
        if (((dobMonth - 1) == tMonth) && (tDay < dobDate)) ageYears--;
        ageText += (ageYears + " year");
        if(ageYears > 1) ageText += "s";
        return ageText;
    }

    /**
     * Creates an unordered list of given array of items.
     * @param {Array} arr An array of list items
     * @returns {string} A HTML <ul> String
     */
    function listAll (arr) {
        let item, listItem="";
        arr.forEach(el => {
            item = `<li>${el}</li>`;
            listItem += item;
        });
        return `<ul>${listItem}</ul>`;
    }

    /**
     * Takes an array of filter data as arguments. Then selects an array of specified
     * selector (targeted List), and based on filter data, shows all elements of the
     * Targeted List that has the data filters present in their className.
     * @summary Filters a selection based on values in filter_array.
     * @param {Array} filter_arr An array containing filter values.
     * @param {Node} selector DOM Node value to search
     */
    function filterSelection(filter_arr, selector) {
        let x = getAll(selector);        
        for (let i = 0; i < x.length; i++) {
            let x_cl = x[i].classList;
            let x_cn = x[i].className;
            // if any filter is selected then
            if(filter_arr[0]) {
                // if all filters match, then show
                let all_matched = filter_arr.every(el => x_cn.includes(el));
                if (all_matched) {x_cl.remove(DOMStrings.hideHardCL);}
                else {x_cl.add(DOMStrings.hideHardCL);}
            }
            // else show all
            else {x_cl.remove(DOMStrings.hideHardCL);}
        }
    }

    /**
     * Finds Selector and makes a style element for it containing
     * pseudo element/class modifications. All paramenters are fetched 
     * from another function.
     * 
     * _Note_: We extended HTMLElement.prototype to serve our purpose 
     * which can be risky often hence must be used with caution.
     * @param {Node} selector DOM Node value to search
     * @param {string} element pseudo class/element
     * @param {string} prop CSS property name
     * @param {string} value CSS property value
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

    /**
     * Selects Nodelist for selector and applies pseudo element modifications.
     * Uses querySelectorAll() method.
     * 
     * *Note*: For pseudo element, you need to enter them prepended with an "colon (:)".
     * Example - provide "::before" as ":before" in element field
     * For psuedo class, providing "hover" will create ":hover" by itself
     * @param {Node} selector DOM Node value to search
     * @param {string} element pseudo class/element
     * @param {string} prop CSS property name
     * @param {string} value CSS property value
     */
    function applyPsuedoEl(selector,element,prop,value) {
        var el = document.querySelectorAll(selector);
        for(var i = 0; i < el.length; i++) el[i].pseudoStyle(selector,element,prop,value);
    }

    /* ========================================================================== */
    // Data Loading Section
    /* ========================================================================== */

    document.addEventListener('DOMContentLoaded', (ev) => {
        // Loading landing page data
        document.getElementById(DOMStrings.brandNameID).innerText = Data.landing.brandName;
        let greetStr = `${Data.landing.greeting} I am ${Data.landing.displayName}`;
        document.getElementById(DOMStrings.displayNameID).innerText = greetStr.toUpperCase();
        document.getElementById(DOMStrings.displayNameID).setAttribute(glitchData, greetStr.toUpperCase());
        document.getElementById(DOMStrings.taglineWorkID).innerText = Data.landing.taglineWork;
        document.getElementById(DOMStrings.taglineWorkID).setAttribute(glitchData, Data.landing.taglineWork);

        // loading profile page data
        document.getElementById(DOMStrings.myImageID).src = Data.profile.profilePicture;
        document.getElementById(DOMStrings.myAboutMeID).innerText = Data.profile.aboutMe;
        document.getElementById(DOMStrings.myNameID).innerText = Data.profile.profileName;
        document.getElementById(DOMStrings.myJobID).innerText = Data.profile.job;
        if (Data.profile.residence !== "") {
            document.getElementById(DOMStrings.myResidenceID).innerText = Data.profile.residence;
        }
        else {toggleHide(`.${DOMStrings.colResidenceCL}`);}
        if(Data.profile.showAge) {
            document.getElementById(DOMStrings.myAgeID).innerText = calculate_age(  Data.profile.dateOfBirth.year,
                                                                                    Data.profile.dateOfBirth.month,
                                                                                    Data.profile.dateOfBirth.date
            );
        }
        else {toggleHide(`.${DOMStrings.colAgeCL}`);}
        // destroy dob info
        Data.profile.dateOfBirth.year = Data.profile.dateOfBirth.month = Data.profile.dateOfBirth.date = "";
        document.getElementById(DOMStrings.cvBtnID).href = Data.profile.cvLink;

        // loading experience, education, hobbies, skilset, language data
        (function() {
            // looping in reverse through the experience array (to avoid unnecessary reduce() to do forEach() :P)
            for(let i = (Data.profile.experience.length - 1); i >= 0; i--) {
                let listStr, expStr, el = Data.profile.experience[i];
                // if no end date is given, mark it as present
                if (el.end === "") el.end = "Present";
                // if highlights are given, make a list of them
                if (el.highlights[0]) {listStr = listAll(el.highlights);}
                else {listStr = "";}

                // string generating markup content for experience entries
                expStr = `
                <div class="tl-entry">
                    <div class="tl-title">
                        <h3>${el.start}</h3><h3>to</h3><h3>${el.end}</h3>

                    </div>
                    <div class="tl-body">
                        <h3><strong>${el.role}</strong></h3>
                        <h3><em>${el.company}</em></h3>
                        <p>${el.jobDesc}</p>
                        ${listStr}
                    </div>
                </div>`;

                // inserting generated markup string in experience section
                document.getElementById(DOMStrings.expTLID).insertAdjacentHTML('afterbegin', expStr);
            }

            // looping in reverse through the education array (to avoid unnecessary reduce() to do forEach() :P)
            for(let i = (Data.profile.education.length - 1); i >= 0; i--) {
                let listStr, expStr, el = Data.profile.education[i];
                // if no end date is given, mark it as present
                if (el.end === "") el.end = "Present";
                // if highlights are given, make a list of them
                if (el.highlights[0]) {listStr = listAll(el.highlights);}
                else {listStr = "";}

                // string generating markup content for education entries
                expStr = `
                <div class="tl-entry">
                    <div class="tl-title">
                    <h3>${el.start}</h3><h3>to</h3><h3>${el.end}</h3>
                    </div>
                    <div class="tl-body">
                        <h3><strong>${el.course}</strong></h3>
                        <h3><em>${el.under}</em></h3>
                        <p>${el.studyDesc}</p>
                        ${listStr}
                    </div>
                </div>`;

                // inserting generated markup string in education section
                document.getElementById(DOMStrings.edTLID).insertAdjacentHTML('afterbegin', expStr);
            }

            // loading hobbies data
            let hobbyStr = listAll(Data.profile.hobbies);
            document.getElementById(DOMStrings.hobbiesID).insertAdjacentHTML('beforeend',hobbyStr);

            // loading languages data
            let langRow, langRowList = "", langTableStr = "", langItem, langItemList = "";
            Data.profile.language.forEach(function (el) {
                // generating a list of rows for language table
                if(el.cert === "") el.cert = "None";
                langRow = `<tr><td>${el.lang_name}</td><td>${el.level}</td><td>${el.cert}</td></tr>`;
                langRowList += langRow;

                // generatign a list for language list
                langItem = `<li>${el.lang_name}<ul><li>${el.level}</li><li>${el.cert}</li></ul></li>`;
                langItemList += langItem;
            });
            // creating the final table body html string
            langTableStr = `<tbody>${langRowList}</tbody>`;
            // inserting generated table body and list strings in relevant Nodes.
            document.getElementById(DOMStrings.langTableID).insertAdjacentHTML('beforeend', langTableStr);
            document.getElementById(DOMStrings.langListID).insertAdjacentHTML('beforeend', langItemList);

            // loading skillset data
            Data.profile.skillset.forEach(function (el) {
                let usedList, skillStr;
                // generate a list of all used skills
                if(el.used[0]) {usedList = listAll(el.used);}
                else {usedList = "";}
                // generate a markup string for skillset column
                skillStr = `
                <div class="column is-4">
                    <h4 class="subtitle is-6"><strong>${el.type}</strong></h4>
                    ${usedList}
                </div>`;
                // inserting skillset column markup string in relevant Node.
                document.getElementById(DOMStrings.skillSetID).lastElementChild.insertAdjacentHTML('beforeend', skillStr);
            });
        })();

        // loading portfolio page data
        // loading publications
        if(Data.portfolio.display.publication) {
            let pubStr = "", pub;
            // generating a publication string and making a list of them
            Data.portfolio.publication.forEach(function (el) {
                if (el.link === "") el.link = pubGuideLink;
                pub = `<p><strong><a target="_blank" href="${el.link}" class="pubtitle fields">${el.title}</a>: </strong><span>${el.desc}</span></p>`;
                pubStr += pub;
            });
            document.getElementById(DOMStrings.publicationID).insertAdjacentHTML('beforeend', pubStr);
        }
        else {toggleHide(`#${DOMStrings.publicationID}`);}

        // loading recent works data
        (function(){
            if (Data.portfolio.display.recentWork) {
        
                // variables required for replacing regex for tag buttons
                let tagfilters, filterArr = [];
                tagfilters = document.getElementById(DOMStrings.TagFiltersID);
        
                // adding tag buttons
                Data.portfolio.tags.forEach(function (el) {
                    // tag button string
                    let tagbtn = `
                    <label for="${el.name}" class="button is-rounded ${DOMStrings.filterInputCL}" ${glitchData}="${el.name}">
                        <input id="${el.name}" class="${DOMStrings.hideVisualCL}" type="checkbox" value="${el.name.toLowerCase()}">
                        <span>${el.name}</span><span class="icon">${el.icon}</span>
                    </label>`;
                    // insert the modified markup string in DOM
                    tagfilters.insertAdjacentHTML('beforeend', tagbtn);
                });
        
                // adding event listener on tag button container for all tag buttons (delegation)
                tagfilters.addEventListener('click', function(event){
                    if (event.target.classList.contains(DOMStrings.hideVisualCL)) {
                        event.stopPropagation();
                        let tNode, tNodeInput, data, chk;
                        tNodeInput = event.target;
                        tNode = tNodeInput.parentNode;
                        data = tNodeInput.value;
                        chk = DOMStrings.checkCL;
                        // swap label colors
                        swapColor(tNode.style);

                        // toggling glitch effect
                        tNode.classList.toggle(DOMStrings.glitchStaticCL);

                        if(tNode.classList.contains(chk)) {
                            // if checked, remove checked, delete data-filtter from filter array
                            tNode.classList.remove(chk);
                            let arr_i = filterArr.indexOf(data);
                            if(arr_i > -1) filterArr.splice(arr_i, 1);
                        }
                        else {
                            // else add checked and add data-filter to filter array
                            tNode.classList.add(chk);
                            filterArr.push(data);
                        }
                        // call filter selector function for project list
                        filterSelection(filterArr, `.${DOMStrings.projectCL}`);
                    }
                });

                // other variables needed for replacing regex in the markup string
                let tagstr, tagclass, tag, toPaste;
        
                // adding cards and modals
                Data.portfolio.recentWork.forEach(function (el, i) {
                    // creating a list of tags
                    tagstr = "", tagclass="";
                    el.projectTags.forEach(function(t) {
                        t = t.toLowerCase();
                        tag = `<span class="tag is-dark">${t}</span> `;
                        tagstr += tag;
                        tagclass += (t + " ");
                    });
        
                    // license info
                    if(el.license.text !== "") {toPaste = el.license.text;}
                    else if (el.license.svg !== "") {toPaste = `<img src="${el.license.svg}">`;}
                    else {toPaste = "Not Licensed.";}
        
                    // a string generating the entire html markup for card and modal element
                    let cardModalStr = `
                    <div class="column is-4 ${DOMStrings.projectCL} ${tagclass}">
                        <div class="card proj-card modal-button" data-target="modal-id-${(i+1)}">
                            <div class="card-image proj-card-img">
                                <figure class="image is-${Settings.projImgRatio}">
                                    <img src="${el.projectImage}" alt="${("Image for " + el.projectName)}">
                                    <div class="proj-card-license">${toPaste}</div>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content has-text-centered">
                                    <p class="title is-5 proj-card-title fields">${el.projectName}</p>
                                </div>
                            </div>
                        </div>
        
                        <div id="modal-id-${(i+1)}" class="modal modal-fx-3dSlit">
                            <div class="modal-background is-primary"></div>
                            <div class="modal-content">
                                <div class="card proj-modal">
                                    <header class="card-header">
                                        <p class="card-header-title">${el.projectName}</p>
                                        <button class="delete is-large card-header-icon" aria-label="close"></button>
                                    </header>

                                    <div class="card-content proj-modal-body">
                                        <p class="project-heading">${el.heading}</p>
                                        <p class="project-desc content is-small">${el.projectDesc}</p>
                                        <div class="tags is-rounded">${tagstr}</div>
                                        <div class="columns is-flex is-flex-centered">
                                        <div class="column"><p class="project-license"><strong>License:</strong> ${toPaste}</p></div>
                                        <div class="column">
                                                <a target="_blank" href="${el.sourceCode}" class="button is-rounded is-outlined proj-button">
                                                    <span>View Project</span><span class="icon">${el.sourceIcon}</span>
                                                </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
                    // insert the modified markup string in DOM
                    document.getElementById(DOMStrings.portfolioListID).insertAdjacentHTML('beforeend', cardModalStr);
                });
            }
            else {toggleHide(`#${DOMStrings.recentWorksID}`);}
        })();

        // loading contact page data
        let stNode = document.getElementById(DOMStrings.myStatementID);
        stNode.innerText = Data.contact.statement;
        // If Data.contact.showContactInfo is true, then the fields will appear
        if(Data.contact.showContactInfo) {
            let phoneStr, emailStr, addrsStr;
            phoneStr = `<div class="column is-4"><p><span class="fields">Phone: </span><span id="personPhone">${Data.contact.phone}</span></p></div>`;
            emailStr = `<div class="column is-4"><p><span class="fields">Email: </span><span id="personEmail">${Data.contact.email}</span></p></div>`;
            addrsStr = `<div class="column is-full"><p><span class="fields">Address: </span><span id="personAddress">${Data.contact.address}</span></p></div>`;
            // insert the strings into the container
            stNode.parentNode.insertAdjacentHTML('afterend', (phoneStr + emailStr + addrsStr));
        }
        // destroy the contact info (trying to)
        Data.contact.phone = Data.contact.email = Data.contact.address = "";
        
        // create a list of buttons for contact links
        let linkbtn, linkbtnList="", footerlink, ftlinkList="";
        Data.contact.catchMeOn.forEach(el => {
            linkbtn = `<a target="_blank" href="${el.link}" class="button is-small is-outlined contact-btn-link"><span>${el.name}</span><span class="icon">${el.icon}</span></a>`;
            linkbtnList += linkbtn;
            footerlink = `<a target="_blank" href="${el.link}" class="footer-link"><span class="icon">${el.icon}</span></a>`;
            ftlinkList += footerlink;
        });
        document.getElementById(DOMStrings.contactLinksID).insertAdjacentHTML('beforeend', linkbtnList);
        document.getElementById(DOMStrings.linksFooterID).insertAdjacentHTML('beforeend', ftlinkList);

        // If Data.contact.useContactForm is true, then contact form will work, else hide
        if(Data.contact.useContactForm) {
            document.getElementById(DOMStrings.contactFormID).action = Data.contact.contactForm.action;
            document.getElementById(DOMStrings.msgGuidelineID).innerText = Data.contact.contactForm.guideline;
        }
        else{toggleHide(`#${DOMStrings.contactFormID}`);}
    });

    /* ========================================================================== */
    // AfterLoaded Code
    /* ========================================================================== */

    // When ENTIRE window and document loading is done, do these
    window.addEventListener('load', function(event){
        // toggle display state for preloader and main body
        toggleHide(DOMStrings.preloaderID);
        toggleHide(DOMStrings.mainBodyID);

        // styling code for page elements
        (function(){
            // apply pseudo edits on top nav tabs
            applyPsuedoEl(`${StyleStrings.topNavItems}`, "hover", "color", (Settings.todayTheme + " !important"));
            applyPsuedoEl(`${StyleStrings.topNavItems}`, "hover", "border-bottom-color", (Settings.todayTheme + " !important"));

            // set colors for special buttons
            let myBtns = getAll(`.${StyleStrings.splBtnCL}`);
            myBtns.forEach(el => {el.style.backgroundColor = Settings.todayTheme;});

            // apply color to all special fields(F) and Footer Links(FL)
            let all_F_FL = getAll(`.${StyleStrings.fieldCL}, .${StyleStrings.footerLinkCL}`);
            all_F_FL.forEach(el => {el.style.color = Settings.todayTheme;});

            // apply pseudo element edits on timeline
            applyPsuedoEl(`.${StyleStrings.tlMainCL}`, ":before", "background", Settings.todayTheme);
            applyPsuedoEl(`.${StyleStrings.tlItemCL}, .${StyleStrings.tlEndCL}`, ":before", "border", ("4px solid " + Settings.todayTheme + " !important"));

            if (Data.portfolio.display.recentWork) {

                // set color for tag filter buttons
                let filterList = getAll(`.${DOMStrings.filterInputCL}`);
                for (let i = 0; i < filterList.length; i++) {
                    filterList[i].style.color = Settings.todayTheme;
                    filterList[i].style.backgroundColor = StyleStrings.bgCol;
                }

                // apply theme color to all project cards in recent works grid
                let allCards = getAll(`.${StyleStrings.projectCardCL}`);
                allCards.forEach(el => {el.style.borderColor = Settings.todayTheme});

                // apply pseudo hover class edits on contact link buttons and project buttons
                let bothCLStr = `.${StyleStrings.contactBtnLinkCL}, .${StyleStrings.projectButtonCL}`;
                applyPsuedoEl(bothCLStr, "hover", "color", Settings.todayTheme);
                applyPsuedoEl(bothCLStr, "hover", "border-color", Settings.todayTheme);

                // apply pseudo focus class edits to all buttons in website
                let allBtnFormStr = `${bothCLStr}, .${StyleStrings.splBtnCL}, ${StyleStrings.formControls}`;
                applyPsuedoEl(allBtnFormStr, "focus", "border-color", (Settings.todayTheme + " !important"));
                applyPsuedoEl(allBtnFormStr, "focus", "box-shadow", ("0 0 5px " + Settings.todayTheme));
            }
        })();

        // responsive code for modals
        (function(){
            let rootEl = document.documentElement;
            let allModals = getAll('.modal');
            let modalButtons = getAll('.modal-button');
            // added ".card-header .delete" below as I used card as modal content
            let modalCloses = getAll('.modal-background, .modal-close, .card-header .delete, .modal-card-head .delete, .modal-card-foot .button');
            
            if (allModals.length > 0) {
                modalButtons.forEach(function (el) {
                    el.addEventListener('click', function () {
                        let target = document.getElementById(el.dataset.target);
                        rootEl.classList.add('is-clipped');
                        target.classList.add('is-active');
                    });
                });	  
                modalCloses.forEach((el) => el.addEventListener('click', () => closeModals()));
                document.addEventListener('keydown', (e) => {if (e.code === "Escape") closeModals();});
            }
            /**Closes the modal */
            function closeModals () {
                rootEl.classList.remove('is-clipped');
                allModals.forEach((el) => el.classList.remove('is-active'));
            }
        })();
    });
})();