document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach(testimonial => {
      testimonial.style.display = "none";
    });
    testimonials[index].style.display = "block";
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function previousTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  document.getElementById("next-btn").addEventListener("click", nextTestimonial);
  document.getElementById("prev-btn").addEventListener("click", previousTestimonial);

  // Show the first testimonial
  showTestimonial(currentIndex);
});
