import latern from "../assets/paper-lantern.svg";
import createHomePage from "./home";
import createMenu from "./menu";
import createContactPage from "./contact";

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

function createFooter() {
  let footer = document.createElement("footer");
  footer.classList.add("footer");

  let restaurantName = document.createElement("p");
  restaurantName.classList.add("footer_para");
  restaurantName.textContent = `A-Chan's Shokudou`;

  let img = document.createElement("img");
  img.src = latern;
  img.classList.add("footer_logo");

  let restaurantAdress = document.createElement("p");
  restaurantAdress.classList.add("footer_adress");
  restaurantAdress.textContent = `Tokyo, Japan`;

  let restaurantNumber = document.createElement("p");
  restaurantNumber.classList.add("footer_number");
  restaurantNumber.textContent = `5xx-xxx-xxx`;

  footer.appendChild(restaurantName);
  footer.appendChild(img);
  footer.appendChild(restaurantAdress);
  footer.appendChild(restaurantNumber);
  return footer;
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
  let menuPage = createMenu();
  let contactPage = createContactPage();
  container.appendChild(nav);
  container.appendChild(homePage);
  let footer = createFooter();
  let btn = document.querySelectorAll(".btn");
  let button = document.querySelectorAll(".button");

  btn[0].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(homePage);
    document.body.style.backgroundColor = "rgb(150, 111, 51)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  btn[1].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(menuPage);
    document.body.style.backgroundColor = "rgb(150, 111, 51)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  btn[2].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(contactPage);
    document.body.style.backgroundColor = "rgb(94, 40, 40)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  button[0].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(menuPage);
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  button[1].addEventListener("click", () => {
    container.removeChild(container.lastChild);
    container.removeChild(container.lastChild);
    container.appendChild(contactPage);
    document.body.style.backgroundColor = "rgb(94, 40, 40)";
    container.appendChild(footer);
    return (document.body.scrollTop = document.documentElement.scrollTop = 0);
  });
  container.appendChild(footer);
}

export default executePage;
