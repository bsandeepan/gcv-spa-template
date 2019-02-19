( function() {
    // An One-stop obj solution to maintain all DOM IDs and classnames(CL)
    var DOMStrings = {
        brandNameID : "brandName",
        displayNameID : "landingTitle",
        taglineWorkID : "landingTag"
    }

    // Loading landing page data
    document.getElementById(DOMStrings.brandNameID).innerText = Data.landing.brandName;
    let greetStr = `${Data.landing.greeting} I am ${Data.landing.displayName}`;
    document.getElementById(DOMStrings.displayNameID).innerText = greetStr.toUpperCase();
    document.getElementById(DOMStrings.taglineWorkID).innerText = Data.landing.taglineWork;
}
)();