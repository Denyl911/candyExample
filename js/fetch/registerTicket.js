const createBtn = document.getElementById('createBtn');
createBtn.onclick = async () => {
  createBtn.disable = true;

  const tienda = document.getElementById('Tienda').value;
  const donde = document.getElementById('Donde').value;
  const monto = document.getElementById('Monto').value;
  const metodo = document.getElementById('Metodo').value;
  const codigo1 = document.getElementById('Codigo1').value;
  const codigo2 = document.getElementById('Codigo2').value;

  if (tienda && monto && metodo && codigo1 && codigo2) {
    if (codigo1 == codigo2) {
    } else {
      alert('Los codigos de facturacion no coinciden');
    }
    const data = JSON.stringify({
      usuario: window.localStorage.getItem('userId'),
      tienda: tienda,
      codigo: codigo1,
      lugar: donde,
      metodo: metodo,
      monto: monto,
    });
    const res = await fetch('https://demoapp.pro/candy/api/ticket/create.php', {
      method: 'POST',
      body: data,
    });
    const status = await res.json();
    if (status.status == 'success') {
      // Redirect to dashboard
      window.location.replace('/vista1.html');
    }
  } else {
    alert('Completa todos los campos obligatorios para continuar');
  }
  createBtn.disable = false;
};
