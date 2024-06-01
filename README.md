# Book-Review-CRUD-Website
MySQL, react.js, and node.js based CRUD website.
Created a folder named BookReview and inside it created two more folders named 
## client: 
Contains front-end work. 
In the client folder inside the terminal type > npx create-react-app . (along with the fullstop). If this creates issue open command prompt->go to client folder->type the same code.

## server:
Contains back-end work. npm init
In the server folder inside the terminal npm install express body-parser mysql nodemon. 
### nodemon:
It automatically restarts the node app when it senses any changes. 

### Issues I faced:
We try to use youtube to create our website but there are many errors that we face. Most of them are common but takes hours to find out the solution and resolve.
->If you run your front-end first, it is normal but working with nodemon will become hard because it will show an error saying '[nodemon] app crashed - waiting for file changes before starting...'
If you face this issue try to run back-end first and later front-end. You don't need to restart anything. It will be hard to start everything again.
-> While working with MySQL workbench make sure you didn't write wrong password.
### Major issue I faced:
While working with axios. Make sure your localhost site from back-end is responsive otherwise your database wouldn't accept the data. 
Create names or variables and remember them throughout the journey.
You might face issue with confusion of wether your api is get or post so consider it.
