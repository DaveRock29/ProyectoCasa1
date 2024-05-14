'use strict';

const switcher = document.querySelector('.Btn');

switcher.addEventListener('click', function() 
{
    document.body.classList.toggle('bgchange');
    document.body.classList.toggle('bg');


    const className = document.body.className;
    if(className == "bgchange") {
        this.textContent = "Change";
    } else {
        this.textContent = "Nochange";
    }


    console.log('current class name: ' + className);
});