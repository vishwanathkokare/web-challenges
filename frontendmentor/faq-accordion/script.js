const btns = document.querySelectorAll('.icon');
const para = document.querySelectorAll('p');
const img = document.querySelectorAll('.icon > img')
let clicked;

btns.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(i === clicked){
            para[i].style.display = 'none';
            img[i].src= 'images/icon-plus.svg'
            clicked = undefined
        }else{
            para[i].style.display = 'block';
            img[i].src = 'images/icon-minus.svg';
            clicked = i
        }
           
    })
})
