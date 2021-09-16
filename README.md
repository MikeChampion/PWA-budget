# Tech Blog

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

I. [Description](#description)  
II. [Install Instructions](#install-instructions)  
III. [Usage Information](#usage-information)  
IV. [Contribution Guidelines](#contribution-guidelines)  
V. [Testing Instructions](#testing-instructions)  
VI. [Questions / Contact](#contact)  
VII. [License](#license)

## <a id="description">I. Description</a>

A CMS style blog site where users can make blog posts, and comment on the posts of other users.

## <a id="install-instructions">II. Install Instructions</a>

Fork it, clone it, from the terminal 'npm i' will install the dotenv, express, express-handlebars, express-session, connect-session-sequelize, sequelize, bcrypt, and MySQL2 packages. Make sure to include a .env file in the root folder with your local MySQL username and password, using 'blog_db' for the database name.

## <a id="usage-information">III. Usage Information</a>

Connect your terminal to mysql and run 'db/source schema.sql' to initialize the database. Then run 'npm start' to run the app. This will use localhost:3001/

### Project Screenshot

![Tech blog screenshot 1](./public/images/Screenshot1.png)
![Tech blog screenshot 2](./public/images/Screenshot2.png)

### Credits

This NodeJS project uses <a href="https://www.npmjs.com/package/express" target="_blank">express</a> for the server, the <a href="https://www.npmjs.com/package/express-handlebars" target="_blank">express-handlebars</a> templating engine, <a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv</a> to secure environment variables, <a href="https://www.npmjs.com/package/sequelize" target="_blank">Sequelize</a> to work with the database, <a href="https://www.npmjs.com/package/connect-session-sequelize" target="_blank">connect-session-sequelize</a> and <a href="https://www.npmjs.com/package/express-session" target="_blank">express-session</a>for session data, <a href="https://www.npmjs.com/package/bcrypt" target="_blank">bcrypt</a> to hash the password, and <a href="https://www.npmjs.com/package/mysql2" target="_blank">mysql2</a> to connect to the database.

## <a id="contribution-guidelines">IV. Contribution Guidelines</a>

Contact me to contribute!

## <a id="testing-instructions">V. Testing Instructions</a>

No tests exist for this project

## <a id="contact">VI. Questions / Contact</a>

If you have any questions, or want to contribute to this or any other project feel free to contact me.

### email

ChampionMike42@gmail.com

### GitHub

<a href="https://github.com/MikeChampion" target="_blank">MikeChampion @ Github</a>

## <a id="license">VII. License</a>

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

<p>Copyright 2021 Mike Champion</p> 
        <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
        <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
        <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
