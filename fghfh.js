let str = document.querySelector('.search').value;

let regexp = /второй/ig;

let result;

while (result = regexp.exec(str)) {
  alert( `Найдено ${result[0]} на позиции ${result.index}` );
} 