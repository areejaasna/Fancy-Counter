const counterEle = document.querySelector('.counter');
const increaseButtonEle = document.querySelector('.counter__button--increase');
const decreaseButtonEle = document.querySelector('.counter__button--decrease');
const resetButtonEle = document.querySelector('.counter__reset-button');
const counterValueEle = document.querySelector('.counter__value');
const counterTitleEle = document.querySelector('.counter__title');

//console.log(increaseButtonEle);

resetButtonEle.addEventListener('click', function(){
     //set the counter vlaue to 0
     counterValueEle.textContent = 0;

     //reset background color
     counterEle.classList.remove('counter--limit');

     //reset the counter title
     counterTitleEle.textContent = 'Fancy Counter';

     //enable increase and decrease button
     increaseButtonEle.disabled = false;
     decreaseButtonEle.disabled = false;

     //unfocused button (blur)
     resetButtonEle.blur();
});

decreaseButtonEle.addEventListener('click', function(){
     //get the current value of the counter
     const currentValue = counterValueEle.textContent;
    
     //convert the value to number type
     const  currentValueAsNumber = +currentValue;
     
     //decrement by 1
     let newValue = currentValueAsNumber - 1;

     //check if new value is less than 0
     if (newValue < 0){
          newValue = 0;
     }
     

     //update value with the new value
     counterValueEle.textContent = newValue;

     //unfocus (blur) button
     decreaseButtonEle.blur();
});

//function
function  incrementCounter(){
     //get the current value of counter
     const currentValue = counterValueEle.textContent;
     //console.log(currentValue)

     //convert valaue to number type
     const  currentValueAsNumber = +currentValue

     //increment by 1
     let newValue = currentValueAsNumber + 1

     if ( newValue > 5){
          newValue = 5;
          
          // give the visual indicaator that limit has been reached
          counterEle.classList.add('counter--limit');

          //update the counter title 
          counterTitleEle.innerHTML = 'Limit! Buy <b> Pro </b> for > 5'

          //disable both increase and decrease button
          increaseButtonEle.disabled = true;
          decreaseButtonEle.disabled = true;

     }
     
     //set counter element with the new value
     counterValueEle.textContent = newValue;

     //unfocus button
     increaseButtonEle.blur();
}

increaseButtonEle.addEventListener('click', incrementCounter);

document.addEventListener('keydown', incrementCounter);
