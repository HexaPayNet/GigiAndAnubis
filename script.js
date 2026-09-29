const body = document.body;

const modeButtons = document.querySelectorAll('[data-mode]');

modeButtons.forEach(btn => btn.addEventListener('click', () => {

  const mode = btn.dataset.mode;

  body.classList.toggle('anubis-mode', mode === 'anubis');

  document.querySelectorAll('.mode-switch button')
    .forEach(b => b.classList.toggle('active', b.dataset.mode === mode));

}));


/* ================================
   GALLERY
   ================================ */

const galleryButtons = document.querySelectorAll('[data-gallery]');
const galleryGrid = document.getElementById('galleryGrid');


/* ================================
   IMAGE FILES
   ================================ */

const nailImages = [
  "classic.jpeg",
  "soft.jpeg",
  "black.jpeg",
  "signature.jpeg"
];

const tattooImages = [
  "fullsleeve .jpeg",
  "halfsleeve.jpeg",
  "medium.jpeg",
  "small.jpeg"
];


/* ================================
   GALLERY SWITCHING
   ================================ */

galleryButtons.forEach(btn => btn.addEventListener('click', () => {

  const tattoos = btn.dataset.gallery === 'tattoos';

  btn.parentElement
    .querySelectorAll('button')
    .forEach(b => b.classList.remove('active'));

  btn.classList.add('active');

  galleryGrid.classList.toggle('tattoo-gallery', tattoos);


  /* Gallery names */

  const names = tattoos
  ? [
      'Full Sleeve',
      'Half Sleeve (Large)',
      'Medium',
      'Small'
    ]
  : [
      'Classic Elegance',
      'Soft Luxury',
      'Bold & Black',
      'Signature Detail'
    ];


  galleryGrid
    .querySelectorAll('span')
    .forEach((s, i) => {
      s.textContent = names[i];
    });


  /* Gallery images */

  galleryGrid
    .querySelectorAll('.gallery-item')
    .forEach((el, i) => {

      const image = tattoos
        ? tattooImages[i]
        : nailImages[i];

      el.style.background = `
        linear-gradient(
          to bottom,
          transparent 30%,
          rgba(0, 0, 0, 0.78)
        ),
        url("${image}") center / cover
      `;

    });

}));


/* ================================
   LOAD NAIL IMAGES BY DEFAULT
   ================================ */

galleryGrid
  .querySelectorAll('.gallery-item')
  .forEach((el, i) => {

    el.style.background = `
      linear-gradient(
        to bottom,
        transparent 30%,
        rgba(0, 0, 0, 0.78)
      ),
      url("${nailImages[i]}") center / cover
    `;

  });


/* ================================
   MOBILE MENU
   ================================ */

document.querySelector('.menu').addEventListener('click', () => {

  const nav = document.querySelector('nav');

  nav.style.display =
    nav.style.display === 'flex'
      ? 'none'
      : 'flex';

  nav.style.position = 'absolute';
  nav.style.top = '65px';
  nav.style.right = '10px';
  nav.style.flexDirection = 'column';
  nav.style.padding = '20px';

  nav.classList.add('glass');

});
document.querySelectorAll('[data-wa]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var name = document.getElementById('clientName').value.trim();
    var dateValue = document.getElementById('appointmentDate').value;

    if (!name || !dateValue) {
      alert('Please enter your name and choose a date first.');
      return;
    }

    // Turn 2026-10-15 into "15 October 2026"
    var date = new Date(dateValue + 'T00:00:00').toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    var message = "Hi, I'm " + name + ". I'd like to make a " +
                  btn.dataset.service + " appointment on " + date + ".";

    var url = 'https://wa.me/' + btn.dataset.wa +
              '?text=' + encodeURIComponent(message);

    window.open(url, '_blank', 'noopener');
  });
});
