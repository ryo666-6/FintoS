// const app=()=>{const e=document.querySelector(".song"),t=document.querySelector(".play"),o=document.querySelector(".moving-outline circle"),r=document.querySelector(".vid-container video"),s=document.querySelectorAll(".sound-picker button"),c=document.querySelector(".time-display"),n=document.querySelectorAll(".time-select button"),a=o.getTotalLength();console.log(a);let l=600;o.style.strokeDasharray=a,o.style.strokeDashoffset=a,s.forEach(t=>{t.addEventListener("click",function(){e.src=this.getAttribute("data-sound"),r.src=this.getAttribute("data-video"),u(e)})}),t.addEventListener("click",()=>{u(e)}),n.forEach(e=>{e.addEventListener("click",function(){l=this.getAttribute("data-time"),c.textContent=`${Math.floor(l/60)}:${Math.floor(l%60)}`})});const u=e=>{e.paused?(e.play(),r.play(),t.src="./svg/pause.svg"):(e.pause(),r.pause(),t.src="./svg/play.svg")};e.ontimeupdate=(()=>{let s=e.currentTime,n=l-s,u=Math.floor(n%60),i=Math.floor(n/60),d=a-s/l*a;o.style.strokeDashoffset=d,c.textContent=`${i}:${u}`,s>=l&&(t.pause(),r.pause(),e.currentTime=0,t.src="./svg/play.svg")})};app();

const app = () => {
  const e = document.querySelector(".song"),
    t = document.querySelector(".play"),
    o = document.querySelector(".moving-outline circle"),
    r = document.querySelector(".vid-container video"),
    s = document.querySelectorAll(".sound-picker button"),
    c = document.querySelector(".time-display"),
    n = document.querySelectorAll(".time-select button"),
    a = o.getTotalLength();
  let l = 600;
  (o.style.strokeDasharray = a),
    (o.style.strokeDashoffset = a),
    s.forEach((t) => {
      t.addEventListener("click", function () {
        (e.src = this.getAttribute("data-sound")),
          (r.src = this.getAttribute("data-video")),
          u(e);
      });
    }),
    t.addEventListener("click", () => {
      u(e);
    }),
    n.forEach((e) => {
      e.addEventListener("click", function () {
        (l = this.getAttribute("data-time")),
          (c.textContent = `${Math.floor(l / 60)}:${Math.floor(l % 60)}`);
      });
    });
  const u = (e) => {
    e.paused
      ? (e.play(), r.play(), (t.src = "./svg/pause.svg"))
      : (e.pause(), r.pause(), (t.src = "./svg/play.svg"));
  };
  e.ontimeupdate = () => {
    let s = e.currentTime,
      n = l - s,
      u = Math.floor(n % 60),
      i = Math.floor(n / 60),
      d = a - (s / l) * a;
    (o.style.strokeDashoffset = d),
      (c.textContent = `${i}:${u}`),
      s >= l &&
        (t.pause(), r.pause(), (e.currentTime = 0), (t.src = "./svg/play.svg"));
  };
  const nMusic = document.querySelector(".nowMusic");
  const rain = document.querySelector(".rain");
  const beach = document.querySelector(".beach");
  const sauna = document.querySelector(".sauna");

  // rain.addEventListener("click", () => {
  //   nMusic.innerHTML = "Rain sound.";
  // });

  // beach.addEventListener("click", () => {
  //   nMusic.innerHTML = "Ocean waves.";
  // });

  // sauna.addEventListener("click", () => {
  //   nMusic.innerHTML = "sauna.";
  // });
};
app();
