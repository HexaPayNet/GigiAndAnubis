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
