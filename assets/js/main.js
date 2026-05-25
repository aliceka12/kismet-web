const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('show');
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const requestBtn = document.getElementById('requestPaymentLink');
if (requestBtn) {
  requestBtn.addEventListener('click', () => {
    const name = document.getElementById('payerName')?.value.trim() || 'Cliente';
    const amount = document.getElementById('payAmount')?.value.trim() || 'monto por confirmar';
    const concept = document.getElementById('payConcept')?.value.trim() || 'servicio contratado';
    const message = `Hola, deseo solicitar una liga de pago para ${concept}. Nombre: ${name}. Monto: ${amount} MXN.`;
    window.open(`https://wa.me/522292055659?text=${encodeURIComponent(message)}`, '_blank');
  });
}
