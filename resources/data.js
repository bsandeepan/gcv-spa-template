// DO NOT TOUCH
(function(window) {

    // MODIFY FROM HERE
    var Data = {
        landing : {
            brandName : "Sandeepan B.",
            greeting : "Hi!",
            displayName : "Sandeepan",
            taglineWork : "Web Developer and Nihilist."
        },
    
        profile : {
            profileName : "Sandeepan Bhattacharyya",
            dateOfBirth : {
                date : 17,
                month : 8,
                year : 1995
            },
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
                        "almost commited suicide. :)"
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
                        "Had about 3 friends in ten years.",
                        "One of them is still a psycho."
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
                        text : '<i class="fab fa-creative-commons"></i> - <i class="fab fa-creative-commons-nc"></i> - <i class="fab fa-creative-commons-by"></i> - <i class="fab fa-creative-commons-sa"></i> 4.0',
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
                    icon : "",
                    link: ""
                }
            ]
        }
    };

    // DO NOT TOUCH
    window.Data = Data;
}(window));
