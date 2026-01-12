/* ===== Parallax ===== */
const stars = document.getElementById('stars');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  stars.style.transform = `translate(${x}px, ${y}px)`;
});

/* ===== Планеталар каруселі ===== */
const planets = ['Марс', 'Юпитер', 'Сатурн', 'Нептун', 'Жер'];
const carousel = document.getElementById('carousel');

planets.forEach(name => {
  const planet = document.createElement('div');
  planet.className = 'planet';
  planet.textContent = name;
  planet.onclick = () => {
    alert(name + ' — осы жерде жоба сипаттамасы ашылады');
  };
  carousel.appendChild(planet);
});

/* ===== Жобалар + filter() ===== */
const projectsData = [
  { title: 'Landing Page', cat: 'frontend' },
  { title: 'UI Макет', cat: 'design' },
  { title: 'Mini Game', cat: 'games' }
];

const projectsEl = document.getElementById('projects');

function renderProjects(category) {
  projectsEl.innerHTML = '';

  projectsData
    .filter(p => category === 'all' || p.cat === category)
    .forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = `${p.title} (${p.cat})`;
      projectsEl.appendChild(card);
    });
}

renderProjects('all');

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    renderProjects(btn.dataset.cat);
  });
});
