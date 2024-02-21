import gsap from "gsap";

export const openTween = (containerRef: any) => {
  const contianer = containerRef.current;

  const tl = gsap.timeline({
    defaults: { duration: 0.2, ease: "power4.inOut" },
  });

  tl.fromTo(contianer, { opacity: 0.5, scale: 1.1 }, { opacity: 1, scale: 1 });
};
