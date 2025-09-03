document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".faq-icon");

    // Close others if needed
    document.querySelectorAll(".faq-content").forEach((c) => {
      if (c !== content) {
        c.style.maxHeight = null;
        c.classList.remove("opened");
      }
    });

    // Toggle current
    if (content.classList.contains("opened")) {
      content.style.maxHeight = null;
      content.classList.remove("opened");
      icon.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("opened");
      icon.textContent = "−"; // minus symbol
    }
  });
});

$(document).ready(function () {
  // Initialize the carousel
  var myCarousel = new bootstrap.Carousel(
    document.getElementById("testimonialCarousel"),
    {
      interval: 5000, // Auto-slide every 5 seconds
      wrap: true, // Continuous loop
    }
  );

  // Optional: Pause carousel on hover
  $("#testimonialCarousel").hover(
    function () {
      myCarousel.pause();
    },
    function () {
      myCarousel.cycle();
    }
  );
});

function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("active");
}

// Add smooth scrolling functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const homeLink = document.getElementById("home");
  const aboutLink = document.getElementById("about");
  const featureLink = document.getElementById("feature");
  const contactLink = document.getElementById("contact");

  // Add click event listeners
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Close mobile menu if open
    const menu = document.querySelector(".navbar-menu");
    menu.classList.remove("active");
  });

  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    const aboutSection = document.querySelector("section#testimonial");
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    const menu = document.querySelector(".navbar-menu");
    menu.classList.remove("active");
  });

  featureLink.addEventListener("click", function (e) {
    e.preventDefault();
    const featureSection = document.querySelector("section#feature");
    featureSection.scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    const menu = document.querySelector(".navbar-menu");
    menu.classList.remove("active");
  });
  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    const featureSection = document.querySelector("section#contact");
    featureSection.scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    const menu = document.querySelector(".navbar-menu");
    menu.classList.remove("active");
  });
});

$(document).ready(function () {
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentSlide = 0;
  const slideCount = slides.length;
  let slideInterval;
  const autoSlideDelay = 3000; // Time between automatic slides (5 seconds)

  function goToSlide(slideIndex) {
    if (slideIndex < 0) {
      slideIndex = slideCount - 1;
    } else if (slideIndex >= slideCount) {
      slideIndex = 0;
    }

    currentSlide = slideIndex;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Start automatic sliding
  function startAutoSlide() {
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, autoSlideDelay);
  }

  // Stop automatic sliding
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Initialize auto slide
  startAutoSlide();

  // Event listeners for buttons
  prevButton.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
    // Restart the timer when user interacts
    stopAutoSlide();
    startAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
    // Restart the timer when user interacts
    stopAutoSlide();
    startAutoSlide();
  });

  // Pause auto sliding when hovering over the slider (optional)
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
});

// function navigateWithLoading(url) {
//   // Show loader
//   const loader = document.getElementById("loaderContainer");
//   loader.style.display = "flex";

//   // Simulate a short delay before actual navigation
//   setTimeout(function () {
//     // Actual navigation
//     window.location.href = url;
//   }, 1500); // 1.5 seconds delay to show the loading animation
// }


function navigateWithLoading(url) {
  // Create loader container
  const loaderContainer = document.createElement("div");
  loaderContainer.id = "loaderContainer";
  loaderContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  // Create spinner element
  const spinner = document.createElement("div");
  spinner.className = "spinner";

  // Append spinner to container
  loaderContainer.appendChild(spinner);
  document.body.appendChild(loaderContainer);

  // Inject CSS for spinner
  const style = document.createElement("style");
  style.innerHTML = `
    .spinner {
      width: 60px;
      height: 60px;
      border: 6px solid #ddd;
      border-top: 6px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Simulate delay before navigation
  setTimeout(function () {
    window.location.href = url;
  }, 1500);
}



function animateCounter(elementId, finalValue, duration) {
  const element = document.getElementById(elementId);
  const startValue = 0;
  const increment = Math.ceil(finalValue / (duration / 50));
  let currentValue = startValue;

  const counterInterval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= finalValue) {
      currentValue = finalValue;
      clearInterval(counterInterval);
    }
    element.textContent = currentValue;
  }, 50);
}

// Start animations when page loads
document.addEventListener("DOMContentLoaded", function () {
  animateCounter("doctors-counter", 100, 2000);
  animateCounter("workers-counter", 1000, 1500);
  animateCounter("hours-counter", 24, 1500);
});

// Reset and restart counters when visible in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Restart animation when scrolled into view
window.addEventListener(
  "",
  function () {
    const counterSection = document.querySelector(".counter-section");
    if (isElementInViewport(counterSection)) {
      animateCounter("doctors-counter", 70, 2000);
      animateCounter("workers-counter", 24, 1500);
      animateCounter("hours-counter", 24, 1500);
    }
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  // Get references to our elements
  const videoContainer = document.getElementById("videoContainer");
  const video = document.getElementById("myVideo");
  const playButton = document.getElementById("playButton");

  // Add muted attribute to help with autoplay policies
  video.muted = true;

  // Function to play video
  function playVideo() {
    // Using a promise to handle autoplay restrictions
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playButton.style.display = "none";
          console.log("Video playing");
        })
        .catch((error) => {
          // Auto-play was prevented
          console.log("Autoplay prevented:", error);
          // Show a user interaction message if needed
        });
    }
  }

  // Function to pause video
  function pauseVideo() {
    video.pause();
    playButton.style.display = "flex";
    console.log("Video paused");
  }

  // Play on hover
  videoContainer.addEventListener("mouseenter", function () {
    console.log("Mouse entered");
    playVideo();
  });

  // Pause when mouse leaves
  videoContainer.addEventListener("mouseleave", function () {
    console.log("Mouse left");
    pauseVideo();
  });

  // Play/pause on click
  playButton.addEventListener("click", function (e) {
    console.log("Play button clicked");
    e.stopPropagation();
    playVideo();
  });

  // Toggle play/pause when clicking on video
  videoContainer.addEventListener("click", function () {
    console.log("Container clicked");
    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  });

  // Show play button when video ends
  video.addEventListener("ended", function () {
    console.log("Video ended");
    playButton.style.display = "flex";
  });

  // Debug to check if script is loading
  console.log("Video player script loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("logoSlider");
  if (!slider) {
    return; // Exit if the slider is not on the current page
  }

  const slides = slider.querySelectorAll(".slider-card");
  const totalSlides = slides.length;
  let currentSlideIndex = 0;

  function getSlidesToShow() {
    if (window.innerWidth >= 1200) return 4;
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function updateSlider() {
    const slidesToShow = getSlidesToShow();
    const maxSlide = totalSlides > slidesToShow ? totalSlides - slidesToShow : 0;

    if (currentSlideIndex > maxSlide) {
      currentSlideIndex = maxSlide;
    }

    if (currentSlideIndex >= maxSlide) {
      currentSlideIndex = 0;
    } else {
      currentSlideIndex++;
    }

    const slideWidth = 100 / slidesToShow;
    slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}%)`;
  }

  window.addEventListener("resize", updateSlider);
  setInterval(updateSlider, 3000);
  updateSlider(); // Initial call
});
