function showInputError(
      formElement,
      inputElement,
      errorMessage,
      validitySettings
) {
      const errorElement = formElement.querySelector(
            `.${inputElement.id}-error`
      );
      inputElement.classList.add(validitySettings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(validitySettings.errorClass);
}

function hideInputError(formElement, inputElement, validitySettings) {
      const errorElement = formElement.querySelector(
            `.${inputElement.id}-error`
      );
      inputElement.classList.remove(validitySettings.inputErrorClass);
      errorElement.classList.remove(validitySettings.errorClass);
      errorElement.textContent = "";
}
function isValid(formElement, inputElement, validitySettings) {
      if (inputElement.validity.patternMismatch) {
            inputElement.setCustomValidity(inputElement.dataset.errorMessage);
      } else {
            inputElement.setCustomValidity("");
      }

      if (!inputElement.validity.valid) {
            showInputError(
                  formElement,
                  inputElement,
                  inputElement.validationMessage,
                  validitySettings
            );
      } else {
            hideInputError(formElement, inputElement, validitySettings);
      }
}

function setEventListeners(formElement, validitySettings) {
      const inputList = Array.from(
            formElement.querySelectorAll(validitySettings.inputSelector)
      );
      const buttonElement = formElement.querySelector(
            validitySettings.submitButtonSelector
      );
      toggleButtonState(inputList, buttonElement, validitySettings);
      inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", function () {
                  isValid(formElement, inputElement, validitySettings);
                  toggleButtonState(inputList, buttonElement, validitySettings);
            });
      });
}

export function enableValidation(validitySettings) {
      const formList = Array.from(
            document.querySelectorAll(validitySettings.formSelector)
      );
      formList.forEach((formElement) => {
            formElement.addEventListener("submit", (e) => {
                  e.preventDefault();
            });
            setEventListeners(formElement, validitySettings);
      });
}

function hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
      });
}
function toggleButtonState(inputList, buttonElement, validitySettings) {
      if (hasInvalidInput(inputList)) {
            buttonElement.disabled = true;
            buttonElement.classList.add(validitySettings.inactiveButtonClass);
      } else {
            buttonElement.disabled = false;
            buttonElement.classList.remove(
                  validitySettings.inactiveButtonClass
            );
      }
}
