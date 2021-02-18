export default function changeModalVis() {
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal__overlay');
  modal.classList.toggle('visible');
  modalOverlay.classList.toggle('visible');
}
