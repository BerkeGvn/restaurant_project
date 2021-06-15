import latern from "../assets/paper-lantern.svg";
import createHomePage from "./home";

function createNavbar() {
  let navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  let logo = document.createElement("img");
  logo.src = latern;
  logo.classList.add("navbar_logo");
  let btns = document.createElement("ul");
  btns.classList.add("navbar_links");
  let homeBtn = createBtn("Home");
  let MenuBtn = createBtn("Menu");
  let ContactBtn = createBtn("Contact");
  btns.appendChild(homeBtn);
  btns.appendChild(MenuBtn);
  btns.appendChild(ContactBtn);

  navbar.appendChild(logo);
  navbar.appendChild(btns);

  return navbar;
}

function createBtn(text) {
  let btn = document.createElement("li");
  btn.classList.add("navbar_button");
  let innerbtn = document.createElement("a");
  innerbtn.classList.add("btn");
  innerbtn.innerText = text;
  btn.appendChild(innerbtn);
  return btn;
}

function executePage() {
  let container = document.querySelector(".container");
  let nav = createNavbar();
  let homePage = createHomePage();
  container.appendChild(nav);
  container.appendChild(homePage);
}

export default executePage;
