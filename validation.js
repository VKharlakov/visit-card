//Объявление фукнции проверки валидности поля
function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement)
    } else {
        hideInputError(formElement, inputElement)
    }
}

//Объявление функции проверки есть ли хотя бы одно поле невалидное
function hasInvalidInput(formInputList) {
    return formInputList.some(function(element) {
        return !element.validity.valid
    })

}

//Объявление функции выключения/выключения кнопки сабмита, в зависимости от
//валидности полей
function toggleBtnState(submitBtn, formInputList) {
    if (hasInvalidInput(formInputList)) {
        submitBtn.setAttribute('disabled', true)
    } else {
        submitBtn.removeAttribute('disabled', true)
    }
}