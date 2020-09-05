(function () {

    document.getElementById('message-form').addEventListener('submit', (e) => {
        e.preventDefault()
        const message = document.getElementById('message');
        const value = message.value

        if (value === '') {
            const feedback = document.querySelector('.feedback')
            feedback.classList.add('show')
            setTimeout( () => {
                feedback.classList.remove('show')
            }, 2000)
        } else {
            document.querySelector('.messgae-content').textContent = value
            message.value = ''
        }
    })

})();