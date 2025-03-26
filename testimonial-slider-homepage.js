document.addEventListener('DOMContentLoaded', function() {
    var swiperSlides = document.querySelectorAll('.swiper-slide');
    
    swiperSlides.forEach(function(slide) {
        slide.classList.remove('hide-slide');
    });

    let photoSwiper = new Swiper(".swiper.is-photos", {
        effect: "cards",
        grabCursor: true,
        loop: false,
        keyboard: true,
        navigation: {
            nextEl: ".arrow.is-right",
            prevEl: ".arrow.is-left"
        },
        on: {
            slideChange: function () {
                let activeIndex = this.activeIndex;

                document.querySelectorAll('.text-slide').forEach(text => {
                    text.style.opacity = '0';
                    text.style.display = 'none';
                });

                let activeText = document.querySelector(`.text-slide[data-index="${activeIndex}"]`);
                if (activeText) {
                    activeText.style.opacity = '1';
                    activeText.style.display = 'block';
                }

                document.querySelectorAll('.text-slide-name').forEach(text => {
                    text.style.opacity = '0';
                    text.style.display = 'none';
                });

                let activeTextName = document.querySelector(`.text-slide-name[data-index="${activeIndex}"]`);
                if (activeTextName) {
                    activeTextName.style.opacity = '1';
                    activeTextName.style.display = 'block';
                }

                document.querySelectorAll('.text-slide-job').forEach(text => {
                    text.style.opacity = '0';
                    text.style.display = 'none';
                });

                let activeTextJob = document.querySelector(`.text-slide-job[data-index="${activeIndex}"]`);
                if (activeTextJob) {
                    activeTextJob.style.opacity = '1';
                    activeTextJob.style.display = 'block';
                }
            }
        }
    });
});

function goToSlide(slideIndex) {
    if (window.photoSwiper) {
        window.photoSwiper.slideTo(slideIndex);
    }
}
