# NODE-JS-CODE-STEP-BY-STEP

## What is Node JS?

- Node is not a language
- This is a Server (Runtime) Environment
- Node JS can connect with databases
- Code and sytax is very similar to JavaScript but not exactly the same
- Node JS is free and open-source
- Node JS uses Chrome's V8 Engine to execute code
- Node JS is mostly used for creating API's
- We can connect the same database with Web App and Mobile App
- Node JS is superfast for creating API's
- With Node JS and JavaScript, you can become Full Stack Developer

### History and More

- First Release: May 27, 2009
- Current Version: 16.17.1
- Written in: C, C++, JavaScript

## Difference between Node JS and JavaScript

- JavaScript and Node JS code syntax is same
- You can't connect databases in JavaScript
- You can connect databases in Node JS
- JavaScript runs on client side (browser)
- Node JS runs on server side
  
## Major Topics

- What is Node JS?
- How it works?
- Install and run
- Make basic API's
- Express JS
- UI with Node
  - UI events
  - Forms
  - Web Pages etc
- Node JS events
- Middleware
- Major Packages
- Connection with DB
- Make major API
- API validation
- Interview Questions
- Much More...


**Note:** <code>console.log()</code> in Node JS is different from <code>console.log()</code> in browser

**Note:** Node JS doesn't support <kbd>import</kbd> keyword to import the core modules and the local files and folders. Alternatively, we can use <kbd>require</kbd> keyword

## Filter Method

Filter method is used to filter out some elements from array based on some specific condition.

```javascript
const names = ['Alex', 'Billy', 'Dale', 'Alexandria', 'Aaron', 'Dale', 'Dale', 'Billy', 'Alex'];

const namesStartingWithA = names.filter((name) => {
    // return name.startsWith('A');
    // return name[0] === 'A';
    // return name.charAt(0) === 'A';
    // return name.charCodeAt(0) === 65;
    return name.slice(0, 1) === 'A';
})

console.log(namesStartingWithA);
```

### Core Modules

- fs, buffer, http, process

### Non-Global Modules

modules that we need to import

- fs, buffer, http

### Global Modules

modules that we don't need import

- console

## Path

```javascript
const path = require('path');

// returns the directory name of a path
console.log(__dirname);

// returns the directory + filename of a path
console.log(__filename);

// returns the directory + filename of a path
console.log(path.join(__dirname, 'index.js'));
```

## Interview Questions

**Is it necessary to give the same name to the variable as the name of the module?**
**Ans:** No

**How can we just import a specific method of a module?**
**Ans:**

```javascript
const fs = require('fs').writeFileSync;
```

## Create an HTTP Server

**What is HTTP Server?**
**Ans:** It handles the requests and responses.

```javascript
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
}).listen(4500, () => {
    console.log('Server is running on port 4500');
});
```