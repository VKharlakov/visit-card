const form = document.querySelector('.form')
const submitBtn = document.querySelector('.form__button')
const formContainer = document.querySelector('.login')
const greetMsg = document.querySelector('#greeting')
const infoCardList = Array.from(document.querySelectorAll('.bio__item'))

infoCardList.forEach(function(cardElement) {
    cardElement.addEventListener('click', function(event) {
        const cardText = cardElement.querySelector('.bio__item-text')
        const cardIcon = cardElement.querySelector('.bio__item-icon')
        const cardClickIcon = cardElement.querySelector('.bio__item-clickIcon')

        cardIcon.style.bottom = '80%'
        cardText.style.visibility = 'visible'
        cardText.style.opacity = '1'
        cardClickIcon.style.opacity = '0'
        cardClickIcon.style.visibility = 'hidden'
    })
})



function greetUser() {
    greetMsg.textContent = `${document.querySelector('#inputName').value}  ${document.querySelector('#inputSurname').value}`
}

//Добавление слушателя сабмита на форму и объявление функции сабмита и закрытия
//окна логина
form.addEventListener('submit', submitForm)
function submitForm (event) {
    event.preventDefault()

    greetUser()
    closeLoginForm()
}

//Установка слушателей на все поля
function setEventListeners(formElement) {
    const formInputList = Array.from(formElement.querySelectorAll('.form__input'))

    formInputList.forEach(function(inputElement) {
        //Вызов функции проверки валидности полей при инпуте
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement)

            //Вызов функции включения/выключения кнопки сабмита, в зависимости от
            //заполненности полей
            toggleBtnState(submitBtn, formInputList)
        })
    })

    toggleBtnState(submitBtn, formInputList)

}

//Объявление функций отображения и скрытия сообщений об ошибке ввода
function showInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-hint`)
    errorElement.textContent = inputElement.validationMessage
}

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-hint`)
    errorElement.textContent = ""
}

//Вызов функции установки слушателей
setEventListeners(form)

//Объявление функции закрытия логин-формы
function closeLoginForm() {
    formContainer.style.visibility = 'hidden'
}