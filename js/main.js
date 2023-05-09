"use strict"; // Start of use strict

window.addEventListener('load', function() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(e) {
  hamburger.classList.toggle("is-active");
});

var menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener("click", function(e) {
    hamburger.classList.toggle("is-active");
    fullpage_api.setAllowScrolling(true);
  });
});

// Fullpage

var myFullpage = new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  touchSensitivity: 5,
  normalScrollElements: '#orderingCodes',
  normalScrollElementTouchThreshold: 1,
  scrollOverflow: true,
  scrollingSpeed: 1500,
  anchors: ['led-lighting', 'simple-to-install', 'premium-finish', 'modular-configuration', 'sizing-options', 'contact'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Shelflyne Home', 'Simple to intall', 'Premium finish', 'Modular configuration', 'Sizing options', 'Talk to us'],
  onLeave: function(origin, destination, direction){
        var leavingSection = this;

        //after leaving section 1
        if(origin.index === 0){
          let video = document.getElementById('video-1');
          setTimeout(function() {
                video.load();
            }, 1500);
        }
        //after leaving section 2
        if(origin.index === 1){
          let video = document.getElementById('video-2');
            setTimeout(function() {
                video.load();
            }, 1500);
        }
        //after leaving section 3
        if(origin.index === 2){
          let video = document.getElementById('video-3');
            setTimeout(function() {
                video.load();
            }, 1500);
        }
        //after leaving section 4
        if(origin.index === 3){
          let video = document.getElementById('video-4');
            setTimeout(function() {
                video.load();
            }, 1500);
        }
        //after leaving section 5
        if(origin.index === 4){
          let video = document.getElementById('video-5');
            setTimeout(function() {
                video.load();
            }, 1500);
        }
      }
});

// Menu

var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('menu'),
  'padding': 320,
  'tolerance': 70,
  'side': 'right',
  'touch': false
});

document.querySelector('.menu').addEventListener('click', function(eve) {
  if (eve.target.nodeName === 'A') { slideout.close(); }
});

document.querySelector('.slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
  if(slideout.isOpen()){
    fullpage_api.setAllowScrolling(false);
    console.log('scroll false');
  } else {
    fullpage_api.setAllowScrolling(true);
    console.log('scroll true');
  }
});