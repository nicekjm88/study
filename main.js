import anime from 'animejs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalManager } from './src/modules/modalManagerModule';
import { animateCircle } from './src/modules/circleAnimation.js';

document.addEventListener('DOMContentLoaded', () => {

  // anime({
  //   targets: '.circle1',
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: 'easeInOutSine',
  //   duration: 1500,
  //   delay: function(el, i) { return i * 250 },
  //   direction: 'alternate',
  //   loop: true
  // });

  // anime({
  //   targets: '.circle2',
  //   strokeDashoffset: [0, anime.setDashoffset],
  //   easing: 'easeInOutSine',
  //   duration: 1500,
  //   delay: function(el, i) { return i * 250 },
  //   direction: 'alternate',
  //   loop: true
  // });

  animateCircle('.circle1', anime.setDashoffset, 0);
  animateCircle('.circle2', 0, anime.setDashoffset);

  new ModalManager();
});

