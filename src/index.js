// index.js

// 
// 
// 
// 
// 

// Callbacks
const handleClick = (ramen) => {
  const ramenRatingElement = document.getElementById('rating-display')
  ramenRatingElement.textContent = ramen.rating
  const ramenCommentElement = document.getElementById('comment-display')
  ramenCommentElement.textContent = ramen.comment
  const ramenNameElement = document.querySelector('.name')
  ramenNameElement.textContent = ramen.name
  const ramenImageElement = document.querySelector('.detail-image')
  ramenImageElement.src = ramen.image
  const ramenRestaurantElement = document.querySelector('.restaurant')
  ramenRestaurantElement.textContent = ramen.restaurant
  
};

const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen')
  const ramenMenu = document.getElementById('ramen-menu')
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault(event)
    const newRamenImageFromForm = document.getElementById('new-image')
    const newRamenImgElement = document.createElement('img')
    newRamenImgElement.src = newRamenImageFromForm.value
    
    ramenMenu.appendChild(newRamenImgElement)

    newRamenImgElement.addEventListener('click',() => {
      const ramenRatingElement = document.getElementById('rating-display')
      const newRamenRatingFromForm = document.getElementById('new-rating') 
      ramenRatingElement.textContent = newRamenRatingFromForm.value

      const ramenCommentElement = document.getElementById('comment-display')
      const newRamenCommentFromForm = document.getElementById('new-comment')
      ramenCommentElement.textContent = newRamenCommentFromForm.value

      const ramenNameElement = document.querySelector('.name')
      const newRamenName = document.getElementById('new-name') 
      ramenNameElement.textContent = newRamenName.value

      const ramenImageElement = document.querySelector('.detail-image')
      const newRamenImageFromForm = document.getElementById('new-image')
      ramenImageElement.src = newRamenImageFromForm.value

      const ramenRestaurantElement = document.querySelector('.restaurant')
      const newRamenRestaurantFromForm = document.getElementById('new-restaurant')
      ramenRestaurantElement.textContent = newRamenRestaurantFromForm.value
    })
  })
  

  
  // Add code
}

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    const ramenMenu = document.getElementById('ramen-menu')
    ramens.forEach(ramen => {
    const ramenImgElement = document.createElement('img');
    ramenImgElement.textContent = ramen.name;
    ramenImgElement.src = ramen.image;
    ramenMenu.appendChild(ramenImgElement);
    
    ramenImgElement.addEventListener('click', () => {
      handleClick(ramen)
    })
    console.log(ramenImgElement)
  });
})
  // Add code (deliverable 1)
};

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    addSubmitListener()
    
  })
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

