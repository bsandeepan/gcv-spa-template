<!-- All content in this file is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. -->
# Project: GlitchCV Website Template

**_Details_ :** A CV/Portfolio Single Page Website template for individual use with custom CLI-based CMS, helping you to change information in your CV website as you require. Beware! There will be a Glitch in your CV! :)  

**_License Info_ :** GlitchCV SPA (also known as GCV SPA) uses two separate licenses -

1. the code structure and underlying logic of GCV SPA template is licensed under [GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html). The author requests all users, and developers who modify the source code, to not remove the existing footer credit. To view a copy of this license, See the local **LICENSE-code** file.

2. <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a> <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">All dummy content and original artowork(s) in GCV SPA</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/bsandeepan95" property="cc:attributionName" rel="cc:attributionURL">Sandeepan Bhattacharyya</a> is licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. To view a copy of this license, See the local **LICENSE-content** file or visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. Aside the dummy data content, this license also ,without any exception(s), covers -
    - The existing logo image of GCV SPA created by [Sandeepan Sengupta](https://github.com/SandeepanSengupta). 
    - The content of all markdown files and all documentation comments found in files in `./src` folder of this project.

----

## Table of Contents:
- [Annoucement](#announcement)
- [Introduction](#introduction)
- [Future Improvements](#future-improvements)
- [Usage](#usage)
- [Resources](#resources)

## Annoucement: 
This is the version 0.1.0. Stable version coming soon!

### Introduction:
GlitchCV is a personal single page static CV/Portfolio website template. It is minimalistic, user-friendly, fully responsive, and most-importantly, "dynamically static".

For most static website templates out there, you need to look up a bit of HTML and CSS to set them up. I, however, wanted to make a web template where I can just plug in data somewhere separately, and it will be set. Therefore, I designed a Command Line based CMS Interface for GlitchCV to use to load the data dynamically (without any server-side code!) via front-end rendering. You can say it's like a flat-file CMS (for example - Grav), but it's not as interactive and advanced (and definitely does not have a GUI!) as it sounds. However, the headache of figuring out how to fit the new content you want to insert is significantly reduced.

GlitchCV is completely open-source and free to use. Also, the website changes its color daily!  

### Usage:
This template is easy to figure out (or so I tried to make). All you need to do is fill in the necessary data in the JavaScript files located in `./resources/` in the project directory. Go to [User Manual](./Manual-User.md) to learn how to configure the website.

To start, you need to know how to work with **JS Object** format. You can start by reading the official [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) and this [W3Schools JS Object Intro](https://www.w3schools.com/js/js_object_definition.asp).

-  `data.js` file contains all of your necessary information to configure the website. This **KEY** file should be updated whenever you want to make any changes in content.
- `settings.js` file contains few dynamic settings information. In **most** cases, you may not need to configure this file at all. Ideally, unless you know how [Arrays][infoArray], [CDNs][infoCDN], [Fallback Methods][FBMbasics] work, you should not touch this file with confidence.

Proceed to [User Manual](./docs/Manual-User.md) to learn more.

### Future Improvements:
I have these improvements in mind - 
 1. _Changing the cms files into `JSON`_: I wanted to use JSON files instead of JS for loading data and settings since the start. I tried and I failed repeatedly. As my self-committed deadline approached soon, I had to put it aside and use `.js` files to load data. So, there is one improvement I have in mind. Or is using JS files better here? Well, I guess JS files are taking less space and if you, the user, want to minify them to use, it will take even less space.
 2. I want to integrate a clients section. This section will have a Moving display.
 3. I am having ecod thoughts about using percetages to explain your skills. To me, that's simply pretentious. However, many are so I guess I will add it as a feature.

If you think you can make any improvements here (incl. the above sighs), fork the project, add your improvements and open a pull request. I will check it and discuss with you.

### Resources:
<!-- Name of code resources.   -->
CSS: [Bulma Framework](https://bulma.io/)  
Icons: [FontAwsome][FAdocs] and [Devicon](http://konpa.github.io/devicon/)  

----
# Thanks!


[infoArray]: https://www.geeksforgeeks.org/introduction-to-arrays/
[infoCDN]: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/
[FBMbasics]: https://www.hanselman.com/blog/CDNsFailButYourScriptsDontHaveToFallbackFromCDNToLocalJQuery.aspx

[FBMfallbackjs]: https://eddmann.com/posts/providing-local-js-and-css-resources-for-cdn-fallbacks/
[fallbackGithubDoc]: https://github.com/dolox/fallback/blob/v1/README.md

[FAdocs]: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
