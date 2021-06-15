import menuPic from "../assets/home-menu.jpg";
import contactPic from "../assets/home-contact.jpg";
import latern from "../assets/paper-lantern.svg";

function createMainSec() {
  let main = document.createElement("div");
  main.classList.add("main");
  let header = createHeader(`A-Chan's`, `Shokudou`);
  main.appendChild(header);
  return main;
}

function createHeader(text1, text2) {
  let h1 = document.createElement("h1");
  h1.classList.add("main_header");
  let span1 = document.createElement("span");
  span1.classList.add("main_header-name");
  span1.textContent = text1;
  let span2 = document.createElement("span");
  span2.classList.add("main_header-shop");
  span2.textContent = text2;
  h1.appendChild(span1);
  h1.appendChild(span2);
  return h1;
}

function createSection(h2text, text, img) {
  let homepageContent = document.createElement("div");
  homepageContent.classList.add("home-page");
  let homepageInfo = document.createElement("div");
  homepageInfo.classList.add("home-page_info");
  let homepageInfoText = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.textContent = h2text;
  let para = document.createElement("p");
  para.textContent = text;
  let btn = createButton("Go There!");
  let image = document.createElement("img");
  image.src = img;
  image.classList.add("home-page_info_image");

  if (h2text.toLowerCase() === "contact") {
    homepageInfo.classList.add("home-page_info-2");
    homepageInfoText.classList.add("home-page_info_para-contact");
    image.classList.add("home-page_info_image-contact");
    homepageInfoText.appendChild(h2);
    homepageInfoText.appendChild(para);
    homepageInfoText.appendChild(btn);

    homepageInfo.appendChild(image);
    homepageInfo.appendChild(homepageInfoText);
    homepageContent.appendChild(homepageInfo);
  } else {
    homepageInfoText.classList.add("home-page_info_para-menu");
    image.classList.add("home-page_info_image-menu");
    homepageInfoText.appendChild(h2);
    homepageInfoText.appendChild(para);
    homepageInfoText.appendChild(btn);

    homepageInfo.appendChild(homepageInfoText);
    homepageInfo.appendChild(image);
    homepageContent.appendChild(homepageInfo);
  }

  return homepageContent;
}

function createButton(text) {
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("button_container");

  let btn = document.createElement("a");
  btn.classList.add("button");
  btn.textContent = text;
  btnContainer.appendChild(btn);
  return btnContainer;
}

function createHomePage() {
  let contents = document.createElement("div");
  contents.classList.add("content");
  let mainContent = createMainSec();
  let menuContent = createSection(
    `Menu`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
  quae, officia dolorem incidunt possimus eligendi, exercitationem,
  debitis!`,
    menuPic
  );
  let contactContent = createSection(
    `Contact`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
  quae, officia dolorem incidunt possimus eligendi, exercitationem,
  delectus aliquid in tenetur debitis!`,
    contactPic
  );

  contents.appendChild(mainContent);
  contents.appendChild(menuContent);
  contents.appendChild(contactContent);
  return contents;
}

export default createHomePage;
