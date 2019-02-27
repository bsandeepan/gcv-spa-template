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
            job : "Wed Developer",
            profilePicture: "Shockwave_0.jpg",
            aboutMe : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis hic culpa explicabo officiis illum necessitatibus tenetur perferendis, dolores cumque ipsam quos velit laboriosam similique. Consequuntur accusamus eum perferendis provident, quia, totam cupiditate ut fuga molestiae ad pariatur praesentium nihil ratione quibusdam unde nostrum voluptatem corporis veniam aperiam, doloremque sapiente facilis!",
            residence: "Kolkata, India",
            experience: [
                {
                    start : "Jan 2011",
                    end : "Dec 2012",
                    role : "Senior Web Developer",
                    company : "VBN Company",
                    jobDesc : "another few words.",
                    jobDescMore : []
                },
                {
                    start : "Jan 2008",
                    end : "Dec 2010",
                    role : "Web Developer",
                    company : "ZXC Company",
                    jobDesc : "a few words.",
                    highlights : []
                }
            ],
            education: [
                {
                    start : "May 2004",
                    end : "Mar 2007",
                    course : "B.Sc. (Hons) in Computer Science",
                    under : "W.B.S.U. (West Bengal State University)",
                    studyDesc : "a few words",
                    highlights : []
                },
                {
                    start : "May 2002",
                    end : "Mar 2004",
                    course : "Higher Secondary Education",
                    under : "W.B.C.H.S.E. (West Bengal Council of Higher Secondary Education)"
                },
                {
                    start : "Jun 2000",
                    end : "Apr 2002",
                    course : "Secondary Education",
                    under : "W.B.B.S.E. (West Bengal Board of Secondary Education)"
                }
            ],
            language : [
                {
                    lang_name: "English",
                    can_speak : true,
                    can_write : true
                },
                {
                    lang_name: "Bengali",
                    can_speak : true,
                    can_write : true
                },
                {
                    lang_name: "Hindi",
                    can_speak : true,
                    can_write : false
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
                publication : false,
                recentWork : true
            },
            publication : [
                {
                    title : "",
                    link : "",
                    desc : ""
                }
            ],
            recentWork : [
                {
                    projectName : "",
                    heading : "",
                    projectDesc : "",
                    projectImage : "",
                    sourceCode : "",
                    projectTags : [],
                    license : {
                        text : "",
                        svg : ""
                    }
                }
            ],
            tags : [
                {
                    name : "",
                    icon : ""
                }
            ]
        },
    
        contact : {
            statement : "A few words on how to contact you. Necessary if you choose to keep your contact info private.",
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
