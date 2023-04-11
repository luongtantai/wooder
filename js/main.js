function progressbar(){
    let progress = document.querySelector('.progressbar')
    window.addEventListener('scroll', function(){
        let scrollY = window.scrollY;
        let persent = scrollY / (document.body.offsetHeight - window.innerHeight)* 100
        progress.style.width = `${persent}%`
    })
};
progressbar();

function menus(){
    function removeActiveMenu(){
        menus.forEach(function(menu_element, menu_index){
        menu_element.classList.remove('active');
    });
    }
    let menus = document.querySelectorAll('.header__menu .header__menu-nav a'),
    heightHeader = document.querySelector('header').offsetHeight,
    sections = [];
    menus.forEach(function(element, index){
        let className = element.getAttribute('href').replace('#', '');
        let section = document.querySelector('.' + className);
        sections.push(section);

        element.addEventListener('click', function(e){
            e.preventDefault();
            window.scrollTo({
                top: section.offsetTop - heightHeader + 1,
                behavior: 'smooth'
            });
            removeActiveMenu();
            element.classList.add('active');
        })
    })
    window.addEventListener('scroll', function(e){
        let positionScroll = window.pageYOffset;
        sections.forEach(function(section, index){
            if(positionScroll > section.offsetTop - heightHeader && positionScroll < section.offsetTop + section.offsetHeight){
                removeActiveMenu();
                menus[index].classList.add('active');
            }else{
                menus[index].classList.remove('active');
            }
        })
    })
}
menus();
function handleSlideHero(){
    var slider = document.querySelector('.hero__wrap');
    var flktySlider = new Flickity( slider, {
  // options
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNewButtons: false,
    wrapAround: true,
    pageDots: true,
    imagesLoaded: true,
    lazyLoad: 3,
    on: {
    ready: function() {
    },
    change: function( index ) {
      handlePaginSlider(index)
    }
  }
    },
    );
    let btnPrev =document.querySelector('.hero .slider__bottom-control .prew '),
        btnNext = document.querySelector('.hero .slider__bottom-control .next');
        btnPrev.addEventListener('click', function(){
            flktySlider.previous(true)
        });
        btnNext.addEventListener('click', function(){
            flktySlider.next(true)
        });
        function handleDotSlider(){
            let dotSlider = document.querySelector('.flickity-page-dots');
            let dotsSliderBottom = document.querySelector('.slider__bottom-number')
            dotsSliderBottom.appendChild(dotSlider)
        };
        handleDotSlider();
        function handlePaginSlider(index){
            let number = document.querySelector('.hero .slider__bottom-number span')
        number.innerHTML = (index + 1).toString().padStart(2, '0')
        };
};
handleSlideHero();


// function bgheader(){
//     const header = document.querySelector(".header");
//     var myScrollFunc = function() {
//         console.log(1)
//         var y = window.pageYOffset;
//         if (y >= 500) {
//            header.classList.add("--active")
//         } else {
//            header.classList.remove("--active")
//         }
//         };

//     window.addEventListener("scroll", myScrollFunc);
// };
// bgheader();
function bgheader(){
    const offsetHeight = document.querySelector('.btnlink').offsetHeight;
    const offsetTop = document.querySelector('.slider-text').offsetTop
    const header = document.querySelector(".header")
    window.addEventListener('scroll', function(){
    let y = window.pageYOffset;
        if(y >= offsetTop + offsetHeight){
            header.classList.add("--active");
        }
        else{
            header.classList.remove("--active")
        }
    })
}
bgheader();
const backtotop = document.querySelector(".backtotop")
function showBackToTop(){
    const offsetTopFurniture = document.querySelector('.--backtotop-point').offsetTop;
    window.addEventListener('scroll', function(){
        let scrollY = window.pageYOffset;
        if(scrollY >= offsetTopFurniture){
            backtotop.classList.add("backtotop");
        }
        else{
            backtotop.classList.remove("backtotop");
        }
    })
}
showBackToTop()
function clickBackToTop(){
    backtotop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}
clickBackToTop();

function showLang(){
    const lang = document.querySelector(".header__language"),
    langCurrent = document.querySelector('.header__language .header__language-current span'),
    langItem = document.querySelectorAll('.header__language .header__language-options .language')

    lang.addEventListener('click', function(e){
        e.stopPropagation();
        this.classList.toggle('active');
    })

    langItem.forEach(function(item){
        item.addEventListener('click', function(e){
            e.preventDefault()
            let langtext = this.textContent
            let langCurrentSpan = langCurrent.textContent;
            langCurrent.innerHTML = langtext;
            this.innerHTML = langCurrentSpan;
        })
    })
    document.addEventListener('click', function(){
        lang.classList.remove('active')
    })    
}
showLang();

function menuMobileHandle(){
    const BtnMenu = document.querySelector('.icon-mobile'),
    nav = document.querySelector('nav')
    BtnMenu.addEventListener('click', function(){
        this.classList.toggle('active')
        nav.classList.toggle('active')
    });
    function hidenav(){
        BtnMenu.classList.remove('active')
        nav.classList.remove('active')
    };
    window.addEventListener('resize', function(){
        let wWindow = window.innerWidth;
        if(wWindow > 992){
            hidenav()
        }
    });

}
menuMobileHandle();

