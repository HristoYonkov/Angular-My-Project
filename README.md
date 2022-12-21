# Angular-My-Exam-Project
## Book-Store
A SPA app for Softuni Angular-exam!

## Screenshots
![App Screenshot](Untitled.png)

## Basic Information
The app is like sale store with basic functionality. Every user(not logged in) have access to -> Home (Book Store) a catalog with books and search function for books searched by title and genre. Also, Details, Register and Login. Evry logged in user have acces to -> Book Store, My Books(if has created books), from there the user can edit and delete his own created books, also can add books, enters in profile page and option for logout.
Every logged in user can buy books form the store if he is not the creator and already did not bought the book. The buyed books are going in profile page under the buyed books (if any), from there the user can enter into the details also!

TechStack:
Client Angular: CLI: 14.2.8; TypeScript: ~4.7.2;

Server: Node: >=14.0.0; ExpressJS: ^4.18.2; bcrypt: ^5.1.0; jsonwebtoken: ^8.5.1; mongoose: ^6.7.4; nodemon: ^2.0.20

## Setup

To run Front End: - In directory "Book-Store", open inside cmd and 
run:
$ npm install,
$ npm start 

- Which opens the app at http://localhost:4200 in your browser. 

To run Rest Service: - Open RestService folder for server, open inside cmd and
run: 
$ npm install,

After that use 'commented connection string', cause for cloud database you need authentication!

$ npm start
And the server will start listening on port 3000.
=======
To run Front End: - In directory "Book-Store", open inside cmd and run:
npm install and wait for node modules to build up. After that, ng serve -o, which opens the app at http://localhost:4200 in your browser. 

To run Rest Service: - Open RestService folder for server, open inside cmd and run: npm installand wait for node modules to build up. After thet, npm start and the server will start listening on port 3000.
