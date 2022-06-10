import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

CustomEase.create(
    "easeBounce",
    "M0,0 C0.46,0 0.28,1.044 0.486,1.232 0.69,1.418 0.674,0.394 1,1 "
);