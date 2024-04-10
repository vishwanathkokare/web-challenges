const btns = document.querySelectorAll('.btn');
const subBtn = document.querySelector('.sub_btn');
const card = document.querySelector('.card');
const thankYou = document.querySelector('.thankyou');
const rate = document.querySelector('.rate')
let clicked = false;
let rate_value;

const removeAll = () =>{
    btns.forEach(item=>item.classList.remove('clicked'));
    clicked = false;
    rate_value = undefined;
    console.log('removed',clicked);
}

 btns.forEach((item,index)=>{
   item.addEventListener('click',()=>{
    if(!clicked){
        item.classList.add('clicked');
        clicked = true;
        rate_value = index;
        console.log('clicked',index,clicked)
   }else{
        removeAll();  
        item.classList.add('clicked');
        rate_value = index;
        clicked = true;
    }
   }) 
})

subBtn.addEventListener('click',()=>{
    if(clicked){
       card.style.display = 'none';
       thankYou.style.display = 'block';
       rate.innerHTML = rate_value;
    }
})
