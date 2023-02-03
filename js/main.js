/*
// 커서
const circle = document.querySelector(".circle");

  document.addEventListener("mousemove", (e) => { 
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      circle.style.left = mouseX + 'px';
      circle.style.top = mouseY + 'px';

  });
*/


// FullPage.js
$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        css3:false,
        'navigation': true,
        'navigationPosition': 'right',
        loopHorizontal: false,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],
        menu: '#menu',
        slidesNavigation: true,
        slidesNavPosition: 'top',
        afterLoad: function(anchorLink, index){

					if(index == 2){
						$('.about .contents').fadeIn(700);
						$('.about .contents .profile_img').delay(800).fadeIn(500);
						$('.about .contents .profile_text').delay(1400).fadeIn(500);
						$('.about .contents .hash').delay(2000).fadeIn(500);
					} else {
            $('.about .contents').fadeOut();
            $('.about .contents .profile_img').fadeOut();
						$('.about .contents .profile_text').fadeOut();
						$('.about .contents .hash').fadeOut();
          };

          if(index == 3){
						$('.skills .contents .my_skills').delay(100).fadeIn(700);
						$('.skills .contents .more').delay(900).fadeIn(700);
					} else {
            $('.skills .contents .my_skills').fadeOut();
            $('.skills .contents .more').fadeOut();
          };

          if(index == 5){
            $('.contact .text_box').delay(2000).fadeIn(800);
            $('.swiper').css('left','50%');
					} else {
            $('.contact .text_box').hide();
            $('.swiper').css('left','-50%');
          };

				}

    });
});

//copyright_popup
$(function(){

  let btnIcon = $('.home .copyright .btn_icon');
  let popup = $('.copyright_popup');
  let close = $('.copyright_popup .close');

  btnIcon.on('click', function(){
    btnIcon.fadeOut(300);
    popup.css('top', '0px');
  });
  close.on('click', function(){
    popup.css('top', '350px');
    btnIcon.delay(1000).fadeIn(300);
  });

});

//about_profile_popup
$(function(){

  let myImg = $('.profile .profile_img');
  let popup = $('.profile_popup_box');
  let close = $('.profile_popup_box .profile_popup .close');

  myImg.on('click', function(){
    popup.fadeIn(500);
    $("body").addClass('noScroll');
  });
  close.on('click', function(){
    popup.fadeOut(500);
    $("body").removeClass('noScroll');
  });

});

//skills_balloon
$(function(){

  let iconBox = $('.skills .contents .my_skills .icon_box');
  let iconBox2 = $('.skills .contents .more .icon_box');
  let icon = $('.skills .contents .my_skills .icon_box .icon');
  let icon2 = $('.skills .contents .more .icon_box .icon');
  let balloon = $('.skills .contents .balloon_box_01');
  let balloon2 = $('.skills .contents .balloon_box_02');
  
  iconBox.find('.html').mouseover(function(){
    balloon.css('left', '64px');
    $(".balloon_title").text("HTML");
    $(".balloon_text1").text("시멘틱 마크업을 통해");
    $(".balloon_text2").text("웹표준을 준수하는");
    $(".balloon_text3").text("웹사이트 구조를 설계");
    $(".balloon_text4").text("할 수 있다.");
  });
  iconBox.find('.css').mouseover(function(){
    balloon.css('left', '238px');
    $(".balloon_title").text("CSS");
    $(".balloon_text1").text("웹사이트의 레이아웃을");
    $(".balloon_text2").text("구현하고 미디어쿼리를");
    $(".balloon_text3").text("이용한 반응형 사이트를");
    $(".balloon_text4").text("제작할 수 있다.");
  });
  iconBox.find('.js').mouseover(function(){
    balloon.css('left', '412px');
    $(".balloon_title").text("JavaScript");
    $(".balloon_text1").text("기본 문법을 이해하고");
    $(".balloon_text2").text("다양한 플러그인을 활용해");
    $(".balloon_text3").text("웹사이트에 적용할 수");
    $(".balloon_text4").text("있다.");
  });
  iconBox.find('.jquery').mouseover(function(){
    balloon.css('left', '586px');
    $(".balloon_title").text("jQuery");
    $(".balloon_text1").text("선택자, 이벤트, 효과에");
    $(".balloon_text2").text("대해 이해하고 동적인");
    $(".balloon_text3").text("웹사이트를 구현할 수");
    $(".balloon_text4").text("있다.");
  });
  iconBox.find('.react').mouseover(function(){
    balloon.css('left', '760px');
    $(".balloon_title").text("React");
    $(".balloon_text1").text("모듈과 컴포넌트를 활용해");
    $(".balloon_text2").text("간단한 페이지를 구현");
    $(".balloon_text3").text("할 수 있다.");
    $(".balloon_text4").text("");
  });
  iconBox2.find('.git').mouseover(function(){
    $(".balloon_02").removeClass('after2 after3')
    $(".balloon_02").addClass('after1')
    $(".balloon_02_title").text("Git & GitHub");
    $(".balloon_02_text").text("기본 명령어와 브랜치를 이해하고 사이트 배포 및 버전 관리를 할 수 있다.");
  });
  iconBox2.find('.xd').mouseover(function(){
    $(".balloon_02").removeClass('after1 after3')
    $(".balloon_02").addClass('after2')
    $(".balloon_02_title").text("XD");
    $(".balloon_02_text").text("그리드 시스템을 이용해 12컬럼을 기준으로 웹사이트 레이아웃을 설계할 수 있다.");
  });
  iconBox2.find('.ps').mouseover(function(){
    $(".balloon_02").removeClass('after1 after2')
    $(".balloon_02").addClass('after3')
    $(".balloon_02_title").text("Photoshop");
    $(".balloon_02_text").text("레이어 구조를 이해하고 도구를 활용해 기본적인 편집을 할 수 있다.");
  });
  icon.mouseover(function(){
    balloon.css('height', '217px');
  });
  icon.mouseout(function(){
    balloon.css('height', '0px');
  });
  icon2.mouseover(function(){
    balloon2.css('height', '97px');
  });
  icon2.mouseout(function(){
    balloon2.css('height', '0px');
  });
});


//project_popup
$(function(){

  let open = $('.project .slide .contents .left div .more');
  let popup = $('.project_popup');
  let close = $('.project .slide .project_popup .close');

  open.on('click', function(){
    popup.fadeIn(500);
    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
  });
  close.on('click', function(){
    popup.fadeOut(500);
    $('body').off('scroll touchmove mousewheel');
  });

});



// contact_Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  