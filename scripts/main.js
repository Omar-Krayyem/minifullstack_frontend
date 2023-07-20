// document.addEventListener("DOMContentLoaded", getPosts);
document.getElementById("signup_btn").addEventListener("click", createPost);
// https://jsonplaceholder.typicode.com/posts

// CRUD 
// C - CREATE (POST)
// R - READ (GET)
// U - UPDATE (PUT)
// D - DELETE (DELETE)

let logged_name;



// Get Posts
// function getPosts() {
//   fetch("http://localhost/minifullstack_backend/signin.php")
//     .then((response) => response.json())
//     .then((posts) => {
//       postsArray = posts;
//       displayPosts()
//     })
//     .catch((error) => console.log(error))
// }

// function displayPosts() {
//   const postsList = document.getElementById("posts");
//   postsList.innerHTML = "";
//   postsArray.forEach((post) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//       <h2>${post.title}</h2>
//       <p>${post.body}</p>
//       <button>Edit</button>
//       <button onclick="deletePost(${post.id})">Delete</button>
//     `;
//     postsList.appendChild(listItem)
//   })

// }

// Create Post
function createPost(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
  
    const newPost = {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name
    };
  
    fetch("http://localhost/minifullstack_backend/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then(response => {
        if (!response.ok) {
          // Handle non-OK responses (e.g., server errors)
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(responseData => {
        // Assuming your backend returns some data to indicate success or failure.
        // You can handle it accordingly.
        if (responseData.success) {
          // Redirect to the dashboard page after successful sign-up.
          redirectToDashboard();
        } else {
          // Handle sign-up failure if needed.
          console.log("Sign-up failed.");
        }
      })
      .catch(error => {
        // Handle other errors, including network errors and parsing errors.
        console.log("Error:", error);
      });
  }
  
  function redirectToDashboard() {
    // Replace 'dashboard.html' with the actual filename or path of your dashboard page.
    window.location.href = "dashboard.html";
  } 