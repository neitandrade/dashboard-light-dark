const themeChange = document.querySelector(".theme-change")

//change theme
themeChange.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
})