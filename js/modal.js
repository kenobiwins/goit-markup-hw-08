(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", closeModalonBackdropClick);
  
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.add("no-scroll");
    if (!refs.modal.classList.contains("is-hidden")) {
      window.addEventListener("keydown", closeModalOnPressEsc);
    }
  }

  function closeModalonBackdropClick(event) {
    if (event.target === event.currentTarget) {
      refs.modal.classList.add("is-hidden")
    }

    if (event.code === "Escape") {
      refs.modal.classList.add("is-hidden")
    }
    refs.body.classList.remove("no-scroll")
  };
})();