// function heroSlide(){
//     let listItemSlider = document.querySelectorAll('.hero__slider-item'),
//     number = document.querySelector('.slider__bottom-number .number'),
//     dot_li = document.querySelectorAll('.slider__bottom-number .dotted li')
//     currentSlider = 0;
//     listItemSlider.forEach(function(itemSlider, index){
//         if(itemSlider.classList.contains('active')){
//             currentSlider = index;
//         };
//     });
//     function showNumber(index){
//         number.innerHTML = (index).toString().padStart(2, '0')
//     };
//     document.querySelector('.btnctr.next').addEventListener('click', function(){
//         if(currentSlider < listItemSlider.length - 1){
//             goto(currentSlider + 1);
//             // listItemSlider[currentSlider].classList.remove('active');
//             // listItemSlider[currentSlider + 1].classList.add('active');
//             // currentSlider++;
//         }
//         else{
//             goto(0)
//             // listItemSlider[currentSlider].classList.remove('active');
//             // listItemSlider[0].classList.add('active');
//             // currentSlider = 0;
//         }
//     });
//     document.querySelector('.btnctr.prew').addEventListener('click', function(){
//         if(currentSlider > 0){
//             goto(currentSlider - 1);
//             // listItemSlider[currentSlider].classList.remove('active');
//             // listItemSlider[currentSlider - 1].classList.add('active');
//             // currentSlider--;
//         }
//         else{
//             goto(listItemSlider.length - 1)
//             // listItemSlider[currentSlider].classList.remove('active');
//             // listItemSlider[listItemSlider.length - 1].classList.add('active');
//             // currentSlider = listItemSlider.length - 1;
//         }
//     });
//     function goto(index){
//         listItemSlider[currentSlider].classList.remove('active');
//         listItemSlider[index].classList.add('active');
//         dot_li[currentSlider].classList.remove('is-selected');
//         dot_li[index].classList.add('is-selected');
//         currentSlider = index;
//         showNumber(currentSlider + 1)
//     }
//     dot_li.forEach(function(li, index){
//         li.addEventListener('click', function(){
//             goto(index)
//         })
//     })
// };
// heroSlide();

function handleModalVideo(){
    let videos = document.querySelectorAll('.furniture .decor__row-video-item .img_play img'),
    modalVideo = document.querySelector('.popupvideo'),
    iframeModalVideo = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe'),
    btnclose = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe .popupvideo__inner-close')

    videos.forEach(function (video){
        video.addEventListener('click', function(){
            modalVideo.classList.add('active');

            let dataId = video.getAttribute('data-video-src');
            iframeModalVideo.setAttribute('src', `https://www.youtube.com/embed/${dataId}?autoplay=1`)
        })
    })
    function closeModal(){
        modalVideo.classList.remove('active')
        iframeModalVideo.setAttribute('src', '')
    }
    btnclose.addEventListener('click', function(){
        closeModal()
    })
    modalVideo.addEventListener('click', function(){
        closeModal()
    })
}
handleModalVideo();
function handelTabsNew(){
    let tabs = document.querySelectorAll('.news__tabs-item'),
    listNew = document.querySelectorAll('.news__slide')
    tabs.forEach(function(tab){
        tab.addEventListener('click', function(){
            tabs.forEach(function(tab){
                tab.classList.remove('active')
            })
            this.classList.add('active')
            listNew.forEach(function(newsList){
                newsList.classList.remove('active')
            })
            // let id = this.getAttribute(data-tab)
            let id = this.dataset.tab
            document.querySelector('.news__list-' + id).classList.add('active')
        })
    })

}
handelTabsNew();

function handlePhotoSlider(){
    var slider = document.querySelector('.sliderft .sliderft__list');
    var flktySlider = new Flickity( slider, {
  // options
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNewButtons: false,
    WrapAround: true,
    pageDots: false,
    freeScroll: true,
    imagesLoaded: true,
    lazyLoad: 5,
    pageDots: true,
//     on: {
//     ready: function() {
//       console.log('Flickity is ready');
//     },
//     change: function( index ) {
//       console.log( 'Slide changed to' + index );
//     }
//   }
});
    function handleDotPhotoSlider(){
            let dotPhotoSlider = document.querySelector('.sliderft .flickity-page-dots');
            let dotsPhotoSliderBottom = document.querySelector('.sliderft')
            dotsPhotoSliderBottom.appendChild(dotPhotoSlider)
        };
        handleDotPhotoSlider();
}

window.addEventListener('load', function(){
    handlePhotoSlider();
}); 
Fancybox.bind('[data-fancybox="gallery"]', {
  hideScrollbar: false,
});

Fancybox.bind("[data-fancybox]", {
    Infinity: true,
    Keyboard:{
        Escpe: 'close',
        Delete: "close",
        Backspace: 'close',
        PageUp: 'next',
        PageDown: 'prev',
        ArrowRight: 'next',
        ArrowLeft: 'prev'
    },
    l10n:{
        CLOSE: "Close"
    }
    
});