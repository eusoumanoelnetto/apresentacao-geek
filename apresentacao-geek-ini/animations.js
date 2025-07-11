// Funções de criação de elementos animados
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3;
    const duration = Math.random() * 3 + 1;
    
    star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --duration: ${duration}s;
        box-shadow: 0 0 10px white;
    `;
    
    document.getElementById('background').appendChild(star);
}

function createFirework() {
    const particles = 30;
    for(let i = 0; i < particles; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        const angle = (Math.PI * 2 * i) / particles;
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        
        firework.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: hsl(${Math.random() * 360}, 100%, 50%);
            --explosion-duration: ${Math.random() * 1 + 0.5}s;
        `;
        
        document.getElementById('background').appendChild(firework);
        
        setTimeout(() => firework.remove(), 1000);
    }
}

function createPlanet() {
    const planet = document.createElement('div');
    planet.className = 'planet';
    
    const size = Math.random() * 80 + 50;
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    
    planet.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 90}%;
        top: ${Math.random() * 90}%;
        background: linear-gradient(
            45deg,
            ${colors[Math.floor(Math.random() * colors.length)]},
            ${colors[Math.floor(Math.random() * colors.length)]}
        );
    `;
    
    document.getElementById('background').appendChild(planet);
}

// Inicialização das animações
function showDayBackground() {
    document.querySelectorAll('.planet').forEach(p => p.remove());
    document.querySelectorAll('.firework').forEach(f => f.remove()); // Remove as bolinhas
    document.getElementById('background').style.background = 'linear-gradient(to bottom, #a3d8f4 0%, #d6f0fa 100%)';
}
function showNightBackground() {
    document.getElementById('background').style.background = '';
    document.querySelectorAll('.firework').forEach(f => f.remove()); // Remove as bolinhas
    for(let i = 0; i < 3; i++) createPlanet();
}
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    // Intervalos de criação
    setInterval(createStar, isMobile ? 300 : 100);
    setInterval(createFirework, isMobile ? 5000 : 2000);
    setInterval(createPlanet, 15000);

    // Cria elementos iniciais
    for(let i = 0; i < (isMobile ? 20 : 50); i++) createStar();
    for(let i = 0; i < 3; i++) createPlanet();

    // Aplica visual inicial conforme tema
    if(document.documentElement.getAttribute('data-theme') === 'light') showDayBackground();
    else showNightBackground();
});

document.documentElement.addEventListener('data-theme', function() {
    if(document.documentElement.getAttribute('data-theme') === 'light') showDayBackground();
    else showNightBackground();
});

// Fallback para botões de certificado vazios
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-certificado').forEach(btn => {
    if (btn.textContent.trim() === '') {
      btn.textContent = 'Certificado';
    }
  });
});

// Esconder botão 'Ver Certificado' quando não há link válido
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-certificado').forEach(btn => {
    if (!btn.getAttribute('href') || btn.getAttribute('href') === '#') {
      btn.style.display = 'none';
    }
  });
});
