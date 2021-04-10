import gsap from "gsap";

const duration = 1.5;

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
    },
    { duration: duration, autoAlpha: 1, scale: 1 }
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
    }
);
