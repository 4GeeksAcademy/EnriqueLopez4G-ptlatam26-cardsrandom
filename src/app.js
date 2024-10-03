/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

const newCard = () => {
  let cards = [
    "bi-suit-heart-fill",
    "bi-suit-spade-fill",
    "bi-suit-club-fill",
    "bi-suit-diamond-fill"
  ];
  let rand = Math.floor(Math.random() * 4); // este numero random sera la posicion del array de clases
  return cards[rand];
};

const cardRandomGenerator = () => {
  //Primero genera el numero de la carta entre 2 y 10
  document.getElementById("randomNumber").textContent =
    Math.floor(Math.random() * 9) + 2;

  // genera una carta al azar entre 4 posibles
  let newClass = newCard(); //

  //obtiene los elementos que nos interesan trabajar, en este caso los iconos de arriba y de abajo
  let element1 = document.querySelector("#iconLeft i");
  let element2 = document.querySelector("#iconRight i");

  //remover todas las clases del elemento tag 1 ya que llevan espacios y guiones
  element1.classList.remove(...element1.classList);
  if (newClass === "bi-suit-heart-fill") {
    element1.classList.add("bi", "text-danger", newClass);
  } else element1.classList.add("bi", newClass);

  element2.classList.remove(...element2.classList);
  if (newClass === "bi-suit-heart-fill") {
    element2.classList.add("bi", "text-danger", newClass);
  } else element2.classList.add("bi", newClass);
};

window.onload = function() {
  //write your code here¿

  setInterval(cardRandomGenerator, 2000); // 3000 milisegundos = 3 segundos
};
