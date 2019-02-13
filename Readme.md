# Project: Glitch CV Website Template

**_Details_ :** A CV/Portfolio SPA web template for all to use. Beware! There will be a Glitch in your CV!  

----

## Table of Contents:
- [Introduction](#introduction)
- [Usage](#usage)
- [Configuring `data.json`](#configuring-data.json)
- [Configuring `settings.json`](#configuring-settings.json)
- [Resources](#resources)

### Introduction:
GlitchCV is a personal single page (SPA) website template. It is minimalistic yet stylish, very user-friendly, and fully responsive.  

For most static web templates out there, you need to look up a bit of HTML and CSS to set them up. I, however, wanted to make a web template where I can just plug in data somewhere separately, and it will be set. Therefore, I made my own. It is completely open-source and free to use. Also, the website changes its color daily!  

### Usage:
This template is easy to figure out (or so I tried to make). All you need to do is fill in the necessary data in the JSON files located in `./resources/` in the project directory. All you need to start is knowing how to add data in **JSON** format. You can start by reading the official [JSON docs](http://www.json.org/) and this [W3Schools JSON Intro](https://www.w3schools.com/js/js_json_intro.asp).  

-  `data.json` file contains all of your necessary information to configure the website. This **KEY** file should be updated whenever you want to make any changes. Read [this section](#configuring-data.json) to learn how to configure it. Also, you should make a back-up copy of this file for safety purpose. Unless you love it when your main file gets damaged or lost, and you have to fill out 100s of fields all over again!    
- `settings.json` file contains some settings information. In **most** cases, you may not need to configure this file at all. Ideally, unless you know how [Arrays][infoArray], [CDNs][infoCDN], [Fallback Methods][FBMbasics] work, you should not touch this file confidently.  

Therefore, let us list some possible cases -  
1. You do not like how the colors change daily (why though??) and you want it to stop.  
2. You do not like one or few of the colors and wish to change them according to your taste.  
3. You want to use some additional CSS Fonts and icons stylesheets in your website.  
   **NOTE: DO NOT REMOVE** the stylesheets that are already there. They are being used and integrated into the template by design and altering them will **_break the code_**!!.  

Now, if you feel the need to configure this file, proceed to [this section](#configuring-settings.json).

### Configuring `data.json`:
Structure of `data.json` is as below -  
   
1. `landing` : This section contains fields displayed in landing page -  
   
   * `displayName` : This name will be displayed in CAPITAL. I advise to use only your first name here for better view across platforms.  
   
   * `taglineWork` : This field should hold your job profile. For example, a tagline for me could be _"Full Stack Web Developer and Nihilist"._  

2. `profile` : This section contains all profile details -  
   
   * `profileName`: Your full name should go here. Now, I admit that I could have broken it down to First Name, Middle Name and Last Name, but I realize that different people write their name differently. Some would write last name followed by first name, or only the first name. Since it is a static protfolio site, I wanted the users to freely display their name.  
   
   * `dateOfBirth` : Your full date of birth will go here. This is separated in three fields -  
      * `date` : date part (DD) of your D.O.B.  
      * `month` : month part (MM) of your D.O.B.  
      * `year` : year part (YYYY) of your D.O.B.  

      For example, if your D.O.B. is 30th February of 2020 (30-02-2020), then the values will be -  
      * `"date" : 30`  
      * `"month" : 2`  
      * `"year" : 2020`  
   
   * `job` : Your presenmt job role. You _may have to update this one frequently_.  
   
   * `profilePicture` : This field will contain your profile/professional picture name followed by its format. For example, if your image is named _"myimage.jpg"_ then it should look like `"profilePicture" : "myimage.jpg"`.  
   
   * `aboutMe` : Your brief bio. Seriously, recruiters do not have time to go through a 500-word essay. Keep it within 50 - 100 words, 2-3 sentences, and to the point. This is a pitch, not an autobiography.  

   * `country` : Your Country of Citizenship.  
   
   * `city` : Your residential city.

   * `experience` : An array of your work experience. You do not need to understand array to add details here (or in the following arrays in `data.json` file) but you can read about them [here][infoArray]. If you are familliar with them, know that we are not adding them chronologically (from Past to Present) and processing them in a reverse method in the DOM (**website** for non-tech guys). Instead, we are adding them in a reverse chronological order (from Present to Past). In other words, the latest experience lies in the front (at `arr[0]` for geeks) and the oldest experience lies in the end of array. Now, we insert the experience data as a JSON object with following fields -  
      * `start` : This section should hold a string containing month and year info of when you started working there. The format should be "Mmm YYYY".  
      * `end` : Having the _same format_ as `start`, this field will hold the month and year of your resignation/departure from the position.  
      * `role` : Your job designation in that workplace. If you have/had multiple in your time there, add the latest/last one.  
      * `company` : Name of your employer. If you freelanced, add "Various Clients" or any such suitable phrase here.  
      * `jobDesc` : Your job description within 10 words please.  

      For example, if you worked at QWERTY Inc. for 2 years since Jan 2018 as a Provider Verifier, then you will add the object as -  
      ```JSON
      "experience": [
         {
            "start" : "Jan 2018",
            "end" : "Dec 2020",
            "role" : "Provider Verifier",
            "company" : "QWERTY Inc.",
            "jobDesc" : "Worked 9 hrs each day to verify provider information for US HealthCare companies. Called providers in USA with an AmErIcAn name 'Mike' as if my Indian English accent was not giving me away already. HIPAA is a joke BTW!"
         },
         {
            "previous" : "experience info..."
         }
      ]
      ```  

   * `education` : Having a similar structure as `experience`, this field contains an array of JSON objects containing your education info. The structure is as follows -  
      * `start` : The starting month and year of your verifiable education.  
      * `end` : The ending month and year of your verifiable education.  
      * `course` : Name of the Course.  
      * `under` : Name of the board / education body under whose authority and supervision you completed the course. Example - School boards, Universities etc.  

      For example, if you completed three-year B.Sc. course in Physics from Jadavpur University from June 2008 to March 2011 then you will add the object as -  
      ```JSON
      "education": [
         {
               "start" : "Jun 2008",
               "end" : "Mar 2011",
               "course" : "B.Sc. (Hons) in Physics",
               "under" : "J.U. (Jadavpur University)"
         },
         {
            "previous" : "education info..."
         }
      ]
      ```  
   
   * `language` : Contains an array of languages you can listen, speak, read, write. Now, I haved used only speaking and writing abilities to denote you can do all four. The logic is: _If you can speak, you can listen and if you can write, you can read too._ The information is passed as JSON objects -  
      * `lang_name` : Name of the Language.  
      * `can_speak` : This field will contain Boolean values i.e. put **0** if you can not speak in this language, or **1** if you can.  
      * `can_write` : This field will contain Boolean values i.e. put **0** if you can not write in this language, or **1** if you can.  

      For example, I can speak and listen Hindi but I cannot read or write it. Therefore, I would add something like -  
      ```JSON
      "language" : [
         {
               "lang_name": "Hindi",
               "can_speak" : true,
               "can_write" : false
         },
         {
            "other" : "language info..."
         }
      ]
      ```
   
   * `hobbies` : An array of your hobbies. For example -  
      ```JSON
      "hobbies" : [
         "Reading books",
         "Listening Music",
         "Cycling"
      ]
      ```  
   
   * `skillset` : Contains an array of skillsets you possess in different fields that are beneficial for your career. Each set is passed as a JSON object -  
      * `type` : Name of the skill.  
      * `used` : An array of tools you used for this skill.  
   
      For example - 
      ```JSON
      "skillset" : [
         {
            "type" : "Software Development",
            "used" : [
               "C/C++",
               "Python"
            ]
         },
         {
            "type" : "Documentation",
            "used" : [
               "LaTeX",
               "Markdown",
               "HTML"
            ]
         },
         {
            "type" : "Another Skill Name",
            "used" : [
               "other",
               "skills"
            ]
         }
      ]
      ```  

3. `portfolio` : This section contains all necessary portfolio details -  
   * `publication` : 

4. `contact` : This section contains your contact information. The fields are so follows -  
   * `phone` : Contains your phone number. You can add it in any order you want but I prefer the following -  `"phone" : "+<CountryCode> 9876-543210"` where `CountryCode` will be replaced by your contry's code. For India, it is `91`. Hence, the field for an Indian Person will be - `"phone" : "+91 9876-543210"`.  
   * `email` : Contains your email id. For example - 
   `"email" : "your.name@mail.com"`.  
   * `addressOffice` : Contains your complete Office/ Work address. How you write it is upto you.  

### Configuring `settings.json`:
Structure-

### Resources:
Name of code resources.  

----
# Thanks!


[infoArray]: https://www.geeksforgeeks.org/introduction-to-arrays/
[infoCDN]: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/
[FBMbasics]: https://www.hanselman.com/blog/CDNsFailButYourScriptsDontHaveToFallbackFromCDNToLocalJQuery.aspx
[FBMfallbackjs]: https://eddmann.com/posts/providing-local-js-and-css-resources-for-cdn-fallbacks/