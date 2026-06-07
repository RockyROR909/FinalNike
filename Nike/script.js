console.log("Внешний файл подключен");

console.group("Группа логов");
console.log("Первый лог");
console.log("Второй лог");
console.log("Третий лог");
console.groupEnd();


console.error("Это сообщение об ошибке");
console.warn("Это предупреждение");
console.table({name : "Nike", type: "Sportswear", founded: 1964});

const styles = ["color: red", "font-size: 20px", "background-color: yellow"];
console.log("%cStart coding, now!", styles);