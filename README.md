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

## Interview Questions

**What is Package.json?**
**Ans:** This json file contains all the dependencies (non-core-modules) that the current node app is using.

**Should I push node-modules folder to github?**
**Ans:** No

**How can we restore node-modules folder if deleted?**
**Ans:** By running the following command:

```terminal
npm install
```

## Status Codes
**200** - Success: The request has succeeded.
**201** - Created: The request has been fulfilled and has resulted in one or more new resources being created.
**204** - No Content: The server successfully processed the request and is not returning any content.
**301** - Moved Permanently: The requested resource has been permanently moved to a new location.
**302** - Found (Previously "Moved Temporarily"): The requested resource resides temporarily under a different URI.
**400** - Bad Request: The server cannot process the request due to a client error, such as malformed syntax.
**401** - Unauthorized: The request requires user authentication.
**403** - Forbidden: The server understood the request, but refuses to authorize it.
**404** - Not Found: The requested resource could not be found on the server.
**405** - Method Not Allowed: The method specified in the request is not allowed for the resource identified by the URI.
**500** - Internal Server Error: A generic error message indicating that the server encountered an unexpected condition.
**503** - Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.

### <kbd>process</kbd> Module


In Node.js, a process refers to an instance of a running computer program or application. Node.js allows you to manage processes through its built-in process module, which provides various functionalities for interacting with the current Node.js process.

Some common functionalities provided by the process module include:

**Accessing Command Line Arguments:** You can access command-line arguments passed to the Node.js process using process.argv.

**Environment Variables:** You can access environment variables of the process using process.env. Environment variables are useful for configuration, storing sensitive information, or controlling the behavior of the application.

**Exiting the Process:** You can exit the Node.js process using process.exit([exitCode]). This function allows you to gracefully terminate the application.

**Handling Uncaught Exceptions:** Node.js provides a way to handle uncaught exceptions using process.on('uncaughtException', callback). This allows you to log errors or perform cleanup operations before exiting the process.

**Listening for Signals:** You can listen for signals such as SIGINT (Ctrl+C), SIGTERM, etc., using process.on('SIGINT', callback), process.on('SIGTERM', callback), etc. This allows you to perform cleanup operations when the process receives these signals.

**Memory Usage:** You can get information about memory usage of the process using process.memoryUsage().

**CPU Usage:** You can get information about CPU usage of the process using process.cpuUsage().

**Event Loop Information:** You can get information about the event loop using process.nextTick() and process.on('beforeExit', callback).

## Interview Questions

**Is it possible to access other drives which your local host is running on drive C?**
**Ans:** If our local server is running on C Drive, we cannot access other drives.

## CRUD operations with file system

```javascript
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/data.txt`;

// Create a directory
fs.writeFileSync(filePath, "Hello World!");

// Read the file
fs.readFile(filePath, 'utf-8', (err, file) => {
    if(!err) {
        console.log(file);
    } else {
        console.log("Error occurred!");
    }
})

// rename the file
fs.rename(filePath, `${dirPath}/file.txt`, (err) => {
    console.log("File renamed successfully!");
});

// delete the file
fs.unlinkSync(`${dirPath}/file.txt`, (err) => {
    if(err) {
        console.log(err);
    }
    console.log("File deleted successfully!");
})
```