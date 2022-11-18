const images = () => {
    const popupImg = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');
    
    popupImg.classList.add('popup_img');
    workSection.appendChild(popupImg);

    popupImg.style.justifyContent = 'center';
    popupImg.style.alignItems = 'center';
    popupImg.style.display = 'none';

    popupImg.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        //так как это ссылки сбрасываем стандарт. поведение
        e.preventDefault();
        let target = e.target;
        // проверка на кликабельность эл. и наличие класса
        if (target && target.classList.contains('preview')) {
            popupImg.style.display = 'flex';
            document.body.style.overflow = "hidden";
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        // закрыт. при клике на подлож.
        if (target && target.matches('div.popup_img')) {
            popupImg.style.display = 'none';
            document.body.style.overflow = "";
        }
    });

};

export default images;