export const closePopupBtns = document.querySelectorAll(".popup__close-button");
export const modals = document.querySelectorAll(".popup");

export function openPopup(element) {
    element.classList.add("popup_opened");
}

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
}
export function closeModal(e) {
    if (
        e.target.classList.contains("popup__close-button") ||
        e.target.classList.contains("popup")
    ) {
        closePopup(e.target.closest(".popup"));
    }
}

closePopupBtns.forEach((modal) => {
    modal.addEventListener("click", closeModal);
});

modals.forEach((modal) => {
    modal.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (e) => {
    modals.forEach((modal) => {
        if (e.key === "Escape" && modal.classList.contains("popup_opened")) {
            modal.classList.remove("popup_opened");
        }
    });
});
