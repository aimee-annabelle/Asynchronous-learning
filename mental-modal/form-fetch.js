/**
 * You have a user registration form on your website, and you need to send the form data to an API endpoint to register a new user.
 * The API endpoint is https://jsonplaceholder.typicode.com/posts, and it expects the following data in JSON format:
 *   username: The username of the new user.
 *   email: The email address of the new user.
 *   password: The password for the new user.
 *
 */
const userForm = document.getElementById("user-register");
const displatUsers = document.getElementById("users");
userForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  postUser({ username, email, password }).then((data) => console.log(data));
});
const postUser = async (data) => {
  try {
    const url = "https://reqres.in/api/register";
    // const url = "./users.json";
    const request = new XMLHttpRequest();

    request.responseType = "json";

    request.open("POST", url);
    if (data) {
      request.setRequestHeader("Content-type", "application/json");
    }
    request.onload = () => {
      console.log(request.response);
      return request.response;
    };
    request.onerror = () => {
      throw new Error("Unable to post data");
    };

    request.send(JSON.stringify(data));
  } catch (error) {
    alert(error);
  }
};
