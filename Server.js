// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const { Console } = require("console");

// const PORT = process.env.PORT || 5000;

// const app = express();

// app.get("/", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }
//     data = data
//       .replace(/__TITLE__/g, "Home page")
//       .replace(/__DESCRIPTION__/g, "HOME Page discration. ");
//   });
// });

// app.use(express.static(path.resolve(__dirname, "./build")));

// app.listen(PORT,()=>{
//     console.log(`Server is listining on port ${PORT}`)
// })
