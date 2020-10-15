function start () {
  const backgroundCardElements = document.querySelectorAll('.background-card')

  const backgroundCards = Array.from(backgroundCardElements)
  backgroundCards.forEach((element, index) => {
    setTimeout(() => element.classList.add('animate'), 1200 + index * 200)

    setTimeout(() => element.classList.add('wiggle'), 3200 + index * 400)
  })
}

window.addEventListener('DOMContentLoaded', start)