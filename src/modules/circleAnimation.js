// 함수추상화 방식
import anime from 'animejs';

export function animateCircle(targets, startOffset, endOffset) {
  anime({
    targets: targets,
    strokeDashoffset: [startOffset, endOffset],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}
