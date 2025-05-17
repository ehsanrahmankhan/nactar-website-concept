// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navLinks = document.getElementById("navLinks")

if (mobileMenuToggle && navLinks) {
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
}

// About Modal
const aboutLink = document.getElementById("aboutLink")
const aboutModal = document.getElementById("aboutModal")
const closeModal = document.getElementById("closeModal")

if (aboutLink && aboutModal && closeModal) {
  aboutLink.addEventListener("click", (e) => {
    e.preventDefault()
    aboutModal.style.display = "flex"
  })

  closeModal.addEventListener("click", () => {
    aboutModal.style.display = "none"
  })

  window.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
      aboutModal.style.display = "none"
    }
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#" && this.getAttribute("id") !== "aboutLink") {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Close mobile menu after clicking
        if (navLinks) {
          navLinks.classList.remove("active")
        }
      }
    }
  })
})

// Countdown Timer
document.addEventListener("DOMContentLoaded", () => {
  // Initialize countdown elements with zeros
  const daysElement = document.getElementById("days")
  const hoursElement = document.getElementById("hours")
  const minutesElement = document.getElementById("minutes")
  const secondsElement = document.getElementById("seconds")

  // IMPORTANT: Set your target date here
  // The registration closing date (current format: May 24, 2025)
  const targetDate = new Date("2025-05-24T00:00:00").getTime()

  // Update the countdown after a slight delay to show the zeros first
  setTimeout(() => {
    // Calculate current time
    const now = new Date().getTime()

    // Calculate the time remaining
    const timeRemaining = targetDate - now

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

    // Update the HTML elements
    if (daysElement) daysElement.textContent = days
    if (hoursElement) hoursElement.textContent = hours
    if (minutesElement) minutesElement.textContent = minutes
    if (secondsElement) secondsElement.textContent = seconds

    // Continue updating the countdown every second
    startCountdown()
  }, 500) // Half-second delay to show zeros first

  function startCountdown() {
    const countdownInterval = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime()

      // Calculate the time remaining
      const timeRemaining = targetDate - now

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

      // Update the HTML elements
      if (daysElement) daysElement.textContent = days
      if (hoursElement) hoursElement.textContent = hours
      if (minutesElement) minutesElement.textContent = minutes
      if (secondsElement) secondsElement.textContent = seconds

      // If the countdown is over, display zeros
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval)
        if (daysElement) daysElement.textContent = "0"
        if (hoursElement) hoursElement.textContent = "0"
        if (minutesElement) minutesElement.textContent = "0"
        if (secondsElement) secondsElement.textContent = "0"
      }
    }, 1000)
  }
})
