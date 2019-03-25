
(function (window) {                        /* Start of IIFE function */
    var byeSpeaker = {};                    /* Declare Object to keep the function speak and make byeSpeaker.speak to be avaliable at window */
    mytext = "Good Bye";                    /* Declare variable to store "Good Bye" text */
    byeSpeaker.speak = function (name) {    /* Start of function speak */
        console.log(mytext + " " + name);   /* Write mytext variable + space + name that will be provided by the speakAll.speak */
    }                                       /* End of function speak */
    window.byeSpeaker = byeSpeaker;         /* Add byeSpeaker function to the list of window objects (or whatever) */
})(window);                                 /* End of IIFE function */
