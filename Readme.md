# Project: GCV SPA Template

**_Details_ :** A CV/Portfolio SPA website template for all to use. Beware! There will be a Glitch in your CV! :)  

**_License Info_ :** <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a> <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">GCV SPA</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/bsandeepan95" property="cc:attributionName" rel="cc:attributionURL">Sandeepan Bhattacharyya</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. To view a copy of this license, See the local **LICENSE** file or visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.  

----

## Table of Contents:
- [Annoucement](#announcement)
- [Introduction](#introduction)
- [Future Improvements](#future-improvements)
- [Usage](#usage)
- [Configuring `data.js`](#configuring-data.js)
- [Configuring `settings.js`](#configuring-settings.js)
- [Resources](#resources)

## Annoucement: 
This is the version 0.1.0. Stable version coming soon!

### Introduction:
GlitchCV is a personal single page (SPA) website template. It is minimalistic yet stylish, very user-friendly, and fully responsive.  

For most static web templates out there, you need to look up a bit of HTML and CSS to set them up. I, however, wanted to make a web template where I can just plug in data somewhere separately, and it will be set. Therefore, I made my own. It is completely open-source and free to use. Also, the website changes its color daily!  

### Future Improvements:
Would you believe me if I say I wanted to use JSON files instead of JS for loading data and settings? Yes, I wished, I tried and I failed repeatedly. As my self-committed deadline approached soon, I had to put it aside and use `.js` files to load data. So, there is one improvement I have in mind. Or is using JS files better here? Well, I guess JS files are taking less space and if you, the user, want to minify them to use, it will take even less space.

Also, I want to integrate a clients section. This section will have a Moving display. Coming soon.

If you think you can make any improvements here (incl. the above sighs), fork the project, add your improvements and open a pull request. I will check it and discuss with you. :)

### Usage:
This template is easy to figure out (or so I tried to make). All you need to do is fill in the necessary data in the JS files located in `./resources/` in the project directory. All you need to start is knowing how to add data in **JS Object** format. You can start by reading the official [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) and this [W3Schools JS Object Intro](https://www.w3schools.com/js/js_object_definition.asp).  

-  `data.js` file contains all of your necessary information to configure the website. This **KEY** file should be updated whenever you want to make any changes. Read [this section](#configuring-data.js) to learn how to configure it. Also, you should make a back-up copy of this file for safety purpose. Unless you love it when your main file gets damaged or lost, and you have to fill out 100s of fields all over again!    
- `settings.js` file contains some settings information. In **most** cases, you may not need to configure this file at all. Ideally, unless you know how [Arrays][infoArray], [CDNs][infoCDN], [Fallback Methods][FBMbasics] work, you should not touch this file confidently.  

Therefore, let us list some possible cases - 
1. You have a blog and want to include it in your website. 
2. You do not like how the colors change daily (why though??) and you want it to stop.  
3. You do not like one or few of the colors and wish to change them according to your taste.  
4. You want to use some additional CSS Fonts and icons stylesheets in your website.  
   **NOTE: DO NOT REMOVE** the stylesheets that are already there. They are being used and integrated into the template by design and altering them will **_break the code_**!!.  

Now, if you feel the need to configure this file, proceed to [this section](#configuring-settings.js).

### Configuring `data.js`:
Structure of `data.js` is as below -  
   
1. `landing` : This section contains fields displayed in landing page -  
   
   * `brandName` : Contains the text that will be displayed as Brand Name, on top left of Navbar. Clicking the brand name will lead you to the top of the website, the landing page.  
   
   * `greeting` : Contains the greeting phrase. By default, I set it to "Hi!" but you can greet visitors in Klingon (nuqneH) too.  

   * `displayName` : This name will be displayed in CAPITAL. I advise to use only your first name here for better view across platforms.  
   
   * `taglineWork` : This field should hold your job profile. For example, a tagline for me could be _"Full Stack Web Developer and Nihilist"._  

2. `profile` : This section contains all profile details -  
   
   * `profileName`: Your full name should go here. Now, I admit that I could have broken it down to First Name, Middle Name and Last Name, but I realize that different people write their name differently. Some would write last name followed by first name, or only the first name. Since it is a static protfolio site, I wanted the users to freely display their name.  
   
   * `dateOfBirth` : Your full date of birth will go here. This is separated in three fields -  
      * `date` : date part (DD) of your D.O.B.  
      * `month` : month part (MM) of your D.O.B.  
      * `year` : year part (YYYY) of your D.O.B.  

      For example, if your D.O.B. is 30th February of 2020 (30-02-2020), then the values will be -  
      * `date : 30`  
      * `month : 2`  
      * `year : 2020`  
   
   * `job` : Your presenmt job role. You _may have to update this one frequently_.  
   
   * `profilePicture` : This field will contain your profile/professional picture name followed by its format. For example, if your image is named _"myimage.jpg"_ then it should look like `profilePicture : "myimage.jpg"`.  
   
   * `aboutMe` : Your brief bio. Seriously, recruiters do not have time to go through a 500-word essay. Keep it within 50 - 100 words, 2-3 sentences, and to the point. This is a pitch, not an autobiography.  

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

      For example, if you completed three-year B.Sc. course in Physics from Jadavpur University from June 2008 to March 2011 then you will add the object as -  
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
      * `can_speak` : This field will contain Boolean values i.e. put **0** if you can not speak in this language, or **1** if you can.  
      * `can_write` : This field will contain Boolean values i.e. put **0** if you can not write in this language, or **1** if you can.  

      For example, I can speak and listen Hindi but I cannot read or write it. Therefore, I would add something like -  
      ```javascript
      language : [
         {
               lang_name: "Hindi",
               can_speak : true,
               can_write : false
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

      For example, If you published an IEEE paper like my friend [Sandeepan Sengupta](https://www.sandeepan.info/), then you will upload the information as -  
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
               projectTags : ["Markdown", "Training"],
               license : {
                  text : "MIT License 4.0",
                  svg : "only-text-will-load.svg"
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

### Configuring `settings.js`:
Structure of `settings.js` is as below -  

1. `blog` : A url to your blog site. If you have a blog, put the link here and a "Blog" button will appear in Navigation Bar. If you do not have any, keep this field empty.  

2. `changeTheme` : A Boolean switch to enable daily theme color change. Set to `true` by default.  

3. `todayTheme` : Theme color by default is _dodgerblue_. If `changeTheme` is not disabled, then it will change on daily basis.  

4. `colors` : An array of seven colors for seven days of week. It matches with the output of Javascript's Date() object's getDay() method and sets the color accordingly. The structure is as follows -  

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

5. `toLoad` : An JS object that contains scripts that needs to be loaded. **_PLEASE DO NOT REMOVE ** the scripts pre-added there._ Also, read about how `fallback.js` works [here][fallbackGithubDoc] and this [article][FBMfallbackjs] to understand why and how `fallback.load()` works and how `Settings.toload` works with it. 

### Resources:
Name of code resources.  

----
# Thanks!


[infoArray]: https://www.geeksforgeeks.org/introduction-to-arrays/
[infoCDN]: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/
[FBMbasics]: https://www.hanselman.com/blog/CDNsFailButYourScriptsDontHaveToFallbackFromCDNToLocalJQuery.aspx

[FBMfallbackjs]: https://eddmann.com/posts/providing-local-js-and-css-resources-for-cdn-fallbacks/
[fallbackGithubDoc]: https://github.com/dolox/fallback/blob/v1/README.md

[FAdocs]: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
