// Adresa de contact se compune aici, ca sa nu apara intreaga in codul paginii.
document.querySelectorAll('.zp-mail').forEach(function (a) {
  var addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + addr;
  (a.querySelector('.zp-addr') || a).textContent = addr;
});
