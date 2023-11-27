const ratingState = document.querySelector(`.rating-state`)
const thankYouState = document.querySelector(`.thank-you-state`)
const  submitBtn = document.querySelector(`.btn`)
const selectedNumber = document.querySelector(`.selected-number`)
const numbers = document.querySelectorAll(`.number`)

let clickNumber = 0;
submitBtn.addEventListener(`click`,function(){
    if(clickNumber > 0){
      ratingState.classList.remove(`active`)
      selectedNumber.textContent=clickNumber
      thankYouState.classList.add(`active`)
    }else{
       alert(`Please select a number`) 
    }
})

numbers.forEach(function(number){
    number.addEventListener(`click`,function(e){
        clickNumber = parseInt(e.target.textContent);

        numbers.forEach(function(num){
            num.classList.remove(`active`)
        })
        number.classList.add(`active`)
    })
})