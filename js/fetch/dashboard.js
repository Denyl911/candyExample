(async () => {
  const vidas = document.getElementById('vidasTotales');
  const puntos = document.getElementById('puntosTotales');
  const res = await fetch('https://demoapp.pro/candy/api/score/read.php');
  const data = await res.json();
  const scores = data.document.records;

  const user = scores.find(
    (el) => el.user == window.localStorage.getItem('userId')
  );
  if (user) {
    vidas.innerHTML = user.ticket;
    puntos.innerHTML = user.puntos;
  } else {
    // Usuario no encontrado en scores
    vidas.innerHTML = 0;
    puntos.innerHTML = 0;
    //alert('Ocurrion un error con el usuario');
  }
})();
