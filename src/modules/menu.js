import ramen from "../assets/ramen.jpg";
import soba from "../assets/Soba.jpg";
import udon from "../assets/udon.jpg";
import sushi1 from "../assets/sushi1.jpg";
import sushi2 from "../assets/sushi2.jpg";
import sushi3 from "../assets/sushi3.jpg";
import tempura from "../assets/Tempura.jpg";
import gyoza from "../assets/gyoza.jpg";
import natto from "../assets/natto.jpg";

function createMainFood(text, image) {
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("menu_food_main");
  let figure = document.createElement("figure");
  let figCap = document.createElement("figcaption");
  figCap.classList.add("menu_food_img-cap");
  figCap.textContent = text;
  let img = document.createElement("img");
  img.classList.add("menu_food_img");
  img.src = image;

  figure.appendChild(img);
  figure.appendChild(figCap);
  mainDiv.appendChild(figure);
  return mainDiv;
}
function createSubfood(text1, image1, text2, image2) {
  let subDiv = document.createElement("div");
  subDiv.classList.add("menu_food_main_sub");
  let figure = document.createElement("figure");
  let figCap = document.createElement("figcaption");
  figCap.classList.add("menu_food_img-small-cap-small");
  figCap.textContent = text1;
  let img = document.createElement("img");
  img.classList.add("menu_food_img-small");
  img.src = image1;

  let figure2 = document.createElement("figure");
  let figCap2 = document.createElement("figcaption");
  figCap2.classList.add("menu_food_img-small-cap-small");
  figCap2.textContent = text2;
  let img2 = document.createElement("img");
  img2.classList.add("menu_food_img-small");
  img2.src = image2;

  figure.appendChild(img);
  figure.appendChild(figCap);
  subDiv.appendChild(figure);

  figure.appendChild(img2);
  figure.appendChild(figCap2);
  subDiv.appendChild(figure2);
  return subDiv;
}

function createFoodDiv(food) {
  let foodSec = document.createElement("div");
  foodSec.classList.add("foodsec");
  let foodType = food.toLowerCase();
  let foodMenu = document.createElement("div");
  foodMenu.classList.add("menu_food");
  let foodMain;
  let foodSub1;
  let header;
  if (foodType === "noodle") {
    header = createFoodHeader("Noodles");
    foodMain = createMainFood("Ramen", ramen);
    foodSub1 = createSubfood("Udon", udon, "Soba", soba);
  } else if (foodType === "sushi") {
    header = createFoodHeader("Sushi");
    foodMain = createMainFood("Sushi", sushi1);
    foodSub1 = createSubfood("Sushi", sushi2, "Sushi", sushi3);
  } else {
    header = createFoodHeader("Other Foods");
    foodMain = createMainFood("Tempura", tempura);
    foodSub1 = createSubfood("Gyoza", gyoza, "Natto", natto);
  }

  foodMenu.appendChild(foodMain);
  foodMenu.appendChild(foodSub1);
  foodSec.appendChild(header);
  foodSec.appendChild(foodMenu);
  return foodSec;
}

function createFoodHeader(text) {
  let h2 = document.createElement("h2");
  h2.classList.add("menu_food_header");
  h2.textContent = text;
  return h2;
}

function createMenu() {
  let menu = document.createElement("div");
  menu.classList.add("menu");

  let noodles = createFoodDiv("noodle");

  let sushi = createFoodDiv("sushi");

  let other = createFoodDiv("other");

  menu.appendChild(noodles);
  menu.appendChild(sushi);
  menu.appendChild(other);

  return menu;
}
export default createMenu;
