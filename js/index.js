import gsap from "gsap";
import { SteppedEase } from "gsap/gsap-core";
import { TextPlugin } from "gsap/TextPlugin";

const inputs = document.querySelectorAll("input");

const duration = 1.5;
gsap.registerPlugin(TextPlugin);

gsap.set("#logo_bg", {
    fill: "none",
    stroke: "#3B82F6",
    strokeWidth: 3,
});

gsap.set("#logo_name", {
    fill: "#3B82F6",
});

gsap.fromTo(
    "#logo",
    {
        autoAlpha: 0,
        scale: 1.5,
        transformOrigin: "center center",
    },
    {
        duration: duration,
        autoAlpha: 1,
        scale: 0.9,
        transformOrigin: "center center",
    }
);

gsap.fromTo(
    ["#Password", "#Email"],
    {
        x: "-=200",
        autoAlpha: 0,
    },
    {
        duration: duration,
        x: "+=200",
        autoAlpha: 1,
    }
);

gsap.fromTo(
    ["#fyp", "#login", "#signup"],
    {
        x: "+=200",
        autoAlpha: 0,
    },
    {
        duration: duration,
        x: "-=200",
        autoAlpha: 1,
    }
);

const logoBorderTl = gsap.timeline();

logoBorderTl.fromTo(
    "#logo_bg",
    {
        strokeDasharray: 250,
        strokeDashoffset: 250,
    },
    {
        duration: duration,
        strokeDashoffset: 0,
        onComplete() {
            gsap.set("#logo_bg", {
                fill: "#3B82F6",
                stroke: "none",
            });
            gsap.set("#logo_name", {
                fill: "#F3F4F6",
            });
            gsap.to("#logo", {
                duration: duration,
                scale: 1,
                transformOrigin: "center center",
            });
        },
    }
);
