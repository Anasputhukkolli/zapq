document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.faq-icon');

        // Close others if needed
        document.querySelectorAll('.faq-content').forEach(c => {
            if (c !== content) {
                c.style.maxHeight = null;
                c.classList.remove('opened');
            }
        });

        // Toggle current
        if (content.classList.contains('opened')) {
            content.style.maxHeight = null;
            content.classList.remove('opened');
            icon.textContent = '+';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add('opened');
            icon.textContent = '−'; // minus symbol
        }
    });
});


$(document).ready(function() {
    // Initialize the carousel
    var myCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000,  // Auto-slide every 5 seconds
        wrap: true       // Continuous loop
    });
    
    // Optional: Pause carousel on hover
    $('#testimonialCarousel').hover(
        function() {
            myCarousel.pause();
        },
        function() {
            myCarousel.cycle();
        }
    );
});


function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

// Add smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const homeLink = document.getElementById('home');
    const aboutLink = document.getElementById('about');
    const featureLink = document.getElementById('feature');
    const contactLink = document.getElementById('contact');

    // Add click event listeners
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Close mobile menu if open
        const menu = document.querySelector('.navbar-menu');
        menu.classList.remove('active');
    });

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        const aboutSection = document.querySelector('section#about');
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        const menu = document.querySelector('.navbar-menu');
        menu.classList.remove('active');
    });

    featureLink.addEventListener('click', function(e) {
        e.preventDefault();
        const featureSection = document.querySelector('section#feature');
        featureSection.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        const menu = document.querySelector('.navbar-menu');
        menu.classList.remove('active');
    });
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        const featureSection = document.querySelector('section#contact');
        featureSection.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        const menu = document.querySelector('.navbar-menu');
        menu.classList.remove('active');
    });
});


$(document).ready(function(){
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = slideCount - 1;
        } else if (slideIndex >= slideCount) {
            slideIndex = 0;
        }
        
        currentSlide = slideIndex;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    prevButton.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextButton.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
});

function navigateWithLoading(url) {
    // Show loader
    const loader = document.getElementById('loaderContainer');
    loader.style.display = 'flex';
    
    // Simulate a short delay before actual navigation
    setTimeout(function() {
      // Actual navigation
      window.location.href = url;
    }, 1500); // 1.5 seconds delay to show the loading animation
  }