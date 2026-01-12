// Параллакс жұлдыздары
document.addEventListener('mousemove', e => {
    const stars = document.querySelector('.stars');
    const x = (e.clientX / window.innerWidth) * 12 - 6;
    const y = (e.clientY / window.innerHeight) * 12 - 6;
    stars.style.transform = `translate(${x}px, ${y}px)`;
});

// Шексіз карусель
const carouselInner = document.getElementById('carouselInner');
const planets = document.querySelectorAll('.planet');
let currentIndex = 0;
const planetWidth = 250; // планета ені + margin-дар

function slide() {
    currentIndex++;
    carouselInner.style.transform = `translateX(-${currentIndex * planetWidth}px)`;

    // Шексіз цикл
    if (currentIndex >= planets.length) {
        setTimeout(() => {
            carouselInner.style.transition = 'none';
            currentIndex = 0;
            carouselInner.style.transform = 'translateX(0)';
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.6s ease';
            }, 50);
        }, 600);
    }
}

setInterval(slide, 3500);

// Планетаны басқанда сипаттама көрсету
planets.forEach(planet => {
    planet.addEventListener('click', () => {
        const id = planet.dataset.project;
        const desc = document.getElementById('projectDescription');
        
        desc.innerHTML = `
            <h3>Жоба ${id}</h3>
            <p>Бұл жоба ${id}-ші планета тақырыбында жасалған. Заманауи технологиялар қолданылған: CSS Grid, Flexbox, View Transitions, параллакс эффект.</p>
        `;
        desc.style.display = 'block';
        desc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

// Фильтр
const filterButtons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Бастапқы күйде "Барлығы" таңдалсын
document.querySelector('[data-category="all"]').click();
