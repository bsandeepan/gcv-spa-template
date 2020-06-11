/**
 * @copyright Sandeepan Bhattacharyya 2019
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
 * @file Contains user info. Fill the following Data Object to allow 
 *          the template to render your website. Kindly read the 
 *          User Manual beforehand. 
*/

(function(window) {
    // MODIFY FROM HERE
    var Data = {
        landing : {
            pageTitle : "",
            brandName : "GlitchCV SPA",
            greeting : "Hi!",
            displayName : "Sandeepan",
            taglineWork : "Web Developer and Nihilist."
        },
    
        profile : {
            profileName : "Sandeepan Bhattacharyya",
            showAge: true,
            dateOfBirth : {
                date : 7,
                month : 5,
                year : 1991
            },
            cvLink: "https://www.wikipedia.org/",
            job : "Web Developer",
            profilePicture: "./resources/images/Shockwave_0.jpg",
            aboutMe : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis hic culpa explicabo officiis illum necessitatibus tenetur perferendis, dolores cumque ipsam quos velit laboriosam similique. Consequuntur accusamus eum perferendis provident, quia, totam cupiditate ut fuga molestiae ad pariatur praesentium nihil ratione quibusdam unde nostrum voluptatem corporis veniam aperiam, doloremque sapiente facilis!",
            residence: "Kolkata, India",
            experience: [
                {
                    start : "Jan 2011",
                    end : "Dec 2012",
                    role : "Senior Web Developer",
                    company : "VBN Company",
                    jobDesc : "Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.",
                    highlights : [
                        "Rerum sit libero possimus amet excepturi",
                        "Exercitationem enim dolores sunt praesentium dolorum praesentium"
                    ]
                },
                {
                    start : "Jan 2008",
                    end : "Dec 2010",
                    role : "Web Developer",
                    company : "ZXC Company",
                    jobDesc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                    highlights : [
                        "Rerum sit libero possimus amet excepturi",
                        "Exercitationem enim dolores sunt praesentium dolorum praesentium",
                        "Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo"
                    ]
                }
            ],
            education: [
                {
                    start : "May 2004",
                    end : "Mar 2007",
                    course : "B.Sc. (Hons) in Computer Science",
                    under : "W.B.S.U. (West Bengal State University)",
                    studyDesc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, sed.",
                    highlights : [
                        "welp, survived somehow!",
                        "Had aspirations when enrolled.",
                        "Dead inside post graduation."
                    ]
                },
                {
                    start : "May 2002",
                    end : "Mar 2004",
                    course : "Higher Secondary Education",
                    under : "W.B.C.H.S.E. (West Bengal Council of Higher Secondary Education)",
                    studyDesc : "Lorem ipsum dolor sit. Exercitationem, sed.",
                    highlights : []
                },
                {
                    start : "Jun 2000",
                    end : "Apr 2002",
                    course : "Secondary Education",
                    under : "W.B.B.S.E. (West Bengal Board of Secondary Education)",
                    studyDesc : "Lorem adipisicing elit. Exercitationem, sed.",
                    highlights : [
                        "Ingorance is bliss.",
                        "Life was... okay."
                    ]
                }
            ],
            language : [
                {
                    lang_name: "English",
                    level: "Pro",
                    cert: "SESET2018"
                },
                {
                    lang_name: "Bengali",
                    level: "Native",
                    cert: "School"
                },
                {
                    lang_name: "Hindi",
                    level: "Limited",
                    cert: ""
                }
            ],
            hobbies : [
                "Reading books",
                "Listening Music",
                "Cycling",
                "Imagining the end of the world."
            ],
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
                    type : "Web Development",
                    used : [
                        "HTML5",
                        "CSS3",
                        "SASS",
                        "Python 3.x",
                        "Javascript (ES5, ES6, ESNext)"
                    ]
                },
                {
                    type : "DBMS (SQL & NoSQL)",
                    used : [
                       "Oracle",
                       "PostgreSQL",
                       "MongoDB"
                    ]
                }
            ]
        },
    
        portfolio : {
            display : {
                publication : true,
                recentWork : true
            },
            publication : [
                {
                    title : "Chaos Theory",
                    link : "https://www.youtube.com/",
                    desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, animi."
                },
                {
                    title : "Metro Exodus",
                    link : "https://www.metrothegame.com/en-us/",
                    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea consectetur facilis aliquid aspernatur autem molestias consequatur error possimus iusto."
                },
                {
                    title : "MEAN to MERN",
                    link : "",
                    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit fuga consectetur necessitatibus, accusantium tenetur."
                }
            ],
            recentWork : [
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "./resources/images/insaniyat.jpg",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["Pyhton", "HTML", "CSS", "JavaScript"],
                    license : {
                        text : '<i class="fab fa-creative-commons"></i>-<i class="fab fa-creative-commons-nc"></i>-<i class="fab fa-creative-commons-by"></i>-<i class="fab fa-creative-commons-sa"></i> 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["Python", "HTML", "CSS", "JavaScript"],
                    license : {
                        text : '<i class="fab fa-creative-commons"></i>-<i class="fab fa-creative-commons-nc"></i>-<i class="fab fa-creative-commons-by"></i>-<i class="fab fa-creative-commons-sa"></i> 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["ErLang", "HTML", "CSS", "JavaScript"],
                    license : {
                        text : 'CC-NC-BY-SA 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["Python", "HTML", "CSS", "JavaScript"],
                    license : {
                        text : '<i class="fab fa-creative-commons"></i>-<i class="fab fa-creative-commons-nc"></i>-<i class="fab fa-creative-commons-by"></i>-<i class="fab fa-creative-commons-sa"></i> 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["Python", "HTML", "CSS", "Go"],
                    license : {
                        text : 'CC-NC-BY-SA 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["Go", "HTML", "CSS", "Ruby"],
                    license : {
                        text : '<i class="fab fa-creative-commons"></i>-<i class="fab fa-creative-commons-nc"></i>-<i class="fab fa-creative-commons-by"></i>-<i class="fab fa-creative-commons-sa"></i> 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["C++", "HTML", "CSS", "JavaScript"],
                    license : {
                        text : 'CC-NC-BY-SA 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["Python", "HTML", "CSS", "JavaScript"],
                    license : {
                        text : '<i class="fab fa-creative-commons"></i>-<i class="fab fa-creative-commons-nc"></i>-<i class="fab fa-creative-commons-by"></i>-<i class="fab fa-creative-commons-sa"></i> 4.0',
                        svg : ""
                    }
                },
                {
                    projectName : "Project Alpha",
                    heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    projectDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis harum voluptate optio hic corporis eligendi quibusdam qui magnam. Dicta!",
                    projectImage : "./resources/images/insaniyat.jpg",
                    sourceCode : "https://github.com/",
                    sourceIcon : '<i class="fab fa-github"></i>',
                    projectTags : ["Python", "HTML", "CSS", "JavaScript"],
                    license : {
                        text : 'CC-NC-BY-SA 4.0',
                        svg : ""
                    }
                }
            ],
            tags : [
                {
                    name : "Python",
                    icon : '<i class="devicon-python-plain"></i>'
                },
                {
                    name : "HTML",
                    icon : '<i class="devicon-html5-plain"></i>'
                },
                {
                    name : "CSS",
                    icon : '<i class="devicon-css3-plain"></i>'
                },
                {
                    name : "JavaScript",
                    icon : '<i class="devicon-javascript-plain"></i>'
                },
                {
                    name : "Go",
                    icon : '<i class="devicon-go-plain"></i>'
                },
                {
                    name : "Ruby",
                    icon : ' <i class="devicon-ruby-plain"></i>'
                },
                {
                    name : "C++",
                    icon : '<i class="devicon-cplusplus-plain"></i>'
                }
            ]
        },
    
        contact : {
            statement: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nesciunt non quia, corrupti labore sunt obcaecati et porro expedita hic!",
            showContactInfo: true,
            phone : "+91 9876-543210",
            email : "your.name@mail.com",
            address : "2120 S Michigan Ave, Chicago, IL 60616, USA",
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
                },
                {
                    name: "HackerRank",
                    icon: '<i class="fab fa-hackerrank"></i>',
                    link: "https://www.hackerrank.com/"
                },
                {
                    name: "Facebook",
                    icon: '<i class="fab fa-facebook"></i>',
                    link: "https://www.facebook.com/"
                },
                {
                    name: "Twitter",
                    icon: '<i class="fab fa-twitter"></i>',
                    link: "https://twitter.com/"
                },
                {
                    name: "Kaggle",
                    icon: '<i class="fab fa-kaggle"></i>',
                    link: "https://www.kaggle.com/"
                }
            ],
            useContactForm: true,
            contactForm: {
                action: "https://formspree.io/bsandeepan95.work@gmail.com",
                guideline: "Keep your message concise and to-the-point. For any files, upload them in cloud and share the link along with a reason for me to open them. Thank you!"
            }
        }
    };

    // DO NOT TOUCH
    window.Data = Data;
}(window));
