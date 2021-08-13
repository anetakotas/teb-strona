//image change in slider
function slider() {
    

    let slidesSelect =  document.querySelectorAll('#slider-container .slides');
    let counterSelect = document.querySelectorAll('#slider-counter .slider-number');
    let currentSlide = 0;
    let currentNumber = 0;
    let interval = setInterval(slideChange, 6000);

    function slideChange() {
        slidesSelect[currentSlide].className = 'slides';
        counterSelect[currentNumber].id = '';

        currentSlide = (currentSlide+1)%slidesSelect.length;
        currentNumber = (currentNumber+1)%counterSelect.length;

        slidesSelect[currentSlide].className = 'slides showing';
        counterSelect[currentNumber].id = 'number-active';
    }
}
slider();


//scroll top
function scrollTop() {

    buttonScrollTop = document.getElementById('#upanchor')

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//change innerhtml of .copyright-content from "copyrights: teb edukacja" to only "teb edukacja" while screen size < 681xp
function changeText() {
    if (window.matchMedia('(max-width: 770px)').matches) {
        selectedText = document.getElementById('p1');
        selectedText.innerHTML = 'TEB Edukacja 2021';
    }
}
changeText();