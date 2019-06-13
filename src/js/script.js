var swiperDiscounts = document.getElementsByClassName('discounts--swiper');
var swiperPreloaderDiscounts = document.getElementsByClassName('discounts-preloader');

var swiperDelayDiscounts = 8000;

if(!!swiperDiscounts[0]) {
    for(let i = 0; i < swiperDiscounts.length; i++) {
        new Swiper(swiperDiscounts[i], {
            slidesPerView: 1,
            effect: 'fade',
            loop: true,
            speed: 600,
            parallax: true,
            autoplay: false,
            pagination: {
              el: '.discounts--pagination',
              clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // autoplay: {
            //     delay: swiperDelayDiscounts
            // },
            on: {
                init: function () {
                    swiperPreloaderDiscounts[0].classList.add('update');
                    swiperPreloaderDiscounts[0].style.animationDuration = (swiperDelayDiscounts/1000) + 's';
                },
                slideChange: function () {
                    swiperPreloaderDiscounts[0].classList.remove('update');
                    setTimeout(function(){
                        swiperPreloaderDiscounts[0].classList.add('update');
                    }, 300)
                },
            }
        });
    }
}

 
 
var  ToggleFunction = function (toggleName) {

var toggle_menu;

toggle_menu = document.getElementsByClassName(toggleName);

    if(!!toggle_menu[0]) {

        for(var i = 0; i < toggle_menu.length; i++) {

            toggle_menu[i].addEventListener('click', function() {

                for (var j = 0; j < toggle_menu.length; j++) {

                    toggle_menu[j].classList.remove('active-toggle');
                }
                
                this.classList.toggle('active-toggle');
            })
        }
    }
}

var navigationPage = new ToggleFunction('navigation-list__item'); 
var navigationEvent = new ToggleFunction('item--lang');
var navigationEvent = new ToggleFunction('item--current');

modalToggle('entry--show-modal', '.entry--modal', 'show--modal');
modalToggle('regist--show-modal', '.regist--modal', 'show--modal');

modalClose('.modal', 'modal-body__icon', 'show--modal');

function modalToggle(_element, _toggleQS, _class, _callback) {

    var modal = document.getElementsByClassName(_element);

    if(!!modal[0]) {

        for(let i = 0; i < modal.length; i++) {

            modal[i].addEventListener('click', function(event) {

                event.preventDefault();

                if(!!_callback) _callback();

                document.body.classList.add('modal--body-show');
                document.querySelector(_toggleQS).classList.add(_class);
            })
        }
    }
}

function modalClose(_elementSQ, _close, _class) {

    var modals = document.querySelectorAll(_elementSQ);

    if(!!modals[0]) {

        for (var i = 0; i < modals.length; i++) {

            modals[i].addEventListener('click', function(event) { 

                if (event.target.className == _close) {

                    document.body.classList.remove('modal--body-show');
                    this.classList.remove(_class);
                }
            })
        }
    }
}
 
var  ToggleFunction = function (toggle_menu) {
 
    toggle_menu = document.getElementsByClassName(toggleName);
    
        if(!!toggle_menu[0]) {
    
            for(var i = 0; i < toggle_menu.length; i++) {
    
                toggle_menu[i].addEventListener('click', function() {
    
                    for (var j = 0; j < toggle_menu.length; j++) {
    
                        toggle_menu[j].classList.remove('active-toggle');
                    }
                    
                    this.classList.toggle('active-toggle');
                })
            }
        }
    }
    

    // ~ Order :toggle
 var ToggleElement =  function (elOnClick, ShowEl) {

    var toggleOrder = document.getElementsByClassName(elOnClick);

    if(!!toggleOrder[0]) {

        for (var i = 0; i < toggleOrder.length; i++) {

            toggleOrder[i].addEventListener('click', function(event) {

                this.nextElementSibling.classList.toggle(ShowEl);
            })
        }
    }
 }

 var langToggle = new ToggleElement('button-toggle--lang', 'show--order');
  var currentToggle = new ToggleElement('button-toggle--currency' , 'show--order');
  var navUserToggle = new ToggleElement('button-page' , 'show--order');
