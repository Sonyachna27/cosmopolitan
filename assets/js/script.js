
document.addEventListener("DOMContentLoaded", function () {
	// animateText();
	toggleMenu();
	accordionFunction();
	handlePopup();
	prettyScroll();
	animationHeader();
	workSliderInit();
});

setTimeout(function () {
	let aosOffset = 120;
	if (window.innerWidth < 480) {
		aosOffset = 30;
	}
	AOS.init({
		offset: aosOffset
	});
}, 100);
// const animateText = () =>{	const aboutText = document.querySelectorAll('.about__content p, .footer nav li, .footer__block, .area__content li, .area__content p, .discover__content h2, .discover__content p, .discover__content li, .discover__content h3 ');

	
// 	aboutText.forEach((text) => {
// 		text.setAttribute('data-aos', 'fade-up');
// 	})
// }

const prettyScroll = () => {
	document.querySelectorAll('a[href^="#"]').forEach(link => {
			link.addEventListener('click', function(e) {
					e.preventDefault();

					const href = this.getAttribute('href').substring(1);
					const scrollTarget = document.getElementById(href);

					if (!scrollTarget) return;

					const header = document.querySelector('header');
					const fixedHeader = document.querySelector('.header__bottom');

					const topOffset = header?.offsetHeight || 0;
					const fixedOffset = fixedHeader?.offsetHeight || 0;

					const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
					const elementPosition = scrollTarget.getBoundingClientRect().top;

					const offsetPosition = isDesktop 
							? elementPosition - fixedOffset 
							: elementPosition - topOffset;

					window.scrollBy({
							top: offsetPosition,
							behavior: 'smooth'
					});
			});
	});
};
const animationHeader = () =>{
	let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
		const headerNav = document.querySelector(".header__bottom");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth >= 1024) {
      if (scrollTop > lastScrollTop) {
        if (scrollTop > 100) {
          headerNav.classList.add("fixed-header-nav");
          headerNav.style.animationName = "smoothScroll";
        }
      } else if (scrollTop <= 0) {
        headerNav.classList.remove("fixed-header-nav");
        headerNav.style.animationName = "removeSmoothScroll";
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  });
}
const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenu = document.querySelector(".burger");
  const navLinks = document.querySelectorAll("nav a");
  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
}

const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");

  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.toggle("active");
    });

    const buttons = item.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  });
};

const handlePopup = () => {
	const openPopup = () => {
			document.querySelectorAll('[data-open="open"]').forEach(element => {
					element.addEventListener('click', () => {
							document.documentElement.classList.add('open-popup');
					});
			});
	};
	const closePopup = () => {
			document.querySelectorAll('[data-close="close"]').forEach(element => {
					element.addEventListener('click', () => {
							document.documentElement.classList.remove('open-popup');
					});
			});
	};

	openPopup();
	closePopup();
};


const workSliderInit = () =>{
	const workSliderWrap = document.querySelector('.workSlider');
	if(!workSliderWrap) return;
	const workSlider = new Swiper(workSliderWrap, {
		slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
		pagination: {
        el: ".work-pagination",
				clickable: true,
      },
		navigation: {
			nextEl: ".work-button-next",
			prevEl: ".work-button-prev",
		},
	});
}
