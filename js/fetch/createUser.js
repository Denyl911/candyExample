const createBtn = document.getElementById('createBtn');
createBtn.onclick = async () => {
  createBtn.disable = true;
  const name = document.getElementById('Name').value;
  const email = document.getElementById('Email').value;
  const password = document.getElementById('Pass').value;
  const terms = document.getElementById('flexSwitchCheckDefault');
  if (terms.checked) {
    const data = JSON.stringify({
      nombre: name,
      paterno: name,
      materno: name,
      correo: email,
      password: password,
      hash: md5('Valido'),
    });
    const res = await fetch(
      'https://demoapp.pro/candy/api/usuario/create.php',
      {
        method: 'POST',
        body: data,
      }
    );
    const status = await res.json();
    if (status.status == 'success') {
      // Redirect to login
      window.location.replace('/vista3.html');
    }
  } else {
    alert('Acepta los terminos y condiciones para continuar');
  }
  createBtn.disable = false;
};
