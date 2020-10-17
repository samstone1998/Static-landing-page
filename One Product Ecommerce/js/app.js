

function scrollAppear(){

    var element_to_appear = document.querySelector('#reviews');
    var Position = element_to_appear.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.7; // change to higher to appear later

    if(Position < screenPosition){
        element_to_appear.classList.add('appear');
    }

}


window.addEventListener('scroll',scrollAppear);