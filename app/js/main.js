window.onload = function() {
    (function(){
        var openModalBtn  = document.getElementById('js-open-modal');
        var closeModalBtn = document.getElementById('js-close-modal');
        var modal = document.getElementById('js-modal');

        function openModal() {
            modal.classList.add('modal-open');
        }
        function closeModal() {
            modal.classList.remove('modal-open');
        }

        if (openModalBtn && modal) {
            openModalBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                openModal();
            });
        }
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        document.body.addEventListener('click', function () {
           if (modal.matches('.modal-open')) {
               closeModal();
           } 
        });
        if (window.innerWidth < 715) {

            var navLeft = document.querySelector(".js-arrow-left");
            var navRight = document.querySelector(".js-arrow-right");
            var imgs = document.querySelectorAll('.product-similar');
            var slideFirst = imgs[0];
            var i = 0;

            slideFirst.classList.add('active');
            
            navLeft.classList.add("unactive");

            function slideLeft () {
                imgs[i].classList.remove('active');
            i--;
            imgs[i].classList.add('active');
            navRight.classList.remove("unactive");
            if (i === 0) {
                navLeft.classList.add("unactive");
            }
            };

            function slideRight () {
                imgs[i].classList.remove('active');
            i++;
            imgs[i].classList.add('active');
            navLeft.classList.remove("unactive");
            if (i === imgs.length - 1) {
                navRight.classList.add("unactive");
            }
            };

            navLeft.addEventListener("click", slideLeft);
            navRight.addEventListener("click", slideRight);
        }
    })()
  };

