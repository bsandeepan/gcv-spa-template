/**Loads website data and applies related styles. It contains $$  */
( function() {
    // An One-stop obj solution to maintain all DOM IDs and classnames(CL)
    let DOMStrings = {
        // general tags
        hideHardCL : "hideHard",
        hideVisualCL : "hideVisual",
        checkCL : "checked",
        // landing page tags
        brandNameID : "brandName",
        displayNameID : "landingTitle",
        taglineWorkID : "landingTag",
        // profile page tags
        myImageID : "personImage",
        myAboutMeID : "personAboutMe",
        myNameID : "personName",
        myAgeID : "personAge",
        myJobID : "personJob",
        myResidenceID : "personResidence",
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
        "contactFormID" : "contactForm",
        "msgGuidelineID" : "msg-rule"
    }

    // dynamic styling info object
    let dynamicStyle = {
        fontCol : Settings.todayTheme,
        bgCol: "rgb(255, 255, 255)"
    }; 

    /** Toggle hideHard class for selected node. Uses querySelector() method */
    function toggleHide (selector) {document.querySelector(selector).classList.toggle(DOMStrings.hideHardCL);}

    /**Gets all queried nodes and returns an array of them */
    function getAll (selector) {return Array.prototype.slice.call(document.querySelectorAll(selector), 0);}

    /** swaps color and backgroundcolor properties of selected node */
    function swapColor (elSt) {[elSt.color, elSt.backgroundColor] = [elSt.backgroundColor, elSt.color];}

    /**Calculates age in years (x years) */
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

    /**creates an unordered list of given array of items */
    function listAll (arr) {
        let item, listItem="";
        arr.forEach(el => {
            item = `<li>${el}</li>`;
            listItem += item;
        });
        return `<ul>${listItem}</ul>`;
    }

    /**Takes an array of filter data as arguments. Then selects an array of specified
     * selector (targeted List), and based on filter data, shows all elements of the
     * Targeted List that has the data filters present in their className.
     */
    function filterSelection(filter_arr, selector) {
        let x = getAll(selector);

        // TODO: eval the following code to see why it is not working as expected
        // // remove hideHard from all projects
        // for (let i = 0; i < x.length; i++) {x[i].remove(DOMStrings.hideHardCL);}
        // // if filter_arr[0] exists, run another for loop to add hideHard
        // if(filter_arr[0]) {
        //     for (let i = 0; i < x.length; i++) {
        //         let x_cl = x[i].classList;
        //         let x_cn = x[i].className;
        //         if (!filter_arr.every(el => x_cn.includes(el))) {
        //             x_cl.add(DOMStrings.hideHardCL);
        //         }
        //     }
        // }
        
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
   
    // loading data starts here
    document.addEventListener('DOMContentLoaded', (ev) => {
        // Loading landing page data
        document.getElementById(DOMStrings.brandNameID).innerText = Data.landing.brandName;
        let greetStr = `${Data.landing.greeting} I am ${Data.landing.displayName}`;
        document.getElementById(DOMStrings.displayNameID).innerText = greetStr.toUpperCase();
        document.getElementById(DOMStrings.taglineWorkID).innerText = Data.landing.taglineWork;

        // loading profile page data
        document.getElementById(DOMStrings.myImageID).src = Data.profile.profilePicture;
        document.getElementById(DOMStrings.myAboutMeID).innerText = Data.profile.aboutMe;
        document.getElementById(DOMStrings.myNameID).innerText = Data.profile.profileName;
        document.getElementById(DOMStrings.myJobID).innerText = Data.profile.job;
        document.getElementById(DOMStrings.myResidenceID).innerText = Data.profile.residence;
        document.getElementById(DOMStrings.myAgeID).innerText = calculate_age(  Data.profile.dateOfBirth.year,
                                                                                Data.profile.dateOfBirth.month,
                                                                                Data.profile.dateOfBirth.date
        );

        // loading experience and education data
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
                if (el.link === "") el.link = `http://wiki.lib.sun.ac.za/images/5/5d/Online_Visibility_Guidelines.pdf`;
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
                    <label for="${el.name}" class="button is-rounded ${DOMStrings.filterInputCL}">
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
                        <div class="card modal-button" data-target="modal-id-${(i+1)}">
                            <div class="card-image">
                                <figure class="image is-3by2">
                                    <img src="${el.projectImage}" alt="${("Image for " + el.projectName)}">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content has-text-centered">
                                    <p class="title is-5">${el.projectName}</p>
                                </div>
                            </div>
                        </div>
        
                        <div id="modal-id-${(i+1)}" class="modal modal-fx-3dSlit">
                            <div class="modal-background is-primary"></div>
                            <div class="modal-content">
                                <div class="modal-card">
                                    <header class="modal-card-head">
                                        <p class="modal-card-title">${el.projectName}</p>
                                        <button class="delete" aria-label="close"></button>
                                    </header>
        
                                    <section class="modal-card-body">
                                        <figure class="image is-3by2">
                                            <img class="project-img" src="${el.projectImage}" alt="${("Image for " + el.projectName)}">
                                            <div class="project-license">${toPaste}</div>
                                        </figure><br>
                                        <p class="project-heading">${el.heading}</p>
                                        <p class="project-desc">${el.projectDesc}</p>
                                        <div class="tags is-rounded">${tagstr}</div>
                                    </section>
        
                                    <footer class="modal-card-foot is-flex is-flex-centered">
                                        <a target="_blank" href="${el.sourceCode}" class="button is-rounded is-outlined">
                                            <span>View Project</span><span class="icon">${el.sourceIcon}</span>
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
                    // insert the modified markup string in DOM
                    document.getElementById(DOMStrings.portfolioListID).insertAdjacentHTML('beforeend', cardModalStr);
                });

                // color the tags
                window.addEventListener('load', function(event){
                    let filterList = getAll(`.${DOMStrings.filterInputCL}`);
                    // set color for tag filter buttons
                    for (let i = 0; i < filterList.length; i++)
                    {
                        filterList[i].style.color = dynamicStyle.fontCol;
                        filterList[i].style.backgroundColor = dynamicStyle.bgCol;
                    }
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
        // If Data.contact.useContactForm is true, then contact form will work, else hide
        if(Data.contact.useContactForm) {
            document.getElementById(DOMStrings.contactFormID).action = Data.contact.contactForm.action;
            document.getElementById(DOMStrings.msgGuidelineID).innerText = Data.contact.contactForm.guideline;
        }
        else{toggleHide(`#${DOMStrings.contactFormID}`);}
    });

    // responsive code for modals
    document.addEventListener('DOMContentLoaded', (ev) => {
        let rootEl = document.documentElement;
        let allModals = getAll('.modal');
        let modalButtons = getAll('.modal-button');
        let modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

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
    });
})();