import anime from 'animejs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalManager } from './src/modules/modalManagerModule';
import { animateCircle } from './src/modules/circleAnimation.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

  animateCircle('.circle1', anime.setDashoffset, 0);
  animateCircle('.circle2', 0, anime.setDashoffset);

  new ModalManager();

  gsap.to('.fullpage-image img', {
    scale: .75, // 이미지를 2배로 확대
    ease: "none", // 애니메이션 가속도 조절 없음
    // transformOrigin: 'right center', // 오른쪽 가운데를 변환의 기준점으로 설정
    scrollTrigger: {
      trigger: ".fullpage-image",
      start: "top top", // 스크롤 시작 지점
      end: "bottom top", // 스크롤 끝 지점
      scrub: true, // 스크롤 동작에 따라 애니메이션 진행
      pin: true, // 스크롤 동안 섹션 고정
      markers: true, // 디버깅을 위한 시작/끝 마커 활성화
    }
  });

  gsap.to('.fade-in-title', {
    opacity: 1, // 최종 투명도 1로 설정
    ease: 'none', // 애니메이션 가속도 조절 없음
    scrollTrigger: {
      trigger: '.fade-in-title', // 이 애니메이션이 시작되는 요소
      start: '-=500', // 뷰포트 상단이 트리거 요소 중앙에 도달했을 때 시작
      end: '+=200', // 뷰포트 하단이 트리거 요소 상단에 도달했을 때 종료
      scrub: true, // 스크롤 위치에 따라 애니메이션 진행
      // markers: true, // 디버깅을 위한 시작/끝 마커 활성화
    }
  });

});

