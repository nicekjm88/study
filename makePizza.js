import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.first-section',
      start: 'top top',
      end: '+=100%',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // markers: true,
    }
  })
    .from(".section_1_01", { y: -100, x: -150, ease: "power3.inOut", duration: 4 })
    .from(".section_1_02", { y: -150, x: -250, ease: "power3.inOut", duration: 4 }, '-=4')
    .from(".section_1_03", { y: -80, x: -100, ease: "power3.inOut", duration: 4 }, '-=4')
    .from(".section_1_04", { y: -100, x: -150, ease: "power3.inOut", duration: 4 }, '-=4')
    .from(".section_1_05", { y: -80, x: -200, ease: "power3.inOut", duration: 4 }, '-=4')
    .from(".section_1_06", { y: -100, x: -350, ease: "power3.inOut", duration: 4 }, '-=4')
    .from(".section_1_07", { y: -50, x: -150, ease: "power3.inOut", duration: 4 }, '-=4')
    .from(".section_1_08", { y: 50, x: -350, ease: "power3.inOut", duration: 4 }, '-=4')
    .from(".section_1_09", { y: 100, x: -200, ease: "power3.inOut", duration: 4 }, '-=4');

  gsap.timeline({
    scrollTrigger: {
      trigger: ".second-section",
      start: "top top",
      end: "bottom",
      scrub: true,
      pin: true,
      // markers: true,
    }
  })
    .from(".top .image-container", {
      height: 0,
      duration: 4
    })

  const sections = ['.section_3_01', '.section_3_02', '.section_3_03', '.section_3_04', '.section_3_05', '.section_3_06'];

  sections.forEach((section, index) => {
    gsap.to(section, {
      y: index === 3 ? 0 : index < 3 ? -50 * (3 - index) : 50 * (index - 3),
      duration: 4,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.third-section',
        start: 'top top',
        end: '+=400',
        scrub: true,
        // markers: true,
      }
    });
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".forth-section",
      start: "top -=200",
      end: "bottom",
      scrub: true,
      pin: true,
      // markers: true,
    }
  })
    .to('.section_4_01', { duration: 4, autoAlpha: 0 })
    .from('.section_4_02', { duration: 4, autoAlpha: 0 }, '-=4')
    .from('.section_4_03', { duration: 4, autoAlpha: 0 })
    .from('.section_4_04', { duration: 4, autoAlpha: 0 });
});