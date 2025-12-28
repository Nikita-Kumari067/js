const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach((button)=>{
      console.log(button)
      button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)

        switch(e.target.id){
          case 'white':
            console.log( body.style.backgroundColor = e.target.id)
            break
        
        case 'yellow':
          console.log( body.style.backgroundColor = e.target.id)
          break
        
        case 'blue':
          console.log( body.style.backgroundColor = e.target.id)
          break

        case 'grey':
          console.log( body.style.backgroundColor = e.target.id)
          break

        }



      })

})


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight <= 0 || isNAN(weight)) {
    result.innerHTML = 'please give a valid weight';
  } else {
    const Bmi = weight / ((height * height) / 10000).toFixed(2);
    result.innerHTML = `<span>${Bmi}</span>`;
  }
});
