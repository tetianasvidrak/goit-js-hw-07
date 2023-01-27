import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryImages = galleryItems.map((item) => {
  const imgBox = document.createElement("div");
  const imgLink = document.createElement("a");
  const img = document.createElement("img");

  imgBox.classList.add("gallery__item");
  imgLink.classList.add("gallery__link");
  img.classList.add("gallery__image");

  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;
  imgLink.href = item.original;
  imgLink.appendChild(img);
  imgBox.appendChild(imgLink);
  return imgBox;
});

galleryRef.append(...galleryImages);

const onClickHandler = (event) => {
  event.preventDefault();
  const targetImg = event.target;
  const bigImgLink = targetImg.dataset.source;
  targetImg.src = bigImgLink;
  const instance = basicLightbox.create(`${targetImg.outerHTML}`);
  instance.show();
};

galleryRef.addEventListener("click", onClickHandler);
