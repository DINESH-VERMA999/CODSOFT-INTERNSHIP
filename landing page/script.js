 // Fetch random images from Lorem Picsum API
 const apiUrl = 'https://picsum.photos/250/300';

 async function fetchImages() {
     const pinsContainer = document.getElementById('pinsContainer');

     for (let i = 0; i < 100; i++) {
         const pin = document.createElement('div');
         pin.classList.add('pin');
         
         const img = document.createElement('img');
         img.src = `${apiUrl}?random=${i}`;
         img.alt = 'Random Image';
         
         pin.appendChild(img);
         pinsContainer.appendChild(pin);
     }
 }

 fetchImages();


 ScrollReveal().reveal('main', {
    delay: 200,
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
});

const btn = document.getElementById('btn');

// Add a click event listener to the button
btn.addEventListener('click', function() {
    
    location.reload();
});

window.addEventListener('load', function() {
    var footer = document.querySelector('.footer');
    footer.classList.add('show-footer');
});