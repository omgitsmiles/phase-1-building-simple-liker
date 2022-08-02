// Defining text characters for the empty and full hearts for you to use later.


const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', () => {
  const heart = document.querySelectorAll('span.like-glyph');
  const errorMsg = document.getElementById('modal')
  heart.forEach(heart => heart.addEventListener('click', cb))

  function cb(heart){
    if (heart.target.innerText === EMPTY_HEART) {
      heart.target.innerText =  FULL_HEART
      heart.target.classList.add('activated-heart')
    } else if (heart.target.innerText === FULL_HEART) {
      heart.target.innerText = EMPTY_HEART
      heart.target.classList.remove('activated-heart')
    }
    mimicServerCall()
    .catch(() => {
      errorMsg.className = '';

      setTimeout(() => {
        errorMsg.className = 'hidden'
      }, 3000)
    })
  }
})


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



// document.addEventListener('DOMContentLoaded', () => {
//   // Your JavaScript code goes here!
//   const errorMsg = document.getElementById('modal')
//   errorMsg.classList.add('hidden')
//   const heart = document.querySelectorAll('span.like-glyph')
  
  
//   heart.forEach(heart => heart.addEventListener('click', cb))
  
//   function cb(heart) {
//     mimicServerCall()
//     .then(() => {
//       if (heart.target.innerText === EMPTY_HEART) {
//             heart.target.innerText =  FULL_HEART
//             heart.target.classList.add('activated-heart')
//       } else if
//         (heart.target.innerText === FULL_HEART) {
//           heart.target.innerText = EMPTY_HEART
//           heart.target.classList.remove('activated-heart')
//         }
//       })
//       .catch(() => {
        
//         errorMsg.className = '';
//         console.log(errorMsg)
        
//         setTimeout(() => {
//           console.log(errorMsg)
//           errorMsg.className = 'hidden'}, 3000)
//       })
//     }
//   })