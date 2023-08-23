import Navbar from "../components/navbar.js";

const main = document.querySelector("main");

const LogButtons = () => {
  return (main.innerHTML = `
    <div class="container-fluid d-flex justify-content-center mt-5">
    <button type="button" onclick="notLogged()" class="btn btn-danger mx-1">Usuario no logueado </button>
    <button type="button" onclick="userLogged()" class="btn btn-primary mx-1">Usuario logueado </button>
    <button type="button" onclick="adminLogged()" class="btn btn-warning mx-1">Usuario logueado como admin </button>
    </div>
    `);
};

const notLogged = () => {
  localStorage.removeItem("user");
  Navbar();
};

const userLogged = () => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: "Username",
      email: "user@gmail.com",
      role: "user",
    })
  );
  Navbar();
};

const adminLogged = () => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: "Username",
      email: "user@gmail.com",
      role: "admin",
    })
  );
  Navbar();
};

window.notLogged = notLogged;
window.userLogged = userLogged;
window.adminLogged = adminLogged;

export default LogButtons;
