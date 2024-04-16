let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  
   button.addEventListener('click', (e)=>{
      if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
     else if(e.target.innerHTML == 'AC'){
        string = " ";
        document.querySelector('input').value = string;
    }
    
    
     else if(e.target.innerHTML == 'AC'){
        string = " ";
        document.querySelector('input').value = string;
    }
    else { console.log(e.target);
    string = string + e.target.innerHTML ;
    document.querySelector('input').value = string;
}
   
   })
})


   

 
// })
let contain = document.querySelector('.container');
let btns = document.querySelector('.mode');

btns.addEventListener('click', () => {
    let currentColor = contain.style.backgroundColor;

    if (currentColor === 'white' || currentColor === '') {
        contain.style.backgroundColor = '#023047';
    } else {
        contain.style.backgroundColor = 'white';
    }
});




