import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import CustomEase from 'gsap/dist/CustomEase';

// simple function to initialize gsap
function gsapInit()  {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CustomEase);
    gsap.config({nullTargetWarn: false});
}

export default gsapInit;