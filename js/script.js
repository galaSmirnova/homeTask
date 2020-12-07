let menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu-item"),
    title = document.querySelector(".title"),
    ask = document.getElementById("prompt"),
    column = document.querySelectorAll("div"),
    adv = document.querySelector(".adv");




// menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement("li");    

menu.appendChild(li);
li.classList.add('menu-item');
li.textContent = "Пятый пункт";

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = "Мы продаем только подлинную технику Apple";

adv.parentElement.removeChild(adv);

let answ = prompt("Как вы относитесь к технике apple?");

ask.textContent = answ;

