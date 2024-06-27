const themeChange = document.querySelector(".theme-change")

//change theme
themeChange.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeChange.querySelector('span:nth-child(1)').classList.toggle('active');
    themeChange.querySelector('span:nth-child(2)').classList.toggle('active'); 
    /* TOGGLE REMOVE E ADICIONA QUANDO O EVENTO É ACIONADO */

})