import "./style.css";
import gsap from "gsap";

gsap.from(".logo, .vite", { duration: 1.5, x: 100 });

const myObject = { rotation: 0 };
gsap.to(myObject, {
  duration: 2,
  rotation: 360,
  onUpdate: function () {
    console.log(myObject.rotation);
  },
});
