function solveEquation() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);
  var d = parseFloat(document.getElementById("d").value);

  var result = document.getElementById("result");

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    result.innerHTML = "Будь ласка, введіть числові значення для коефіцієнтів";
    return;
  }

  if (a === 0) {
    result.innerHTML = "Це не кубічне рівняння";
    return;
  }

  var discriminant, alpha, beta, gamma, Q, R, S, T, U, x1, x2, x3;

  alpha = -b / (3 * a);
  beta = alpha * alpha - (b * c) / (3 * a) + d / a;
  gamma = (c / a - alpha * b / a + 2 * alpha * alpha * alpha) / 3;
  Q = beta * beta + gamma * gamma * gamma;
  R = Math.sqrt(Q);
  S = Math.cbrt(R - gamma);
  T = Math.cbrt(R + gamma);
  U = alpha + S + T;

  if (Q > 0) {
    x1 = U - (b / (3 * a));
    x2 = (-0.5 * (S + T)) - (b / (3 * a));
    x3 = (0.5 * Math.sqrt(3) * (S - T));
    result.innerHTML =
      "x<sub>1</sub> = " +
      x1.toFixed(2) +
      "<br>x<sub>2</sub> = " +
      x2.toFixed(2) +
      " + " +
      x3.toFixed(2) +
      "i<br>x<sub>3</sub> = " +
      x2.toFixed(2) +
      " - " +
      x3.toFixed(2) +
      "i";
  } else if (Q === 0) {
    x1 = U - (b / (3 * a));
    x2 = (-0.5 * (S + T)) - (b / (3 * a));
    result.innerHTML =
      "x<sub>1</sub> = " +
      x1.toFixed(2) +
      "<br>x<sub>2</sub> = " +
      x2.toFixed(2) +
      "<br>x<sub>3</sub> = " +
      x2.toFixed(2);
  } else {
    var R2 = -R;
    S2 = Math.cbrt(R2 - gamma);
    T2 = Math.cbrt(R2 + gamma);
    U2 = alpha + S2 + T2;
    x1 = U2 - (b / (3 * a));
	x2r = (-0.5 * (S2 + T2)) - (b / (3 * a));
x2i = (0.5 * Math.sqrt(3) * (S2 - T2));
x3r = (-0.5 * (S2 + T2)) - (b / (3 * a));
x3i = (-0.5 * Math.sqrt(3) * (S2 - T2));
result.innerHTML =
  "x<sub>1</sub> = " +
  x1.toFixed(2) +
  "<br>x<sub>2</sub> = " +
  x2r.toFixed(2) +
  " + " +
  x2i.toFixed(2) +
  "i<br>x<sub>3</sub> = " +
  x3r.toFixed(2) +
  " - " +
  x3i.toFixed(2) +
  "i";
  }
}