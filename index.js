var buttons = document.querySelectorAll('.rating-number div')
var current = -1;
for (let i =0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        if (!buttons[i].classList.contains('clicked')){
            for (let j=0;j<buttons.length;j++){
                if (i!=j){
                    buttons[j].classList.remove('clicked')
                }
            }
            buttons[i].classList.add('clicked')
            current = i+1;
        }else{
            buttons[i].classList.remove('clicked')
        }
    })
}

var submit = document.querySelector('.button')
submit.addEventListener('click',function(){
    let rating_component = document.querySelector('.rating-component')
    rating_component.classList.add('hidden')
    let thanks_component = document.querySelector('.thanks_component')
    console.log(thanks_component.classList)
    thanks_component.classList.remove('hidden')
    let rating_text = document.querySelector('.rating_summary')
    rating_text.textContent = `You selected ${current} out of 5`
})