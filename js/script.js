var counter = 0;
var i = 0;
var Resultados = document.getElementById("Resultados");
var X = 0;
const BotonRes1 = document.getElementById("Respuesta1");
const BotonRes2 = document.getElementById("Respuesta2");
const BotonRes3 = document.getElementById("Respuesta3");
const BotonRes4 = document.getElementById("Respuesta4");
const BotonRes5 = document.getElementById("Respuesta5");
const BotonRes6 = document.getElementById("Respuesta6");
const BotonRes7 = document.getElementById("Respuesta7");
const BotonRes8 = document.getElementById("Respuesta8");
// Obtener referencia a botones
// Recuerda: el punto . indica clases
const botones = document.querySelectorAll(".btn");
// Definir función y evitar definirla de manera anónima
const cuandoSeHaceClick = function (evento) {
  // Recuerda, this es el elemento

  var num = parseInt(this.value);
  switch (i) {
    case 0:
      if (num != 0) {
        BotonRes1.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes1.className += " btn-true";
        BotonRes1.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes1.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes1.className += " btn-false";
        BotonRes1.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;
    case 1:
      if (num != 0) {
        BotonRes2.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes2.className += " btn-true";
        BotonRes2.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes2.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes2.className += " btn-false";
        BotonRes2.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;
    case 2:
      if (num != 0) {
        BotonRes3.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes3.className += " btn-true";
        BotonRes3.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes3.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes3.className += " btn-false";
        BotonRes3.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;
    case 3:
      if (num != 0) {
        BotonRes4.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes4.className += " btn-true";
        BotonRes4.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes4.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes4.className += " btn-false";
        BotonRes4.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;
    case 4:
      if (num != 0) {
        BotonRes5.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes5.className += " btn-true";
        BotonRes5.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes5.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes5.className += " btn-false";
        BotonRes5.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;
    case 5:
      if (num != 0) {
        BotonRes6.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes6.className += " btn-true";
        BotonRes6.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes6.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes6.className += " btn-false";
        BotonRes6.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;
    case 6:
      if (num != 0) {
        BotonRes7.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes7.className += " btn-true";
        BotonRes7.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes7.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes7.className += " btn-false";
        BotonRes7.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;
    case 7:
      if (num != 0) {
        BotonRes8.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes8.className += " btn-true";
        BotonRes8.innerHTML = "Respuesta<br>Correcta";
      } else {
        BotonRes8.setAttribute(
          "style",
          "position: sticky !important; z-index: 1000 !important;"
        );
        BotonRes8.className += " btn-false";
        BotonRes8.innerHTML = "Respuesta<br>Incorrecta";
      }
      break;

    default:
      break;
  }
  i++;
  counter = counter + num;
  console.log(counter);
};
// botones es un arreglo así que lo recorremos
botones.forEach((boton) => {
  //Agregar listener
  boton.addEventListener("click", cuandoSeHaceClick);
});

/*-------------  Question 1   -------------*/
var QestBtnTrue1 = document.getElementById("True-Q-1");
var QestBtnFalse1 = document.getElementById("False-Q-1");
QestBtnTrue1.onclick = function () {
  QestBtnTrue1.style.display = "none";
  QestBtnFalse1.style.display = "none";
  setTimeout(function () {
    var Question1 = document.getElementById("Question-1");
    Question1.style.display = "none";
    var Question2 = document.getElementById("Question-2");
    Question2.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
QestBtnFalse1.onclick = function () {
  QestBtnTrue1.style.display = "none";
  QestBtnFalse1.style.display = "none";
  setTimeout(function () {
    var Question1 = document.getElementById("Question-1");
    Question1.style.display = "none";
    var Question2 = document.getElementById("Question-2");
    Question2.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
/*-------------  Question 2   -------------*/
var QestBtnTrue2 = document.getElementById("True-Q-2");
var QestBtnFalse2 = document.getElementById("False-Q-2");
QestBtnTrue2.onclick = function () {
  QestBtnTrue2.style.display = "none";
  QestBtnFalse2.style.display = "none";
  setTimeout(function () {
    var Question2 = document.getElementById("Question-2");
    Question2.style.display = "none";
    var Question3 = document.getElementById("Question-3");
    Question3.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
QestBtnFalse2.onclick = function () {
  QestBtnTrue2.style.display = "none";
  QestBtnFalse2.style.display = "none";
  setTimeout(function () {
    var Question2 = document.getElementById("Question-2");
    Question2.style.display = "none";
    var Question3 = document.getElementById("Question-3");
    Question3.setAttribute(
      "style",
      "position: sticky !important; z-index: 2000 !important;"
    );
  }, 1000);
};
/*-------------  Question 3   -------------*/
var QestBtnTrue3 = document.getElementById("True-Q-3");
var QestBtnFalse3 = document.getElementById("False-Q-3");
QestBtnTrue3.onclick = function () {
  QestBtnTrue3.style.display = "none";
  QestBtnFalse3.style.display = "none";
  setTimeout(function () {
    var Question3 = document.getElementById("Question-3");
    Question3.style.display = "none";
    var Question4 = document.getElementById("Question-4");
    Question4.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
QestBtnFalse3.onclick = function () {
  QestBtnTrue3.style.display = "none";
  QestBtnFalse3.style.display = "none";
  setTimeout(function () {
    var Question3 = document.getElementById("Question-3");
    Question3.style.display = "none";
    var Question4 = document.getElementById("Question-4");
    Question4.setAttribute(
      "style",
      "position: sticky !important; z-index: 2000 !important;"
    );
  }, 1000);
};
/*-------------  Question 4   -------------*/
var QestBtnTrue4 = document.getElementById("True-Q-4");
var QestBtnFalse4 = document.getElementById("False-Q-4");
QestBtnTrue4.onclick = function () {
  QestBtnTrue4.style.display = "none";
  QestBtnFalse4.style.display = "none";
  setTimeout(function () {
    var Question4 = document.getElementById("Question-4");
    Question4.style.display = "none";
    var Question5 = document.getElementById("Question-5");
    Question5.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
QestBtnFalse4.onclick = function () {
  QestBtnTrue4.style.display = "none";
  QestBtnFalse4.style.display = "none";
  setTimeout(function () {
    var Question4 = document.getElementById("Question-4");
    Question4.style.display = "none";
    var Question5 = document.getElementById("Question-5");
    Question5.setAttribute(
      "style",
      "position: sticky !important; z-index: 2000 !important;"
    );
  }, 1000);
};
/*-------------  Question 5   -------------*/
var QestBtnTrue5 = document.getElementById("True-Q-5");
var QestBtnFalse5 = document.getElementById("False-Q-5");
QestBtnTrue5.onclick = function () {
  QestBtnTrue5.style.display = "none";
  QestBtnFalse5.style.display = "none";
  setTimeout(function () {
    var Question5 = document.getElementById("Question-5");
    Question5.style.display = "none";
    var Question6 = document.getElementById("Question-6");
    Question6.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
QestBtnFalse5.onclick = function () {
  QestBtnTrue5.style.display = "none";
  QestBtnFalse5.style.display = "none";
  setTimeout(function () {
    var Question5 = document.getElementById("Question-5");
    Question5.style.display = "none";
    var Question6 = document.getElementById("Question-6");
    Question6.setAttribute(
      "style",
      "position: sticky !important; z-index: 2000 !important;"
    );
  }, 1000);
};
/*-------------  Question 6   -------------*/
var QestBtnTrue6 = document.getElementById("True-Q-6");
var QestBtnFalse6 = document.getElementById("False-Q-6");
QestBtnTrue6.onclick = function () {
  QestBtnTrue6.style.display = "none";
  QestBtnFalse6.style.display = "none";
  setTimeout(function () {
    var Question6 = document.getElementById("Question-6");
    Question6.style.display = "none";
    var Question7 = document.getElementById("Question-7");
    Question7.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
QestBtnFalse6.onclick = function () {
  QestBtnTrue6.style.display = "none";
  QestBtnFalse6.style.display = "none";
  setTimeout(function () {
    var Question6 = document.getElementById("Question-6");
    Question6.style.display = "none";
    var Question7 = document.getElementById("Question-7");
    Question7.setAttribute(
      "style",
      "position: sticky !important; z-index: 2000 !important;"
    );
  }, 1000);
};
/*-------------  Question 7   -------------*/
var QestBtnTrue7 = document.getElementById("True-Q-7");
var QestBtnFalse7 = document.getElementById("False-Q-7");
QestBtnTrue7.onclick = function () {
  QestBtnTrue7.style.display = "none";
  QestBtnFalse7.style.display = "none";
  setTimeout(function () {
    var Question7 = document.getElementById("Question-7");
    Question7.style.display = "none";
    var Question8 = document.getElementById("Question-8");
    Question8.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);
};
QestBtnFalse7.onclick = function () {
  QestBtnTrue7.style.display = "none";
  QestBtnFalse7.style.display = "none";
  setTimeout(function () {
    var Question7 = document.getElementById("Question-7");
    Question7.style.display = "none";
    var Question8 = document.getElementById("Question-8");
    Question8.setAttribute(
      "style",
      "position: sticky !important; z-index: 2000 !important;"
    );
  }, 1000);
};
/*-------------  Question 8  -------------*/
var QestBtnTrue8 = document.getElementById("True-Q-8");
var QestBtnFalse8 = document.getElementById("False-Q-8");
QestBtnTrue8.onclick = function () {
  QestBtnTrue8.style.display = "none";
  QestBtnFalse8.style.display = "none";
  setTimeout(function () {
    var Question8 = document.getElementById("Question-8");
    Question8.style.display = "none";
    var Mensaje = document.getElementById("Mensaje");
    Mensaje.setAttribute(
      "style",
      "position: sticky !important; z-index: 1000 !important;"
    );
  }, 1000);

  X = (100 * counter) / 8;
  Resultados.innerHTML = `Tu puntuación es: ${X}%`;
};
QestBtnFalse8.onclick = function () {
  QestBtnTrue8.style.display = "none";
  QestBtnFalse8.style.display = "none";
  setTimeout(function () {
    var Question8 = document.getElementById("Question-8");
    Question8.style.display = "none";
    var Mensaje = document.getElementById("Mensaje");
    Mensaje.setAttribute(
      "style",
      "position: sticky !important; z-index: 2000 !important;"
    );
  }, 1000);

  X = (100 * counter) / 8;
  Resultados.innerHTML = `Tu puntuación es: ${X}%`;
};

var Finalizar = document.getElementById("Finalizar");
Finalizar.onclick = function () {
  console.log(X);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer {{token}}");

  var raw = JSON.stringify({
    percentage: X,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://ayudateon.com/api//registers/create.php", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  console.log(X);
  setTimeout(function () {
    location.reload();
  }, 2000);
};
