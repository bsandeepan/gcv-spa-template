# Project: Glitch CV Website Template

**_Details_ :** A CV/Portfolio SPA web template for all to use. Beware! There will be a Glitch in your CV!  

----

## Contents:

1. **Usage**: This template is easy to figure out (or so I tried to do). All you need to do is fill in the necessary data in the `.\resources\data.json` file in the project folder. Structure of `data.json` is as below -  
   
   * `landing` : This section contains fields displayed in landing page -  
      
      * `displayName` : This name will be displayed in CAPITAL. I advise to use only your first name here for better view across platforms.  
      
      * `taglineWork` : This field should hold your job profile. For example, a tagline for me could be _"Full Stack Web Developer and Nihilist"._  
   
   * `profile` : This section contains all profile details -  
      
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

2. **Resources**: name of code resources.  

----
# Thanks!