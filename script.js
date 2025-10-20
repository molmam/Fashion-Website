// Smooth scroll to products
    document.getElementById('shopNowBtn').addEventListener('click', function() {
      document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
    });

    // Hero Slideshow
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showNextSlide() {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }

    setInterval(showNextSlide, 5000); // change slide every 5 seconds