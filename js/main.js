'use strict';

//===  main.js  start =========================================================






document.addEventListener('DOMContentLoaded', () => {

   // Modal start=======================================================

   // const openCloseBtnTech = document.querySelector('.tech-btn');
   // const btnSubmit = document.querySelector('.btn__submit');
   const closeModalBtn = document.querySelector('.modal__close');
   // const inputIn = document.querySelector('.faq__input');

   // openCloseBtnTech.addEventListener('click', openTech);

   // function openTech() {
   //    let modalOverlay = document.querySelector('.overley');
   //    let modal = document.querySelector('.modal');
   //    modalOverlay.classList.add('overley--visible');
   //    modal.classList.add('modal--visible');
   // }

   // btnSubmit.addEventListener('submit', openSubmit);

   // function openSubmit(e) {
   //    e.preventDefault();
   //    let modalOverlay = document.querySelector('.overley');
   //    let modal = document.querySelector('.modal');
   //    if (inputIn.vallue === '') {
   //       let timer = setTimeout(function () {
   //          modalOverlay.classList.add('overley--visible');
   //          modal.classList.add('modal--visible');
   //       }, 5000);


   //    }
   // }



   closeModalBtn.addEventListener('click', closeModal);

   function closeModal() {
      let modalOverlay = document.querySelector('.overley');
      let modal = document.querySelector('.modal');
      modalOverlay.classList.remove('overley--visible');
      modal.classList.remove('modal--visible');
   }




   // Modal finish=======================================================

   //  кнопка animals__btn    btn-adopt   donate__btn
   let btnAnimals = document.querySelector('.animals__btn');
   let btnAdopt = document.querySelector('.btn-adopt');
   let btnDonate = document.querySelector('.donate__btn');

   btnAnimals.addEventListener('click', function () {
      btnAnimals.classList.add('animals__btn--active');
   });

   btnAdopt.addEventListener('click', function () {
      btnAdopt.classList.add('btn-adopt--active');
   });

   btnDonate.addEventListener('click', function () {
      btnDonate.classList.add('donate__btn--active');
   });






   // Меню бургер 
   const burgerBtn = document.querySelector('.burger__btn');
   const menuList = document.querySelector('.menu__list');

   burgerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('burger__btn-line--active');
      menuList.classList.toggle('menu__list--active');
   });

   // Плавный скролл Start ---------------------------------

   let menu = document.querySelector('.menu__list');
   let links = document.querySelectorAll('.menu__link');

   if (window.location.hash != '') {
      scrollToId(window.location.hash);
   }

   menu.addEventListener('click', function (e) {
      if (e.target.classList.contains('menu__link')) {
         e.preventDefault();

         let link = e.target;
         scrollToId(link.hash);
      }
   });

   let btnUp = document.querySelector('.btnUp');

   btnUp.addEventListener('click', function (e) {
      scrollToY(0);
   });

   let scrolls = 0;
   let scrollTimeout;
   let delay = 100;

   // bad
   window.addEventListener('scroll', function (e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
         onScroll(e);
      }, delay);
   });

   function onScroll(e) {
      // console.log(++scrolls);
      let pos = window.pageYOffset;

      if (pos > window.innerHeight) {
         btnUp.classList.add('btnUp-open');
      }
      else {
         btnUp.classList.remove('btnUp-open');
      }

      for (let i = links.length - 1; i >= 0; i--) {
         let link = links[i];
         let header = document.querySelector(link.hash);

         if (pos > (elemOffsetTop(header) - window.innerHeight / 2)) {
            menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
            link.classList.add('menu__link-active');
            break;
         }
      }
   }

   function scrollToId(id) {
      let target = document.querySelector(id);
      let styles = window.getComputedStyle(target);

      if (target !== null) {
         let pos = elemOffsetTop(target) - menu.clientHeight - parseFloat(styles.marginTop);
         scrollToY(pos);
      }
   }


});
//===  main.js  finish =========================================================
// Плавный скролл  ---------------------------------

function scrollToY(pos) {
   window.scrollTo({
      top: pos - 100,
      behavior: "smooth"
   });
}

function elemOffsetTop(node) {
   let coords = node.getBoundingClientRect();
   return coords.top + window.pageYOffset;
}
// Плавный скролл  End---------------------------------








//=====  JQuery  start  =============================================================
$(function () {

   $('.top__slider').slick({
      // dots: true,
      // arrows: false,
      // fade: true,
      // autoplay: true
   });



   //модальное окно при отправке
   // let overley = document.querySelector('.overley');
   // let btnOverley = document.querySelector('.btn__submit');

   // btnOverley.addEventListener('submit', function () {
   //    overley.classList.toggle('.overley--visible');
   // });




   // $('form').submit(function () {
   //    var form_data = $(this).serialize();
   //    $.ajax({
   //       type: 'POST',
   //       url: 'send.php',
   //       data: form_data,
   //       success: function (e) {
   //          $('.overley').addClass('overley--visible');
   //          $('.modal').addClass('modal--visible');
   //       }
   //        e.preventDefault();
   //    });


   // });

   // $(document).ready(function () {
   //    $("form").submit(function () { // Событие отправки с формы
   //       var form_data = $(this).serialize(); // Собираем данные из полей
   //       $.ajax({
   //          type: "POST", // Метод отправки
   //          url: "send.php", // Путь к PHP обработчику sendform.php
   //          data: form_data,
   //          success: function () {
   //             $('.overley').addClass('overley--visible');
   //             $('.modal').addClass('modal--visible');
   //          }
   //       });
   //       event.preventDefault();
   //    });
   // });



   $(document).ready(function () {
      $("form").submit(function () { // Событие отправки с формы
         var form_data = $(this).serialize(); // Собираем данные из полей
         $.ajax({
            type: "POST", // Метод отправки
            url: "send.php", // Путь к PHP обработчику sendform.php
            data: form_data,
            success: function () {
               $('.overley').addClass('overley--visible');
               $('.modal').addClass('modal--visible');
            }
         }).done(function () {
            $(this).find('input').val('');
            $('form').trigger('reset');
         });
         event.preventDefault();
      });
   });




   //  var openCloseBtnTech = $('.tech-btn');
   // var closeModalBtn = $('.modal__close');

   // openCloseBtnTech.on('click', openTech);

   // function openTech() {
   //    var modalOverlay = $('.overley');
   //    var modal = $('.modal');
   //    modalOverlay.addClass('overley--visible');
   //    modal.addClass('modal--visible');
   // }


   // closeModalBtn.on('click', closeModal);

   // function closeModal() {
   //    var modalOverlay = $('.overley');
   //    var modal = $('.modal');
   //    modalOverlay.removeClass('overley--visible ');
   //    modal.removeClass('modal--visible ');
   // }


});



//=====  JQuery  finish  =============================================================