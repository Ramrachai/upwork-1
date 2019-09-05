var tween1 = new TimelineMax();
tween1
  .from(".text-1", 2, { opacity: 0 })
  .to(".text-1", 2, { opacity: 1 })
  .to(".text-1", 2, { opacity: 0 })
  .from(".text-2", 2, { opacity: 0 })
  .to(".text-2", 2, { opacity: 1 })
  .to(".text-2", 2, { opacity: 0 })
  .from(".text-3", 2, { opacity: 0 })
  .to(".text-3", 2, { opacity: 1 })
  .to(".text-3", 2, { opacity: 0 })
  .from(".text-4", 4, { opacity: 0 })
  .to(".text-4", 4, { opacity: 1 })
  .to(".text-4", 4, { opacity: 1 });

var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
  triggerElement: ".view-1",
  offset: 100,
  triggerHook: 0,
  duration: "350%"
})
  .setTween(tween1)
  .setPin(".view-1")
  .addTo(controller);

var tween2 = new TimelineMax();
tween2
  .from(".img-1", 2, { opacity: 0, x: "-150%" })
  .to(".img-1", 2, { opacity: 1, x: "0%" })
  .to(".img-1", 2, { opacity: 1, x: "0%" })
  .from(".img-2", 2, { opacity: 0 })
  .to(".img-2", 2, { opacity: 1 })
  .to(".img-2", 2, { opacity: 1 })
  .from(".img-3", 2, { opacity: 0 })
  .to(".img-3", 2, { opacity: 1 })
  .to(".img-3", 2, { opacity: 1 });

var controller = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: ".view-1",
  offset: 1700,
  triggerHook: 0,
  duration: "100%"
})
  .setTween(tween2)
  .addTo(controller);
