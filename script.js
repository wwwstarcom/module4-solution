// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:

/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/


(function (window) {                                    /* Start of IIFE function */
    var speakAll = {};                                  /* Declare Object to keep the function speak and make SpeakAll.speak to be avaliable at window */
    names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; /* declare variable array */
   
    speakAll.speak = function () {                      /* Start of speak function. The function will be called by speakAll.Speak() */
        var i;
        for (i = 0; i < names.length; i++) {            /* For loop through all the names array */
            var name = names[i];                        /* Get the single name from names array */
            var firstchar = name.substring(0, 1);       /* Get the first char of currnet name */
            var uppercasechar = firstchar.toUpperCase();/* Make first char Upper Case*/
            if (uppercasechar == "J") {                 /* start of if TRUE */
                byeSpeaker.speak(names[i]);             /* Call byeSpeaker to log in console current name by the index */
            } /* end of if TRUE */ else {               /* start of if FALSE */
                helloSpeaker.speak(names[i]);           /* Call helloSpeaker to log in console current name by the index */
            }                                           /* end of if FALSE */
        }                                               /* end of for loop */

    }                                                   /* End of speak function */
        window.speakAll = speakAll;                     /* Add speakAll function to the list of window objects (or whatever) */

    })(window);                                         /* End of IIFE function */
    
speakAll.speak();                                       /* Run the function that will do all the work */