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
                date : 30,
                month : 2,
                year : 2020
            },
            job : "Wed Developer",
            profilePicture: "imageName.format",
            aboutMe : "within 50 - 100 words please.",
            country : "country name",
            city : "city name",
            experience: [
                {
                    start : "Jan 2011",
                    end : "Dec 2012",
                    role : "Senior Web Developer",
                    company : "VBN Company",
                    jobDesc : "another few words."
                },
                {
                    start : "Jan 2008",
                    end : "Dec 2010",
                    role : "Web Developer",
                    company : "ZXC Company",
                    jobDesc : "a few words."
                }
            ],
            education: [
                {
                    start : "May 2004",
                    end : "Mar 2007",
                    course : "B.Sc. (Hons) in Computer Science",
                    under : "W.B.S.U. (West Bengal State University)"
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
                        "HTML",
                        "CSS",
                        "Python",
                        "Javascript"
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
            phone : "+91 9876-543210",
            email : "your.name@mail.com",
            addressOffice : "2120 S Michigan Ave, Chicago, IL 60616, USA"
        }
    };

    // DO NOT TOUCH
    window.Data = Data;
}(window));
