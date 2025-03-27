// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Get references to the heart element and error modal
const heart = document.querySelector('.heart');  // Assuming there's a heart class
const errorModal = document.querySelector('#modal');  // Assuming the modal has an id of 'modal'
const modalMessage = document.querySelector('#modal-message');  // Assuming there's a span or p with id 'modal-message'

// Add event listener for click on the heart
heart.addEventListener('click', function () {
  // When the heart is clicked, invoke mimicServerCall
  mimicServerCall()
    .then(() => {
      // If the server call is successful:
      if (heart.classList.contains('activated-heart')) {
        // If heart is already full, make it empty again
        heart.classList.remove('activated-heart');
      } else {
        // If the heart is empty, make it full
        heart.classList.add('activated-heart');
      }
    })
    .catch(() => {
      // If the server call fails:
      // Show the error modal by removing the 'hidden' class
      errorModal.classList.remove('hidden');
      
      // Display a generic error message in the modal
      modalMessage.textContent = "Something went wrong. Please try again later.";
      
      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

// Mimic server call function (already provided in your setup)
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    // Randomly resolve or reject to simulate success or failure
    const isSuccess = Math.random() > 0.5;  // 50% chance of success
    setTimeout(() => {
      if (isSuccess) {
        resolve("Success");
      } else {
        reject("Failure");
      }
    }, 1000);  // Mimicking a delay for the server response
  });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
