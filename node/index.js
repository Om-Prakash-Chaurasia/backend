// // Node : OS Module

// // const os = require("node:os");

// // console.log("A", "B");
// // console.log("A", os.EOL, "B");

// // console.log(os.arch());

// // console.log(os.constants);

// // console.log(os.cpus());
// // console.log(os.cpus().length);

// // console.log(os.devNull);

// // console.log(os.endianness());

// // console.log(os.freemem());

// // console.log(os.getPriority());

// // console.log(os.homedir());

// // console.log(os.hostname());

// // console.log(os.loadavg());

// // console.log(os.machine());

// // console.log(os.networkInterfaces());

// // console.log(os.platform());

// // console.log(os.release());

// // console.log(os.tmpdir());

// // console.log(os.totalmem());

// // console.log(os.type());

// // console.log(os.uptime());

// // console.log(os.userInfo());

// // console.log(os.version());

// // Node : FS Module

// const fs = require("node:fs");

// // CRUD => Create, Read, Update, Delete

// // 1. FileName
// // 2. Content of the file
// // 3. callback fn to handle error.

// // Syntax :- fs.writeFile('fileName', 'fileContent', (error) => {});

// // Creating :-
// // fs.writeFile(
// //   "sample.txt",
// //   "This is a new file created using node fs-module.",
// //   (error) => {
// //     if (error) {
// //       console.log(
// //         "Error while creating a file, please try again later.",
// //         error
// //       );
// //     }
// //   }
// // );

// const fileName = "Demo.txt";
// const msg = "This is a demo file.";
// const msg1 = "\nThis is to demonstrate update file.";

// function createFile() {
//   fs.writeFile(fileName, msg, (error) => {
//     if (error) {
//       console.log("Error creating file, please try again later.", error);
//       return;
//     }
//   });
// }

// // createFile();

// // fs.existsSync

// // Updating :-
// // fs.appendFile(
// //   "sample1.txt",
// //   " Demonstrating update file in node \n",
// //   (error) => {
// //     if (error) {
// //       console.log("Error while updating file, please try again later.", error);
// //     }
// //   }
// // );

// function updateFile() {
//   fs.appendFile(fileName, msg1, (error) => {
//     if (error) {
//       console.log("Error while updating file, please try again later.", error);
//       return;
//     }
//   });
// }

// // updateFile();

// // Reading :-

// // Syntax :- fs.readFile(fileName, (error, data) =>{})

// function readFileData() {
//   fs.readFile(fileName, (error, data) => {
//     if (error) {
//       console.log("Error while reading file, please try again later.", error);
//       return;
//     }

//     console.log(data.toString());
//   });
// }

// // readFileData();

// // Deleting :-

// // Syntax :- fs.unlink(fileName, (error) => {})

// function deleteFile() {
//   fs.unlink(fileName, (error) => {
//     if (error) {
//       console.log("Error while deleting file, please try again later.", error);
//       return;
//     }

//     console.log(fileName, "is deleted successfully");
//   });
// }

// // deleteFile();

// // Creating folder :-
// const folderName = "logs";

// function createFolder() {
//   fs.mkdir(folderName, (error) => {
//     if (error) {
//       console.log("Error while creating folder, please try later.", error);
//       return;
//     }

//     console.log("Folder created successfully", folderName);
//   });
// }

// // createFolder();

// // Check whether folder exists or nor?
// function folderExists() {
//   if (fs.existsSync(folderName)) {
//     return console.log("Folder exists");
//   } else {
//     return console.log("No such folder exists");
//   }
// }

// // folderExists();

// // Node : Events Module

// const events = require("node:events");

// const myEmitter = new events.EventEmitter();

// // Listener
// myEmitter.on("My_Event", () => {
//   console.log("My event listener is working");
// });

// // Speaker
// // setInterval(() => {
// //   myEmitter.emit("My_Event");
// // }, 5000);

// myEmitter.emit("My_Event");

