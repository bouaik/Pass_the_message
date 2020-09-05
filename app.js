(function () {

    document.getElementById('message-form').addEventListener('submit', (e) => {
        e.preventDefault()
        const message = document.getElementById('message');
        const value = message.value

        document.querySelector('.messgae-content').textContent = value

        message.value = ''
    })









})();