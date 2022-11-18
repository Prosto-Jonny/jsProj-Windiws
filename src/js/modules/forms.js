import checkNumInput from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        message = {
            loading: 'Загрузка...',
            succes: 'Спасибо! Скоро мы с вами свяжемся.',
            error: 'Что-то пошло не так.'
        },
        postData = async (url, data) => {
            document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });
            return await res.text();
        },
        clearAllInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
        };
    
    checkNumInput('input[name="user_phone"]');
    
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            // добавка статуса отправки данных
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            // сбор данных из формы(исп. объект formData)
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            // запрос на сервер(Fetch)
            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.succes;
                })
                .catch(() => statusMessage.textContent = message.error)
                .finally(() => {
                    clearAllInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;