'use strict'

let books = [ 
  { title : "ASTRONOMY FOR DUMMIES",
    author : "STEPHEN P. MARAN",
    alreadyRead : true
  },

  { title : "ASTRONOMY: A SELF-TEACHING GUIDE",
    author : "DINAH L. MOCHE",
    alreadyRead : false
  },

  { title : "THE UNIVERSE IN A NUTSHELL",
    author : "STEPHEN HAWKING",
    alreadyRead : true
  }
];

for (let i =0 ; i < books.length ; i++) {
  if(books[i].alreadyRead) {
    console.log(books[i].title + ' by ' + books[i].author);
    console.log('You already read \"' + books[i].title + '\"');
  } else {
    console.log(books[i].title + ' by ' + books[i].author);
    console.log('You still need to read \"' + books[i].title + '\"');
  }
  console.log('');
}