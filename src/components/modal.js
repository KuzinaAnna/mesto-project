export const modals = document.querySelectorAll(".popup");

export function disableButton(buttonElement) {
      const buttonDisabled = document.querySelector(buttonElement);
      buttonDisabled.disabled = true;
      buttonDisabled.classList.add("popup__button-submit_inactive");
}

export function openPopup(element) {
      element.classList.add("popup_opened");
      document.addEventListener("keydown", closeByEscape);
}

export function closePopup(popup) {
      popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", closeByEscape);
}
export function closeModal(e) {
      if (
            e.target.classList.contains("popup__close-button") ||
            e.target.classList.contains("popup")
      ) {
            closePopup(e.target.closest(".popup"));
      }
}

modals.forEach((modal) => {
      modal.addEventListener("click", closeModal);
});

function closeByEscape(e) {
      if (e.key == "Escape") {
            const openedPopup = document.querySelector(".popup_opened");
            closePopup(openedPopup);
      }
}