// Example of writing logs with the help of FS and Events module.

// const fs = require("node:fs");
// const events = require("node:events");
// const os = require("node:os");

// const myEmitter = new events.EventEmitter();
// const SIGNAL_CHANGE = "signal_change";

// // Listen to the event (Event Listener)
// myEmitter.on(SIGNAL_CHANGE, (signalColor) => {
//   const msg =
//     new Date().toLocaleString() + ": signal changed to " + signalColor + os.EOL;

//   fs.appendFile("signal.log", msg, (error) => {
//     if (error) {
//       console.log("Error while writing log", error);
//       return;
//     }
//   });
// });

// const signalColor = ["Green", "Yellow", "Red", "Yellow"];

// let counter = 0;
// setInterval(() => {
//   const idx = counter % 4;
//   counter++;

//   myEmitter.emit(SIGNAL_CHANGE, signalColor[idx]);
// }, 5000);

function charCount() {
  const sentence = "Welcome to learning React";
  let bucket = {};

  for (let char of sentence) {
    if (bucket[char]) {
      bucket[char] += 1;
    } else {
      bucket[char] = 1;
    }

    // if (bucket[char] !== bucket) {
    //   bucket[char] = (bucket[char] || 0) + 1;
    // }
  }

  console.log(bucket);
}

// charCount();

// Node : HTTP Module

const http = require("node:http");

// http
//   .createServer(() => {
//     console.log("Server is up and running on port 5178", os.cpus()[0].model);
//   })
//   .listen(5178);

const carsDetails = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2025-11-12"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2022-03-03"),
    capacity: 5,
  },
];

const carsDetailsString = JSON.stringify(carsDetails);

// API ROUTE
const server = (req, res) => {
  // console.log("URL :", req.url);
  // console.log("URL method: ", req.method);
  // console.log("URL body: ", req.body);
  // console.log("URL header: ",req.headers);
  // console.log("URL params", req.params);

  if (req.url === "/carsDetails") {
    if (req.method === "GET") {
      res.write("Cars details will appear here.");
      res.end(carsDetailsString);
    } else if (req.method === "POST") {
      res.write("You can insert car details form here.");
    } else if (req.method === "PUT") {
      res.write("You can edit car details form here.");
    } else if (req.method === "PATCH") {
      res.write("You can edit car details form here.");
    } else if (req.method === "DELETE") {
      res.write("You can delete car details form here.");
    } else {
      res.write(`Error 404, requested route ${req.url} not found.`);
    }
  } else if (req.url === "/posts") {
    if (req.method === "GET") {
      res.write("You posts will appear here");
      res.end();
    } else if (req.method === "POST") {
      res.write("You can insert posts form here.");
    } else if (req.method === "PUT") {
      res.write("You can edit posts form here.");
    } else if (req.method === "PATCH") {
      res.write("You can edit posts form here.");
    } else if (req.method === "DELETE") {
      res.write("You can delete posts form here.");
    } else {
      res.write(`Error 404, requested route ${req.url} not found.`);
    }
  }
};

const port = 3000;
const onServerUp = () => {
  console.log(`Server is up and running on port ${port}`);
};

http.createServer(server).listen(port, onServerUp);

// nodemon :- library of node.js

// APIs :- Application Programming Interface, it is a middle man to which can communicate between client and server.
// It also used to communicate between two different entities. (eg:- client (JS) and server (Java));

// Types :-
// 1. SOAP (Simple Object Access Protocol):- Older ways to create apis (not in use anymore). The data os sent in the form of Envelop and it uses Extensible Markup Language.

// 2. REST (ReprEsentational State Transfer):- Currently in use. In this we send raw data in the very simple format i.e. in JSON format.

// Both REST and SOAP APIs uses (HTTP: Hyper Text Transfer Protocol) and (HTTPs:) here 's stands for secure.

// 3. GraphQL :- New and currently in use.

// TOON :- This is the new format of sending data. It is used for AI.
