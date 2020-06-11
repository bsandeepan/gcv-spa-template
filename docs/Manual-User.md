# User Manual for GlitchCV

---

## Table of Content:
- [How to Configure](#how-to-configure)
- [Configuring `data.js`](#configuring-data.js)
- [Configuring `settings.js`](#configuring-settings.js)


### How to Configure:
To configure, you need to fill in the necessary data in the JS files located in `./resources/` in the project directory. If you don't know how to add data in **JS Object** format, start by reading the official [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) and this [W3Schools JS Object Intro](https://www.w3schools.com/js/js_object_definition.asp).  

-  [`data.js`](#configuring-data.js) file contains all of your necessary information to configure the website. This **KEY** file should be updated whenever you want to make any changes in content. You should make a back-up copy of this file for safety. If your main file gets damaged or lost, then you won't have to fill out hundreds of fields all over again!    
- [`settings.js`](#configuring-settings.js) file contains some settings information. In **most** cases, you may not need to configure this file at all. Ideally, unless you know how [Arrays][infoArray], [CDNs][infoCDN], [Fallback Methods][FBMbasics] work, you should not touch this file confidently.  

Therefore, let us list some possible cases - 
1. You have a blog and want to include it in your website. 
2. You do not like how the colors change daily (why though??) and you want it to stop.  
3. You do not like one or few of the colors and wish to change them according to your taste.  
4. You want to use some additional CSS Fonts and icons stylesheets in your website.  
   **NOTE: DO NOT REMOVE** the stylesheets that are already there. They are being used and integrated into the template by design and altering them will **_break the code_**!! (unless you know what you are doing.)

### Configuring `data.js`:
Structure of `data.js` is as below -  
   
1. `landing` : This section contains fields displayed in landing page -  
   
   * `pageTitle` : Contains webpage title text (look up html [`<title>`][titleMDN] tag). Leave this field empty is you want your brand name to be used as page title.
   * `brandName` : Contains the text that will be displayed as Brand Name, on top left of Navbar. Clicking the brand name will lead you to the top of the website, the landing page.  
   * `greeting` : Contains the greeting phrase. By default, I set it to "Hi!" but you can greet visitors in Klingon (nuqneH) too.  
   * `displayName` : This name will be displayed in CAPITAL. I advise to use only your first name here for better view across platforms.  
   * `taglineWork` : This field should hold your job profile. For example, a tagline for me could be _"Full Stack Web Developer and Nihilist"._  

2. `profile` : This section contains all profile details -  
   * `profileName`: Your full name should go here. Now, I admit that I could have broken it down to First Name, Middle Name and Last Name, but I realize that different people write their name differently. Some would write last name followed by first name, or only the first name. Since it is a static protfolio site, I wanted the users to freely display their name.  
   * `showAge` : Boolean value that will help the template decide whether to display your age. If yes, put `1` or `true`. If no, put `0` or `false`.
   * `dateOfBirth` : Your full date of birth will go here. This is separated in three fields -  
      * `date` : date part (DD) of your D.O.B.  
      * `month` : month part (MM) of your D.O.B.  
      * `year` : year part (YYYY) of your D.O.B.  
      For example, if your D.O.B. is 30th February of 2020 (30-02-2020), then the values will be -  
      ```javascript
      dateOfBirth : {
                date : 30,
                month : 2,
                year : 2020
            }
      ``` 
   * `job` : Your presenmt job role. You _may have to update this one frequently_.  
   **Note** that this will be displayed in website as _"Profession"_. I lately decided to use a term that is more welcvoming for people who are self-employed or have own business. For example - Doctors, Freelancers, Contractors etc.
   * `profilePicture` : This field will contain your profile/professional picture name followed by its format. For example, if your image is named _"myimage.jpg"_ then it should look like `profilePicture : "myimage.jpg"`.  
   * `aboutMe` : Your brief bio. This is an introduction, not an autobiography. As people do not have time to go through a 500-word essay, I advise to keep it within 50 - 100 words, 2-3 sentences, and to the point. However, _you do you._   
   * `residence` : Your city/town/village of residence (present preffered) followed by state (optional), followed by country.  
   * `experience` : An array of your work experience. You do not need to understand array to add details here (or in the following arrays in `data.js` file) but you can read about them [here][infoArray]. If you are familliar with them, know that we are not adding them chronologically (from Past to Present) and processing them in a reverse method in the DOM (**website** for non-tech guys). Instead, we are adding them in a reverse chronological order (from Present to Past). In other words, the latest experience lies in the front (at `arr[0]` for geeks) and the oldest experience lies in the end of array. Now, we insert the experience data as a JS object with following fields -  
      * `start` : This section should hold a string containing month and year info of when you started working there. The format should be "Mmm YYYY".  
      * `end` : Having the _same format_ as `start`, this field will hold the month and year of your resignation/departure from the position.  
      * `role` : Your job designation in that workplace. If you have/had multiple in your time there, add the latest/last one.  
      * `company` : Name of your employer. If you freelanced, add "Various Clients" or any such suitable phrase here.  
      * `jobDesc` : Your job description within 10 words please.  

      For example, if you worked at QWERTY Inc. for 2 years since Jan 2018 as a Provider Verifier, then you will add the object as -  
      ```javascript
      experience: [
         {
            start : "Jan 2018",
            end : "Dec 2020",
            role : "Provider Verifier",
            company : "QWERTY Inc.",
            jobDesc : "Worked 9 hrs each day to verify provider information for US HealthCare companies. Called providers in USA with an AmErIcAn name 'Mike' as if my Indian English accent was not giving me away already. HIPAA is a joke BTW!"
         },
         {
            previous : "experience info..."
         }
      ]
      ```  
   * `education` : Having a similar structure as `experience`, this field contains an array of JS objects containing your education info. The structure is as follows -  
      * `start` : The starting month and year of your verifiable education.  
      * `end` : The ending month and year of your verifiable education.  
      * `course` : Name of the Course.  
      * `under` : Name of the board / education body under whose authority and supervision you completed the course. Example - School boards, Universities etc.  

      For example, if you completed three-year Bachelor of Science course in Physics from Jadavpur University from June 2008 to March 2011 then you will add the object as -  
      ```javascript
      education: [
         {
               start : "Jun 2008",
               end : "Mar 2011",
               course : "B.Sc. (Hons) in Physics",
               under : "J.U. (Jadavpur University)"
         },
         {
            previous : "education info..."
         }
      ]
      ```  
   * `language` : Contains an array of languages you can listen, speak, read, write. Now, I haved used only speaking and writing abilities to denote you can do all four. The logic is: _If you can speak, you can listen and if you can write, you can read too._ The information is passed as JS objects -  
      * `lang_name` : Name of the Language.  
      * `level` : This field will contain your level of proficiency in the said language. You are free to describe your proficiency as you want - Beginner, Intermediate, Limited, Pro, Native etc.
      * `cert` : If youy have any certification in the language to prove your proficiency, then mention it here. For example, IELTS for English.

      For example, I can speak, listen, and write Esperanto but I have limited hold of it. Therefore, I would add something like -  
      ```javascript
      language : [
         {
               lang_name: "Esperanto",
               level: "Limited",
               cert: ""
         },
         {
            other : "language info..."
         }
      ]
      ```
   * `hobbies` : An array of your hobbies. For example -  
      ```javascript
      hobbies : [
         "Reading books",
         "Listening Music",
         "Cycling"
      ]
      ```  
   * `skillset` : Contains an array of skillsets you possess in different fields that are beneficial for your career. Each set is passed as a JS object -  
      * `type` : Name of the skill.  
      * `used` : An array of tools you used for this skill.  
   
      For example - 
      ```javascript
      skillset : [
         {
            type : "Software Development",
            used : [
               "C/C++",
               "Python"
            ]
         },
         {
            type : "Documentation",
            used : [
               "LaTeX",
               "Markdown",
               "HTML"
            ]
         },
         {
            type : "Another Skill Name",
            used : [
               "other",
               "skills"
            ]
         }
      ]
      ```  

3. `portfolio` : This section contains all necessary portfolio details -  
   * `display` : Sets the display for the portfolio contents. By default, only `recentWork` is set to `true`. However, you can set others according to your need.  
   * `publication` : Contains an array of your published articles, papers, and books. Each info is contained as an JS object -  
      * `title` : Title of your published content.  
      * `link` : Link to your published content.  
      * `desc` : A few words on your published content.  

      For example, If you published an IEEE paper like my friend _Sandeepan Sengupta_, then you will upload the information as -  
      ```javascript
       publication : [
            {
               title : "Chaotic cipher based spatial domain steganography with strong resistance against statistical attacks",
               link : "https://ieeexplore.ieee.org/document/8234536",
               desc : "Steganography is a form of secret communication in which a secret message (text, image) is hidden inside a carrier message (text, image). While in cryptography, the goal is to make everything unreadable to the ones who do not know the password, in steganography, on the other hand, the goal is..."
            }
        ]
      ```  
   * `recentWork` : Contains an array of your recent projects. Will be Displayed in a 3x3 Grid in Desktop mode. While you can add as many projects here as you wish, I would request you to limit it within 9 projects or less. Each project detail is passed as an JS object with the following structure -  
      * `projectName` : Name of the project.  
      * `heading` : An one-line heading about this project.  
      * `projectDesc` : A short description of this project.  
      * `projectImage` : An image representing your project.  
      * `sourceCode` : Link to your project Source code (or where it is hosted). If you are not a technical person, imagine that you drew an awesome protrait and uploaded it to some website where people can go and view it. Insert that url here.  
      * `sourceIcon` : insert the icon tag meta that can hint which site your project source is hosted. For example, use github icon tag for projects hosted in GitHub.
      * `projectTags` : An array of tags to define your project. Note that it is related to the `tags` section below. If any of your project tag is not present in `tags`, then it will not help during filtering. You can add them nevertheless.  
      * `license` : Contains your project license information. It has two fields -  
         * `text` : Add the text name for the license.  
         * `svg` : If you have the svg format of your license name, then add it here.  
         **NOTE:** You should add either the `text` or `svg`. **If you add both, the website will load only the `text` to reduce load**. Now, you can be a bit tricky (and geeky) and add a WebFont or SVG stylesheet in `settings.js` and add the necessary code to display your license from there in the `text` field. It will work too.  
      
      For example, This is a demo project -  
      ```javascript
       recentWork : [
            {
               projectName : "Project Demo",
               heading : "A demo project",
               projectDesc : "Like I said, it is a demo project.",
               projectImage : "./path/or-add-an-img-url.png",
               sourceCode : "https://github.com/githubtraining/hellogitworld",
               sourceIcon : '<i class="fab fa-github"></i>',
               projectTags : ["Markdown", "Training"],
               license : {
                  text : "MIT License 4.0",
                  svg : "only-text-will-load-here.svg"
               }
            }
        ]
      ```  
   
   * `tags` : An array of tags. Each tag has two fields -  
      * `name` : Name of the Tag.
      * `icon` : _(Optional)_ Icon for the tag. Should be either SVG or Webfont. I have used Font Awesome 5 for this project so check out their docs [here][FAdocs].

4. `contact` : This section contains your contact information. The fields are so follows -  
   * `statement` : A few words on how to contact you. Necessary if you choose to keep your contact info private.  
   * `showContactInfo` : a boolean value indicating whether you want to show contact info or not. **BEWARE!** If you choose to set it to false, it is best to not fill up the fields below either (except `catchMeOn`).  
   * `phone` : Contains your phone number. You can add it in any order you want but I prefer the following -  `"phone" : "+<CountryCode> 9876-543210"` where `CountryCode` will be replaced by your contry's code. For India, it is `91`. Hence, the field for an Indian Person will be - `phone : "+91 9876-543210"`.  
   * `email` : Contains your email id. For example - `email : "your.name@mail.com"`.  
   * `address` : Contains your complete Office/ Work address. How you write it is upto you.  
   * `catchMeOn` : Contains an array of social and professional platform buttons to reach you. each button has three fields -
      * `name` : Name of the platform.
      * `icon` : Icon tag that represents the platform.
      * `link` : Link to your account in that platform.  
      For example, see the following -  
      ```javascript
      catchMeOn : [
            {
               name: "LinkedIn",
               icon : '<i class="fab fa-linkedin"></i>',
               link: "https://www.linkedin.com/"
            },
            {
               name: "Github",
               icon: '<i class="fab fa-github"></i>',
               link: "https://github.com/"
            }
         ]
      ```
   * `useContactForm` : Boolean value to determine whether to show contact form or not.  
   * `contactForm` : Contains two fields to use in the basic contact form implemented here -
      * `action` : the action value of a contact form. Look up contact forms to learn how to use this. Use services like Formspree if you want it simple.
      * `guideline` : A text field that may contain any message you wish to convey to visitors. Leave empty if not needed.

### Configuring `settings.js`:
Structure of `settings.js` is as below -  

1. `blog` : A url to your blog site. If you have a blog, put the link here and a "Blog" button will appear in Navigation Bar. If you do not have any, keep this field empty.  

2. `projImgRatio` : Bulma CSS class to determine imag ratio for the project images in protfolio grid.

3. `changeTheme` : A Boolean switch to enable daily theme color change. Set to `true` by default.  

4. `todayTheme` : Theme color by default is _dodgerblue_. If `changeTheme` is not disabled, then it will change on daily basis.  

5. `colors` : An array of seven colors for seven days of week. It matches with the output of Javascript's Date() object's getDay() method and sets the color accordingly. The structure is as follows -  

| Array Index | Day of Week | Colors |
|:---:|:--- |:--- |
0 | Sunday | "rgb(30, 144, 255)"
1 | Monday | "rgb(251, 119, 119)"
2 | Tuesday | "rgb(107, 142, 35)"
3 | Wednesday | "rgb(222, 166, 72)"
4 | Thursday | "rgb(32, 178, 170)"
5 | Friday | "rgb(255, 160, 122)"
6 | Saturday | "rgb(168, 94, 253)"  

If you desire to change the color of Wednesday, you will have to quote the color code (hex or rgb or whatevet) in "" and paste it in the 4th position i.e. 3rd index of the array.  

6. `iconHTMLStr` : String of HTML Link Tags for favicon. You may not need to change this. Just generate your own favicon and put it in respective folder.

7. `RNF`: DO NOT CHANGE.

8. `preLoad` : An JS Object that contains scripts that needs to be loaded. **_PLEASE DO NOT REMOVE ** the scripts pre-added there._ Also, read about how `fallback.js` works [here][fallbackGithubDoc] and this [article][FBMfallbackjs] to understand why and how `fallback.load()` works and how `Settings.preload` works with it. 

9. `frameLoad`: Same as preload.

10. `toLoad` : An JS object that contains scripts that needs to be loaded. **_PLEASE DO NOT REMOVE ** the scripts pre-added there._ Also, read about how `fallback.js` works [here][fallbackGithubDoc] and this [article][FBMfallbackjs] to understand why and how `fallback.load()` works and how `Settings.toload` works with it. 

11. `lastload` : Same as toload.

----
# Thanks!


[titleMDN]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title

[infoArray]: https://www.geeksforgeeks.org/introduction-to-arrays/
[infoCDN]: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/
[FBMbasics]: https://www.hanselman.com/blog/CDNsFailButYourScriptsDontHaveToFallbackFromCDNToLocalJQuery.aspx

[FBMfallbackjs]: https://eddmann.com/posts/providing-local-js-and-css-resources-for-cdn-fallbacks/
[fallbackGithubDoc]: https://github.com/dolox/fallback/blob/v1/README.md

[FAdocs]: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
