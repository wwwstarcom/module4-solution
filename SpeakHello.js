
(function (window) {                            /* Start of IIFE function */
    var helloSpeaker = {};                      /* Declare Object to keep the function speak and make helloSpeaker.speak to be avaliable at window */
    speakWord = "Hello";                        /* Declare variable to store "Hello" text */
    helloSpeaker.speak = function (name) {      /* Start of function speak */
        console.log(speakWord + " " + name);    /* Write mytext variable + space + name that will be provided by the speakAll.speak */
    }                                           /* End of function speak */
    window.helloSpeaker = helloSpeaker;         /* Add helloSpeaker function to the list of window objects (or whatever) */
})(window);                                     /* End of IIFE function */
