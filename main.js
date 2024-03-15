import anime from 'animejs'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalManager } from './src/modules/modalManagerModule';
import { animateCircle } from './src/modules/circleAnimation.js';
import gsap from 'gsap';
import { Flip } from "gsap/Flip";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(Flip, ScrollTrigger);

const targets = document.querySelectorAll('.all-access-pass__background, .all-access-pass__background2');

const initScrollTrigger = (element) => {
  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "+=900",
    onEnter: () => {
      element.classList.add('inactive');
      element.classList.remove('deactive');
    },
    onEnterBack: () => {
      element.classList.add('inactive');
      element.classList.remove('deactive');
    },
    onLeave: () => {
      element.classList.remove('inactive');
      element.classList.add('deactive');
    },
    onLeaveBack: () => {
      element.classList.remove('inactive');
      element.classList.add('deactive');
    },
    markers: true
  });
};

// 모든 타겟 요소에 대해 ScrollTrigger 초기화
targets.forEach(initScrollTrigger);

const plusTarget = document.querySelector('.all-access-pass__background .all-access-pass__item button span');
// ScrollTrigger 인스턴스 생성
ScrollTrigger.create({
  trigger: plusTarget,
  start: "top center", // 트리거가 뷰포트 상단 중앙에 도달했을 때 시작
  end: "+=900",
  onEnter: () => gsap.to(plusTarget, { scale: 1, duration: 0.25, delay: 0.75 }),
  onEnterBack: () => gsap.to(plusTarget, { scale: 1, duration: 0.25, delay: 0.75 }),
  onLeave: () => gsap.to(plusTarget, { scale: 0, duration: 0.25 }),
  onLeaveBack: () => gsap.to(plusTarget, { scale: 0, duration: 0.25 }),
  // markers: true // 개발 중 확인 용도, 개발 완료 후 제거
});

animateCircle('.circle1', anime.setDashoffset, 0);
animateCircle('.circle2', 0, anime.setDashoffset);

new ModalManager();

gsap.to('.fade-in-title', {
  opacity: 1, // 최종 투명도 1로 설정
  ease: 'none', // 애니메이션 가속도 조절 없음
  scrollTrigger: {
    trigger: '.fade-in-title', // 이 애니메이션이 시작되는 요소
    start: '-=700', // 뷰포트 상단이 트리거 요소 중앙에 도달했을 때 시작
    end: '+=350', // 뷰포트 하단이 트리거 요소 상단에 도달했을 때 종료
    scrub: true, // 스크롤 위치에 따라 애니메이션 진행
    // markers: true, // 디버깅을 위한 시작/끝 마커 활성화
  }
});

gsap.to('.fullpage-image img', {
  scale: .9,
  ease: "none", // 애니메이션 가속도 조절 없음
  // transformOrigin: 'right center', // 오른쪽 가운데를 변환의 기준점으로 설정
  scrollTrigger: {
    trigger: ".fullpage-image",
    start: "-=600", // 스크롤 시작 지점
    end: "+=300", // 스크롤 끝 지점
    scrub: true, // 스크롤 동작에 따라 애니메이션 진행
    // pin: true, // 스크롤 동안 섹션 고정
    // markers: true, // 디버깅을 위한 시작/끝 마커 활성화
  }
});



let container = document.querySelector('.scroll-container');

// 전체 컨테이너의 너비를 계산합니다.
let totalWidth = 0;
document.querySelectorAll(".panel").forEach(panel => {
  totalWidth += panel.offsetWidth;
});
container.style.width = `${totalWidth}px`;

// GSAP & ScrollTrigger로 수평 스크롤 애니메이션 생성
gsap.to(container, {
  x: () => -(totalWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    end: () => `+=${totalWidth}`,
    invalidateOnRefresh: true // 화면 크기 변경 시 재계산
  }
});

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item, index) => {
  const header = item.querySelector('.accordion-header');
  const button = header.querySelector('.accordion-button');
  const collapseId = button.getAttribute('data-bs-target');
  const collapseElement = document.querySelector(collapseId);

  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    onEnter: () => {
      let bsCollapse = new bootstrap.Collapse(collapseElement, {
        toggle: false
      });
      bsCollapse.show();
    },
    onLeaveBack: () => {
      let bsCollapse = new bootstrap.Collapse(collapseElement, {
        toggle: false
      });
      bsCollapse.hide();
    },
    // markers: true // 개발 중 위치 확인용
  });
});


