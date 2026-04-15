(function ($) {
  "use strict";

  var initPreloader = function () {
    $(document).ready(function () {
      var Body = $('body');
      Body.addClass('preloader-site');
    });
    $(window).on('load', function () {
      $('.preloader').fadeOut();
      $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  $(document).ready(function () {
    // Isotope Initialization
    var $container = $('.isotope-container').isotope({
      itemSelector: '.item',
      layoutMode: 'masonry',
    });

    // Filter items on button click
    $('.filter-button').click(function () {
      var filterValue = $(this).attr('data-filter');
      if (filterValue === '*') {
        $container.isotope({ filter: '*' });
      } else {
        $container.isotope({ filter: filterValue });
      }
      $('.filter-button').removeClass('active');
      $(this).addClass('active');
    });

    // Video Modal
    var $videoSrc;
    $('.play-btn').click(function () {
      $videoSrc = $(this).data("src");
    });

    $('#myModal').on('shown.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#myModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc);
    })

    // Swiper Initialization
    var sliderSwiper = new Swiper(".slider", {
      effect: "fade",
    });

    var roomSwiper = new Swiper(".room-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".room-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });

    var gallerySwiper = new Swiper(".gallery-swiper", {
      effect: "fade",
      navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
      },
    });

    var thumbSlider = new Swiper(".product-thumbnail-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var largeSlider = new Swiper(".product-large-slider", {
      autoplay: true,
      loop: true,
      spaceBetween: 10,
      effect: 'fade',
      thumbs: {
        swiper: thumbSlider,
      },
    });

    // Preloader
    initPreloader();

    // Chocolat
    initChocolat();

    // Animate on Scroll
    AOS.init({
      duration: 1000,
      once: true,
    });

    // DateTimePicker
    new DateTimePickerComponent.DatePicker('select-arrival-date');
    new DateTimePickerComponent.DatePicker('select-departure-date');
  });
})(jQuery);


// Modal Video
$(document).ready(function () {
  var $videoSrc;
  $('.btn-play').click(function () {
      $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  $('#videoModal').on('shown.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })

  $('#videoModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc);
  })
});


    // Facts counter
  $(document).ready(function () {
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  });





document.addEventListener("DOMContentLoaded", () => {
  const duration = 3000; // duración total en ms
  document.querySelectorAll(".display-4.fw-bold").forEach(el => {
    const target = +el.innerText;
    el.innerText = "0";
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          el.innerText = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(animate);
          else el.innerText = target;
        };
        requestAnimationFrame(animate);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
  });
});





  document.addEventListener("DOMContentLoaded", () => {
    const cover = document.getElementById("video-cover");
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("custom-video");
    const playBtn = document.getElementById("play-btn");

    playBtn.addEventListener("click", () => {
      cover.style.display = "none";
      videoContainer.style.display = "block";
      video.play();
    });
  });



   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });













        // Testimonial carousel
// Function to initialize the carousel
    function initTestimonialCarousel(carouselClass, options) {
    console.log("Initializing carousel:", carouselClass);
    const carousel = document.querySelector(carouselClass);
    if (!carousel) {
        console.error("Carousel element not found:", carouselClass);
        return;
    }

    const items = Array.from(carousel.children); // Use Array.from
    let currentIndex = 0;
    let intervalId;
    let itemsToShow = 1; // Initialize itemsToShow

    function updateCarousel() {
        console.log("Updating carousel. Current index:", currentIndex);
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        for (let i = 0; i < itemsToShow && i < items.length; i++) {
            items[(currentIndex + i) % items.length].style.display = 'block';
        }
    }

    function autoScroll() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    if (options.autoplay) {
        intervalId = setInterval(autoScroll, options.autoplaySpeed);

        if (options.autoplayHoverPause) {
            carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
            carousel.addEventListener('mouseleave', () => intervalId = setInterval(autoScroll, options.autoplaySpeed));
        }
    }

    function handleResponsiveness() {
        console.log("Handling responsiveness. Window width:", window.innerWidth);
        if (window.innerWidth >= 991) {
            itemsToShow = 3;
        } else if (window.innerWidth >= 767) {
            itemsToShow = 2;
        } else {
            itemsToShow = 1;
        }
        updateCarousel();
    }

    handleResponsiveness();
    window.addEventListener('resize', handleResponsiveness);
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded
    initTestimonialCarousel(".testimonial-carousel-1", {
        autoplay: true,
        autoplaySpeed: 10000,
        autoplayHoverPause: false
    });

    initTestimonialCarousel(".testimonial-carousel-2", {
        autoplay: true,
        autoplaySpeed: 10000,
        autoplayHoverPause: false
    });
});





