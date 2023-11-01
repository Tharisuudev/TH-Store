let slideIndex = 1

showSlide(slideIndex)

function plusSlides(n) {
  showSlide((slideIndex += n))
}

function showSlide(n) {
  let slides = document
    .getElementsByClassName("carousel")[0]
    .getElementsByTagName("img")

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  slides[slideIndex - 1].style.display = "block"
}

function showNextSlide() {
  if (!isPaused) {
    let slides = document.getElementsByClassName("carousel-item")
    slideIndex = (slideIndex + 1) % slides.length

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active")
    }
    slides[slideIndex].classList.add("active")
  }
}

// Inicie a troca automática a cada 3 segundos (3000 ms)
let interval = setInterval(showNextSlide, 5000)

// Pausar a troca de slides quando o mouse estiver sobre o carrossel
let carouselElement = document.getElementById("carouselExampleIndicators")
carouselElement.addEventListener("mouseenter", function () {
  isPaused = true
})
carouselElement.addEventListener("mouseleave", function () {
  isPaused = false
})
