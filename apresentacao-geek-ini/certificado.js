document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('certModal');
  const iframe = document.getElementById('certFrame');
  const downloadBtn = document.getElementById('certDownload');
  const closeBtn = document.getElementById('certClose');
  const links = document.querySelectorAll('.btn-certificado');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      iframe.src = href;
      downloadBtn.href = href;
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    iframe.src = '';
    document.body.style.overflow = '';
  });
});
