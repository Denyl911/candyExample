(async () => {
  const email = document.getElementById('Email');
  const sendBtn = document.getElementById('sendBtn');

  sendBtn.onclick = async () => {
    if (terms.checked) {
      const data = JSON.stringify({
        correo: email,
      });
      //
      // Cambiar la url
      //
      const res = await fetch(
        'https://demoapp.pro/candy/api/password', // Url
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
  };
})();
