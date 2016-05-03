function sum(){
  var x = document.getElementById('num').value;
  var y = document.getElementById('rank').value;
  console.log(x);
  if ( isNaN(x) || x == "" || x == NaN || x > 100){
    alert('请输入有效的成绩');
    return false;
  }else if (x == 100) {
    x = x - 1;
  }
  var n = 10 - (Math.floor(x / 10));
  y = n;
  console.log(y);
  document.getElementById('rank').value = y;
  return false;
}


/* 以下注释的为两个其他方法 */

// if 方法
// var x = 89;
// var con;
// if (x <= 100 && x > 90) {
//   con = 1;
// } else if (x <= 90 && x > 80) {
//   con = 2;
// } else if (x <= 80 && x > 70) {
//   con = 3;
// } else if (x <= 70 && x > 60) {
//   con = 4;
// } else if (x <= 60 && x > 50) {
//   con = 5;
// } else if (x <= 50 && x > 40) {
//   con = 6;
// } else if (x <= 40 && x > 30) {
//   con = 7;
// } else if (x <= 30 && x > 20) {
//   con = 8;
// } else if (x <= 10 && x > 10) {
//   con = 9;
// } else {
//   con = 10;
// }

// // switch 方法
// var y = 51;
// var co;
// switch (true) {
//   case y <= 100 && y > 90:
//     co = 1;
//     break;
//   case y <= 90 && y > 80:
//     co = 2;
//     break;
//   case y <= 80 && y > 70:
//     co = 3;
//     break;
//   case y <= 70 && y > 60:
//     co = 4;
//     break;
//   case y <= 60 && y > 50:
//     co = 5;
//     break;
//   case y <= 50 && y > 40:
//     co = 6;
//     break;
//   case y <= 40 && y > 30:
//     co = 7;
//     break;
//   case y <= 30 && y > 20:
//     co = 8;
//     break;
//   case y <= 20 && y > 10:
//     co = 9;
//     break;
//   default:
//     co = 10;
// }