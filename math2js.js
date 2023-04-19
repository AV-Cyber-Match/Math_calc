function solve() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  if (isNaN(a) || isNaN(b) ||isNaN(c)) {
alert("Введені значення повинні бути числами.");
return;
}

var discriminant = b * b - 4 * a * c;

if (discriminant < 0) {
alert("Рівняння не має розв'язків.");
} else if (discriminant === 0) {
var x = -b / (2 * a);
alert("Рівняння має один розв'язок: x = " + x);
} else {
var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
alert("Рівняння має два розв'язки: x1 = " + x1 + ", x2 = " + x2);
}
}