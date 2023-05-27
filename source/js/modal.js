const modalSuccessElement = document.querySelector('.modal--success');
const modalErrorElement = document.querySelector('.modal--success');
const formNameElement = document.querySelector('.form-name');

function closedModal(modal) {
    modal.classList.remove('modal--open')
}

function openedModal(modal) {
    modal.classList.add('modal--open')
}
function handlePopupClick(e) {
    if (e.target.classList.contains('modal__button') || e.target === e.currentTarget) {
        closedModal(e.currentTarget)
    }
}

modalSuccessElement.addEventListener('click', handlePopupClick);
modalErrorElement.addEventListener('click', handlePopupClick);

formNameElement.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: new FormData(formNameElement)
    }).then(res => res.ok ? res.json() : Promise.reject('Ошибка на стороне сервера'))
        .then(data => {
            openedModal(modalSuccessElement);
            formNameElement.reset()
            console.log(data);
        })
        .catch((err) => {
            openedModal(modalErrorElement);
        })

})
