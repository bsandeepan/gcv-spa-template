/** */
( function() {
    // An One-stop obj solution to maintain all DOM IDs and classnames(CL)
    // var Settings = window.Settings;
    // var Data = window.Data;
    var DOMStrings = {
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
        myResidenceID : "personResidence"
        // portfolio page tags
        // contact page tags
    }

    /**Calculates age in years (x years) */
    function calculate_age(dobYear, dobMonth, dobDate)
    {
        var tDate, tYear, tMonth, tDay, ageYears, ageText="";
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

    

    // Loading landing page data
    document.getElementById(DOMStrings.brandNameID).innerText = Data.landing.brandName;
    let greetStr = `${Data.landing.greeting} I am ${Data.landing.displayName}`;
    document.getElementById(DOMStrings.displayNameID).innerText = greetStr.toUpperCase();
    document.getElementById(DOMStrings.taglineWorkID).innerText = Data.landing.taglineWork;

    // loading profile page data
    document.getElementById(DOMStrings.myImageID).src = Settings.imagePath + Data.profile.profilePicture;
    document.getElementById(DOMStrings.myAboutMeID).innerText = Data.profile.aboutMe;
    document.getElementById(DOMStrings.myNameID).innerText = Data.profile.profileName;
    document.getElementById(DOMStrings.myJobID).innerText = Data.profile.job;
    document.getElementById(DOMStrings.myResidenceID).innerText = Data.profile.residence;
    document.getElementById(DOMStrings.myAgeID).innerText = calculate_age(  Data.profile.dateOfBirth.year,
                                                                            Data.profile.dateOfBirth.month,
                                                                            Data.profile.dateOfBirth.date
    );

    // loading experience data
}
)();