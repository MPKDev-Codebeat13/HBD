const showMoreBtn = document.getElementById('showMoreBtn')
const hiddenMessage = document.getElementById('hiddenMessage')

if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    hiddenMessage.style.display = 'block'
    showMoreBtn.style.display = 'none'

    // Fire confetti!
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#ff66cc', '#8000ff', '#ffffff', '#ff0080'],
    })
  })

  // Add keyboard accessibility
  showMoreBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      showMoreBtn.click()
    }
  })
}

const showMoreBtn2 = document.getElementById('showMoreBtn2')
const hiddenMessage2 = document.getElementById('hiddenMessage2')

if (showMoreBtn2) {
  showMoreBtn2.addEventListener('click', () => {
    hiddenMessage2.style.display = 'block'
    showMoreBtn2.style.display = 'none'

    // Fire confetti!
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#ff66cc', '#8000ff', '#ffffff', '#ff0080'],
    })
  })

  // Add keyboard accessibility
  showMoreBtn2.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      showMoreBtn2.click()
    }
  })
}

// Modal functionality for Memorable Moments
const memorableModal = document.getElementById('memorableModal')
const closeBtn = document.getElementsByClassName('close')[0]

// Get the gallery item in Khalid's card
const khalidGalleryItem = document.querySelectorAll('.gallery-item')[1] // Khalid's is the second gallery item

if (khalidGalleryItem) {
  khalidGalleryItem.addEventListener('click', () => {
    memorableModal.style.display = 'block'
  })
}

// When the user clicks on <span> (x), close the modal
if (closeBtn) {
  closeBtn.onclick = function () {
    memorableModal.style.display = 'none'
  }
}

// Modal functionality for Meriam's Memorable Moments
const meriamModal = document.getElementById('meriamModal')
const meriamCloseBtn = document.getElementById('meriamClose')

// Get the gallery item in Meriam's card
const meriamGalleryItem = document.querySelectorAll('.gallery-item')[0] // Meriam's is the first gallery item

if (meriamGalleryItem) {
  meriamGalleryItem.addEventListener('click', () => {
    meriamModal.style.display = 'block'
  })
}

// When the user clicks on <span> (x), close the modal
if (meriamCloseBtn) {
  meriamCloseBtn.onclick = function () {
    meriamModal.style.display = 'none'
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == memorableModal) {
    memorableModal.style.display = 'none'
  }
  if (event.target == meriamModal) {
    meriamModal.style.display = 'none'
  }
}
