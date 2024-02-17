


const btn = document.querySelector('.nav-icon-btn')

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.header__top-row').classList.toggle('header__top-row--mobile')
    document.querySelector('.nav-icon').classList.toggle('nav-icon--active')
    document.body.classList.toggle('no-scroll')
    
    
})


mask('[data-tel-input]')

const phoneInputs = document.querySelectorAll('[data-tel-input]')

phoneInputs.forEach((input)=>{
    input.addEventListener('input', ()=>{
        if(input.value =='+') input.value = ''
    })
    input.addEventListener('blur', ()=>{
        if(input.value == '+') input.value =''
    })
})


/* Yandex Map */

var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [59.918967, 30.307893],
            zoom: 14,
            fullscreenControl: false,
            zoomControl: false
        });

        DG.marker([59.918967, 30.307893]).addTo(map).bindPopup('Это находится здесь!');
    });


document.querySelector('[data-info-map]').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('#map').scrollIntoView({behavior: "smooth", block: 'center'})
    
})

document.querySelector('[data-info-tel]').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('.footer').scrollIntoView({behavior:'smooth', block:"center"})
    
})



document.querySelector('#benefit').addEventListener('click', (e)=>{ 
    e.preventDefault()
    document.querySelector('#benefits').scrollIntoView({behavior: "smooth", block: 'center', inline: "nearest"})
    
})
