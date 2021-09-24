
import galleryItems from '../js/data/gallery-img.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  overlay: document.querySelector('.lightbox__overlay'),
  imageEl: document.querySelector('.lightbox__image'),
  BtnEl: document.querySelector('[data-action="close-lightbox"]')
};

const { galleryList, lightbox, overlay, imageEl, BtnEl } = refs;

//1. Создание  и рендер элементов разметки
function createItem(a) {
 
  return a.map((elem) => {
    
    const { description, original, preview } = elem;
    
    // console.log(description, original, preview);
return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    
  }).join("");
}
const markup = createItem(galleryItems);
// console.log(markup);
galleryList.insertAdjacentHTML("afterbegin", markup);

// 2. Создание click
galleryList.addEventListener('click', onOpenModal);
BtnEl.addEventListener('click', onCloseModal);
overlay.addEventListener('click', onCloseModal);


  
  //3. работа модального окна
function onOpenModal(evt) {
  // console.log(evt);
evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
    return;
  }
    lightbox.classList.add('is-open');
  replaceAtribute(evt.target.dataset.source,evt.target.alt);
    
}

function replaceAtribute(src, alt ) {
  imageEl.src = src;
  imageEl.alt = alt;
}

function onCloseModal(e) {
    lightbox.classList.remove('is-open')
    replaceAtribute(" ", " ")
};
// 4. Закрытие модалки с помощью "ESC"
window.addEventListener('keydown', onCloseModalEsc);

function onCloseModalEsc(evt) {
  if (evt.code === 'Escape') {
    onCloseModal()
  };
  
}