export function accordion() {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        },
    });
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Пример подключения: import { accordion } from "./путь/к/файлу/accordion.js";

// Активация: accordion();