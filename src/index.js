import "./styles.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "home":
        home();
        break;
      case "menu":
        menu();
        break;
      case "contact":
        contact();
        break;
      default:
        home();
    }
  });
});

home();
