const supportConfig = {


    // Embed for the help desk
    embed: {
        title: "Help Desk",
        description: "Furry Vanguard help desk! If you think any FAQs should be added feel free to suggest them in #suggestions!",
        //thumbnail: "image URL for thumbnail in top right corner",
        //image: "image URL for big image at bottom",
        footer: "Secret :3"
    },


    // The support settings
    support: {
        disableSupport: false, // Disables support
        createThread: true, // Creates a private thread. If you want to change how requestMessage and supportMessage work modify the strings in the support function in interactions.js
        supportRole: "1328588097184596000", // Role given to the user if extra support is requested
        requestMessage: "A support ticket has been made", // If create thread is enabled then the created thread will be automatically added to the end of the default message.
        supportMessage: "We will be with you shortly, in the meantime please ask you question in as much detail as you can!",
        supportChannel: "1284702636309741598",
 

        selectMenuName: "Need help? Select a question!",
        supportOption: {
            name: "Open a ticket",
            //description: "I need more support!",
            //emote: "❓"
        },


        loggingChannel: "1328585908324405269", // Channel for logging all questions and support status
        notificationRole: "1284159108223860776", // Role for staff
    },


    // Array of questions and answers for the help desk
    questions: [
        {
            question: "How do I get the 'Verified Roblox' role?",
            //questionDescription: "",
            //emote: "",
    
            answer: "If you do not already have the role, go to #intermission and follow the instructions there!",
            directSupport: false
        },
        {
            question: "What do I do if a user is breaking the rules?",
            //questionDescription: "",
            //emote: "",
    
            answer: "Gather evidence and report it with this button + you can select open ticket and it will do the same thing.",
            //image: "",
            directSupport: true
        },
        {
            question: "How do I report faction rule breaks?",
            //questionDescription: "",
            //emote: "",
    
            answer: "These are classified, however to report faction rule breaks DM a Leadership member.",
            //image: "",
            directSupport: false
        },
        {
            question: "How do I enlist in the faction?",
            //questionDescription: "",
            //emote: "",
    
            answer: "You can enlist in #faction-requirements to see if you meet the requirements, then fill out the form provided by Appy and then it will be reviewed and accepted or denied. Good luck!",
            //image: "",
            directSupport: false
        },
        {
            question: "Are faction slots full?",
            //questionDescription: "",
            //emote: "",
    
            answer: "No, as of now we have plenty of slots open, feel free to enlist today in #faction-requirements!",
            //image: "",
            directSupport: false
        },
        {
            question: "When was this last updated?",
            //questionDescription: "",
            //emote: "",
    
            answer: "This help desk was last updated on <t:1739766600:D>.",
            //image: "",
            directSupport: false
        },
    ]

}


module.exports = supportConfig
