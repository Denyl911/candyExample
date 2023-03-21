(async () => {
  const email = document.getElementById('Email');
  const password = document.getElementById('Pass');
  const loginBtn = document.getElementById('loginBtn');
  const resU = await fetch('https://demoapp.pro/candy/api/usuario/read.php');
  const data = await resU.json();
  const users = data.document.records;
  let notFound = true;

  loginBtn.onclick = () => {
    users.forEach((el) => {
      if (el.correo == email.value && el.password == password.value) {
        notFound = false;
        window.localStorage.setItem('userId', el.id);
        window.location.replace('/vista1.html'); //Redirect to dashboard
      }
    });
    if (notFound) {
      alert('Correo o contrasena incorrectos');
    }
  };
})();
