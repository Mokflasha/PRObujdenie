import '../css/style.css';

document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }


		import Swiper from 'swiper';
		import { Navigation } from 'swiper/modules';
		// import Swiper and modules styles
		import 'swiper/css';
		import 'swiper/css/navigation';
		import 'swiper/css/pagination';
		
		// init Swiper:
		const swiper = new Swiper('.swiper', {
			// configure Swiper to use modules
			modules: [Navigation],
			slidesPerView: 3,
			spaceBetween: 30,
			initialSlide: 1,
			breakpoints: {
				380:{
					slidesPerView: 1.4,
					centeredSlides: true,
				},
				580:{
					slidesPerView: 1.6,
					centeredSlides: true,
				},
				670:{
					slidesPerView: 1.8,
					centeredSlides: true,
				},
				750:{
					slidesPerView: 2,
					centeredSlides: true,
				},
				820:{
					slidesPerView: 2.2,
					centeredSlides: true,
				},
				900:{
					slidesPerView: 3
				},
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});