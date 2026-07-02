
const birthday = new Date("2026-07-24T00:00:00");

const message = `
Happy Birthday princess ❤️

Semoga di umurmu yang baru,
kamu selalu sehat ya,
bahagia,
dan semua impianmu tercapai.

Terima kasih sudah hadir di hidupku.

Aku sayang kamu hari ini,
besok,
dan seterusnya. ❤️
`;

const intro = document.getElementById("intro");
const loading = document.getElementById("loading");
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

const typing = document.getElementById("typing");

const hidden = document.querySelectorAll(".hidden");

window.onload = ()=>{

setTimeout(()=>{

loading.style.display="none";

},2500);

};

startBtn.onclick=()=>{

intro.style.display="none";

hidden.forEach(item=>{

item.classList.remove("hidden");

});

music.play().catch(()=>{});

startTyping();

};

let index=0;

function startTyping(){

typing.innerHTML="";

index=0;

type();

}

function type(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(type,35);

}

}

function countdown(){

const now=new Date().getTime();

const distance=birthday-now;

if(distance<=0){

document.getElementById("days").innerHTML="00";

document.getElementById("hours").innerHTML="00";

document.getElementById("minutes").innerHTML="00";

document.getElementById("seconds").innerHTML="00";

return;

}

document.getElementById("days").innerHTML=Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=Math.floor((distance%(1000*60))/1000);

}

setInterval(countdown,1000);

countdown();

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(18+Math.random()*22)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);

function createPetal(){

const petal=document.createElement("div");

petal.classList.add("petal");

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*4)+"s";

petal.style.fontSize=(16+Math.random()*18)+"px";

document.getElementById("petals").appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,600);

const slider=document.querySelector(".slider");

setInterval(()=>{

if(slider){

slider.scrollBy({

left:280,

behavior:"smooth"

});

if(slider.scrollLeft+slider.clientWidth>=slider.scrollWidth-10){

slider.scrollTo({

left:0,

behavior:"smooth"

});

}

}

},3000);

const blowBtn=document.getElementById("blowBtn");

if(blowBtn){

blowBtn.onclick=()=>{

document.getElementById("cakeEmoji").innerHTML="🎂";

alert("🎉 Happy Birthday Sayang ❤️");

};

}

const loveBtn=document.getElementById("loveBtn");

if(loveBtn){

loveBtn.onclick=()=>{

for(let i=0;i<60;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top=Math.random()*100+"vh";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.transition="all 2.5s ease";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-250px) scale(1.8)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},2600);

}

alert("❤️ I Love You Forever ❤️");

};

}

const introVideo=document.getElementById("introVideo");

if(introVideo){

introVideo.onended=()=>{

document.getElementById("startBtn").style.display="inline-block";

};

}

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1.5s";

document.body.style.opacity="1";

},300);

});

document.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});

setTimeout(()=>{

const loading=document.getElementById("loading");

if(loading){

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},1000);

}

},2500);

console.log("🎉 Premium Birthday Website Loaded ❤️");

setInterval(() => {
    window.scrollBy({
        top: 2,
        behavior: "smooth"
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}, 40);

const slider = document.querySelector(".slider");

setInterval(() => {
    if (!slider) return;

    slider.scrollLeft += 1;

    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
    }
}, 20);
