import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const createListItem = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `;
};

const listItem = galleryItems.map(createListItem).join("");
galleryEl.insertAdjacentHTML("beforeend", listItem);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();
    
    if(e.target.nodeName !== 'IMG'){
    return;
    }

    const instance = basicLightbox.create(`
		<img width="1400" height="900" src='${e.target.dataset.source}'>
	`);
    instance.show()

  closeModalByEsc(instance);
}
    

function closeModalByEsc(instance){
    if(instance.visible()){
        galleryEl.addEventListener('keydown', (e) =>{
            if(e.code==='Escape'){
                 instance.close();
            }
        });
    }
}