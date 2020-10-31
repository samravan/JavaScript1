'use strict'
let books = [
    {
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        alreadyRead: true,
    },
    {
        title: "Harry Potter",
        author: "J.K Rolling",
        alreadyRead: false,
    },
    {
        title: "Deep Work",
        author: "Kal Newport",
        alreadyRead: false,
    }
]



books.forEach((element, index, array) => {
    console.log(element.title + " by " + element.author);
    if (element.alreadyRead === true) {
        console.log("You already read " + element.title)
    } else {
        console.log("You still need to read " + element.title)
    };
});






