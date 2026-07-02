//só lógica de estado do carrossel

const track = document.querySelector('.mouse-track');
const cards = document.querySelectorAll('.mouse-card');

let mouseX = 0;
let currentTranslate = 0;
let targetTranslate = 0;

const speed = 0.08;

// movimento do mouse
document.addEventListener('mousemove', (e) => {
  const windowWidth = window.innerWidth;
  mouseX = (e.clientX / windowWidth) - 0.5;
});

// animação suave do track
function animate() {
  const maxMove = 200; // intensidade do movimento horizontal

  targetTranslate = mouseX * maxMove;

  currentTranslate += (targetTranslate - currentTranslate) * speed;

  track.style.transform = `translateX(${currentTranslate}px)`;

  updateActiveCard();

  requestAnimationFrame(animate);
}

// detecta card central
function updateActiveCard() {
  const center = window.innerWidth / 2;

  let closest = null;
  let minDist = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;

    const dist = Math.abs(center - cardCenter);

    if (dist < minDist) {
      minDist = dist;
      closest = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

animate();