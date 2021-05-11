// import { copyFile, constants } from "fs";

// //pulse check
const fs = require("fs");
const axios = require("axios");
const { json, response } = require("express");
// const { response } = require("express");
// const { response } = require("express");

// let content;

// fs.readFile("list.txt", (err, data) => {
//   if (err) throw err;
//   content = data.toString();
//   console.log(content);
// });

// fs.writeFile("text.txt", "A new file has been created", (err) => {
//   if (err) throw err;
//   console.log("A new file has been created");
// });

// const getPost = (id) => {
//   axios
//     .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

// // getPost(1);
// // getPost(50);

// const getPostAsync = async (data) => {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${data}`
//     );
//     console.log(response.data);
//   } catch (err) {
//     throw err;
//   }
// };
// // getPostAsync(50);

//Practice
const appendToFile = (data) => {
  fs.appendFile("data.txt", data, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
};

// appendToFile("hi");

const copyFile = (fileName) => {
  fs.copyFile("data.txt", fileName, (err) => {
    if (err) throw err;
    console.log("data.txt was copied to copy_of_data.txt");
  });
};

// copyFile("copy_of_data.txt");

// const newPost = JSON.stringify({
//   title: "JavaScript Basics",
//   body: "This post contains information about javaScript ",
//   // the id of the user who is going to create the post
//   userId: 1,
// });
const createPost = (post) => {
  axios
    .post(`https://jsonplaceholder.typicode.com/posts/`, post)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      throw err;
    });
};
// createPost(newPost);
const newPost = JSON.stringify({
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});
const updatePost = (id, data) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      throw err;
    });
};
// updatePost(1, newPost);

const getUsers = async () => {
  try {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// console.log(getUsers());

const saveUsers = async () => {
  const data = await getUsers();
  // let saveData = data;
  fs.writeFile("users.txt", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log(data);
  });
};
saveUsers();
