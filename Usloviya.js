let num = 21;
/*if (num < 49) {
  console.log('Не верно!')
} else if (num > 100) {
    console.log("Много!")
} else {
  console.log('Верно!')
};*/


switch (num) {
  case num < 49:
    console.log('Не верно');
    break;
  case num > 100:
    console.log("Много!");
    break;
  case num > 80:
    console.log("Все еще много!");
    break;
  case 50:
    console.log('Верно!');
    break;
  default:
    console.log('Что-то пошло не так!');
    break; 
}