// Node click → tech modal
(function () {
  const modal = document.getElementById('techModal');
  if (!modal) return;

  const iconsContainer = document.getElementById('modalTechIcons');
  const modalTitle = document.getElementById('techModalLabel');

  document.querySelectorAll('.node').forEach(node => {
    node.style.cursor = 'pointer';
    node.addEventListener('click', function () {
      const techs = JSON.parse(this.dataset.techs || '[]');
      const title = this.querySelector('span').textContent;
      modalTitle.textContent = title;

      iconsContainer.innerHTML = techs.map(t => {
        const iconHtml = t.icon === 'img'
          ? `<img src="${t.src}" alt="${t.name}" class="tech-img-icon">`
          : `<i class="${t.icon}"></i>`;
        return `<div class="tech-icon-item">
          ${iconHtml}
          <span>${t.name}</span>
        </div>`;
      }).join('');

      $('#techModal').modal('show');
    });
  });
})();

