const box= document.querySelectorAll('.box ')
// let info=document.getElementById('intro')
window.addEventListener('scroll', function() {
    let scroll=(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    console.log(scroll)
    if (scroll>=42){
        
        box[0].classList.add('visible');
        
    } 
    if(scroll>=80){
        
        box[1].classList.add('visible');
    }
    // else{
    //     box.style.display='none'

    // }
  });
  