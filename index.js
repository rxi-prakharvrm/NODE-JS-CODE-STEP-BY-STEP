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