// Cambia el color del botón del menú al hacer hover y mantiene el color activo en el seleccionado
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los botones/enlaces del menú (ajusta el selector según tu HTML)
  const menuButtons = document.querySelectorAll('.navbar-nav .nav-link');

  menuButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      // Quita la clase 'active' de todos los botones
      menuButtons.forEach(b => b.classList.remove('active'));
      // Agrega la clase 'active' al botón clickeado
      this.classList.add('active');
    });
  });
});





document.querySelectorAll('.marquee-track').forEach(track => {
  track.innerHTML += track.innerHTML;
});







// --- DARK MODE PERSISTENTE Y LOGO DINÁMICO ---

function updateCCEDLogo() {
  const isDark = document.body.classList.contains('dark-mode');
  document.querySelectorAll('img[data-cced-logo]').forEach(img => {
    img.src = isDark ? 'images/CCED-dm.png' : 'images/CCED.png';
  });
}

// Al cargar la página, aplica dark mode si está guardado
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
  updateCCEDLogo();
});

// Botón para alternar dark mode y guardar preferencia
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
    updateCCEDLogo();
  });
}



// Back to Top button funcional todas las veces
document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});








// SEARCH BAR FUNCTION

// Índice de palabras clave y enlaces
const searchIndex = {
  //servicios
  "servicios": "servicios.html",
  "informática": "servicios.html#ar1",
  "contabilidad": "servicios.html#ar3",
  "enfermería": "servicios.html#ar2",
  "inicial": "servicios.html#s1",
  "primaria": "servicios.html#s1",
  "secundaria": "servicios.html#s2",
  //personal
  "personal": "personal.html",
  "directiva": "personal.html#p-1",
  "maestros de area": "personal.html#p-2",
  //eventos
  "eventos": "eventos.html",
  "marchas patrias": "eventos.html#a4",
  "pluma y corazon": "eventos.html#a2",
  "cced sin plastico": "eventos.html#a3",
  "los científicos del mañana": "eventos.html#a1",
  "dia de la familia": "eventos.html#a5",
  //index
  "inicio": "index.html",
  "cced": "index.html#cced",
  "numero de estudiantes": "index.html#c1",
  "numero de maestros": "index.html#c2",
  "numero de personal": "index.html#c3",
  "ofertas": "index.html#ofertas",
  "instalaciones": "index.html#instal",
  //sobre nosotros
  "sobre nosotros": "sobrenosotros.html",
  "historia": "sobrenosotros.html#section-title",
  "filosofia": "sobrenosotros.html#filosofia",
  "antiguas instalaciones": "sobrenosotros.html#antig-ins",
  "mision": "sobrenosotros.html#mision",
  "vision": "sobrenosotros.html#vision",
  "valores": "sobrenosotros.html#valores",
  //tectimonios
  "opiniones": "testimonios.html#opiniones",
  //contacto
  "contacto": "contacto.html",
  "ubicacion": "contacto.html#mapa",
  "mapa": "contacto.html#mapa",
  "formulario": "contacto.html#form-contact",
  "direccion": "contacto.html#contact-info",
  "email": "contacto.html#contact-info",
  "telefono": "contacto.html#contact-info",
  "horario": "contacto.html#contact-info",
  // Palabras clave y enlaces
};

// Búsqueda y salto
document.querySelectorAll('input[placeholder="Search..."]').forEach(function(input) {
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const keyword = this.value.trim().toLowerCase();
      if (!keyword) return;

      // Limpia la barra de búsqueda
      this.value = '';

      // Si la palabra está en el índice, redirige
      if (searchIndex[keyword]) {
        window.location.href = searchIndex[keyword];
        return;
      }

      // Si no, busca en la página actual
      const selectors = [
        'section h1', 'section h2', 'section h3', 'section h4', 'section h5', 'section h6',
        'section p', 'section li', 'section a'
      ];
      const elements = document.querySelectorAll(selectors.join(','));

      let found = false;
      for (const el of elements) {
        if (el.innerText && el.innerText.toLowerCase().includes(keyword)) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.focus?.();
          found = true;
          break;
        }
      }
      if (!found) {
        alert('No se encontró la palabra en la página.');
      }
    }
  });
});