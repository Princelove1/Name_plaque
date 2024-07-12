// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');

// Count Letters
//function countLeters(some_data){
  // console.log(some_data);
  //const optsName = some_data.replace(' ', ''); // remove spaces
  //const price = optsName.length * 5; // price of each letter
  //userLeterPreview.textContent = some_data

  //userPricePreview.textContent = '$'+price
//}

//userInput.addEventListener('input', function(e){
  //countLeters(e.target.value)
//})



const countLetters = (some_data) =>{
  const optName = some_data.replaceAll(' ', '')
  const price = optName.length * 5


   userLeterPreview.textContent = some_data;
   userPricePreview.textContent = '$' + price;
}

userInput.oninput = (e) =>{
  countLetters(e.target.value)
}

const BuyNow = () => {
  const inputField = document.querySelector('input[type="text"]'); 
  const defaultText = ('YOUR NAME'); 
  const userInput = inputField.value; 
  
  if (userInput === "") {
    alert('Please enter some text!');
  } else if (userInput === defaultText) {
    alert('Please enter your custom text!');
  } else if (userInput.length > 15) {
    alert('You exceeded the maximum number of letters (15)!');
  } else if (!/^[a-zA-Z]+$/.test(userInput)) {
    alert('Please enter only letters!');
  } else {
    alert(`Congratulations! Your unique text, "${userInput}", has been successfully submitted!`);
  }
};

// Select the "Buy Now" button
const buyNowButton = document.querySelector('.buy-submit');

// Set a click event for the "Buy Now" button
buyNowButton.addEventListener('click', BuyNow);



