import ContactLantern from "../assets/contact-lantern.jpg";
import latern from "../assets/paper-lantern.svg";
function createFormDiv() {
  let formDiv = document.createElement("div");
  formDiv.classList.add("contact_info_form");

  let formFlex = document.createElement("div");
  formFlex.classList.add("contact_info_form_text-flex");

  let icon1 = document.createElement("i");
  icon1.className = "far fa-comment contact_info_form_icon";

  let messageText = document.createElement("p");
  messageText.classList.add("contact_info_form_text");
  messageText.textContent = "Message Us!";

  formFlex.appendChild(icon1);
  formFlex.appendChild(messageText);

  let form = createFrom();

  formDiv.appendChild(formFlex);
  formDiv.appendChild(form);

  return formDiv;
}

function createFrom() {
  let form = document.createElement("form");

  let textInput = document.createElement("input");
  textInput.classList.add("contact_info_form_input");
  textInput.type = "text";
  textInput.placeholder = "Name";

  let numberInput = document.createElement("input");
  numberInput.classList.add("contact_info_form_input");
  numberInput.type = "tel";
  numberInput.placeholder = "Number";

  let emailInput = document.createElement("input");
  emailInput.classList.add("contact_info_form_input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";

  let message = document.createElement("textarea");
  message.classList.add("contact_info_form_input");
  message.classList.add("contact_info_form_input-message");
  message.placeholder = "Message";

  let btn = document.createElement("a");
  btn.classList.add("btn");
  btn.classList.add("contact_info_form_input_btn");
  btn.textContent = "Send Message";

  form.appendChild(textInput);
  form.appendChild(numberInput);
  form.appendChild(emailInput);
  form.appendChild(message);
  form.appendChild(btn);

  return form;
}

function createPhoneNum(text) {
  let phoneNum = document.createElement("div");
  phoneNum.classList.add("contact_info_phone");
  let i1 = document.createElement("i");
  i1.className = "fas fa-phone-alt contact_info_phone_icon";

  let number = document.createElement("p");
  number.classList.add("contact_info_phone_number");
  number.textContent = text;

  phoneNum.appendChild(i1);
  phoneNum.appendChild(number);
  return phoneNum;
}

function createAdress(location, city) {
  let adress = document.createElement("div");
  adress.classList.add("contact_info_adress");
  let i2 = document.createElement("i");
  i2.className = "fas fa-map-marker-alt contact_info_adress_icon";

  let adressPara = document.createElement("p");
  adressPara.classList.add("contact_info_adress_text");
  adressPara.textContent = location;

  let cityLoc = document.createElement("span");
  cityLoc.classList.add("contact_info_adress_text-location");
  cityLoc.textContent = city;

  adressPara.appendChild(cityLoc);

  adress.appendChild(i2);
  adress.appendChild(adressPara);
  return adress;
}

function createContactSec() {
  let contactSection = document.createElement("div");
  contactSection.classList.add("contact_Sec");

  let h2 = document.createElement("h2");
  h2.classList.add("contact_info_header");
  h2.textContent = "Contact Us!";

  let phoneNumber = createPhoneNum("5XX-XXX-XXX");
  let adress = createAdress(`Lorem, ipsum dolor sit amet .`, `Tokyo, Japan`);

  contactSection.appendChild(h2);
  contactSection.appendChild(phoneNumber);
  contactSection.appendChild(adress);

  return contactSection;
}

function createContactInfo() {
  let contactInfo = document.createElement("div");
  contactInfo.classList.add("contact_info");

  let contactSection = createContactSec();
  let form = createFormDiv();

  contactInfo.appendChild(contactSection);
  contactInfo.appendChild(form);

  let logo = document.createElement("img");
  logo.src = latern;
  logo.classList.add("logo");

  return contactInfo;
}

function createContactImg(image) {
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("image_cont");
  let img = document.createElement("img");
  img.classList.add("contact_image");
  img.src = image;
  imgDiv.appendChild(img);
  return imgDiv;
}

function createContactPage() {
  let ContactPage = document.createElement("div");
  ContactPage.classList.add("ContactPage");

  let contact = document.createElement("div");
  contact.classList.add("contact");
  let img = createContactImg(ContactLantern);
  let contactInfo = createContactInfo();
  contact.appendChild(img);
  contact.appendChild(contactInfo);

  ContactPage.appendChild(contact);
  return ContactPage;
}

export default createContactPage;
