import { Modal } from 'bootstrap';

export class ModalManager {
  constructor() {
    this.initModals();
  }

  initModals() {
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
      button.addEventListener('click', (e) => {
        const selector = button.getAttribute('data-bs-target');
        const modalEl = document.querySelector(selector);
        const modalInstance = new Modal(modalEl);
        modalInstance.show();
      });
    });
  }
}
