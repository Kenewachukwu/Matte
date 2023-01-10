


//Mouse Cursor Interaction
// const cursor =document.querySelector('.cursor');
const loader = document.querySelector('.loader');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// document.addEventListener('mousemove', e=>{
//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
//     // loader.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// document.addEventListener('click', () =>{
//     cursor.classList.add("expand");

//     setTimeout(()=>{
//         cursor.classList.remove('expand')
//     }, 500)
// })

//Preloader
let progressBar = document.querySelector('.bloor');
let numIndicator = document.getElementById('numIndicator');

let bloorwidth = progressBar.style.width;


console.log(bloorwidth);

const updateCounter = () => {
    let c = +numIndicator.innerText;

    if (c < 100) {
        numIndicator.innerText = `${c + 4}`;
        setTimeout(updateCounter, 100)
    }
};

updateCounter();


let hoverDistort1 = new hoverEffect({
    parent: document.querySelector('.wrapper1'),
    intensity: 0.5,
    image1: './images/3.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});

let hoverDistort2 = new hoverEffect({
    parent: document.querySelector('.wrapper2'),
    intensity: 0.5,
    image1: './images/4.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});

let hoverDistort3 = new hoverEffect({
    parent: document.querySelector('.wrapper3'),
    intensity: 0.5,
    image1: './images/5.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});

let hoverDistort4 = new hoverEffect({
    parent: document.querySelector('.wrapper4'),
    intensity: 0.5,
    image1: './images/6.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});

let hoverDistort5 = new hoverEffect({
    parent: document.querySelector('.project1'),
    intensity: 0.5,
    image1: './images/3.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});

let hoverDistort6 = new hoverEffect({
    parent: document.querySelector('.project2'),
    intensity: 0.5,
    image1: './images/4.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});

let hoverDistort7 = new hoverEffect({
    parent: document.querySelector('.project3'),
    intensity: 0.5,
    image1: './images/5.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});

let hoverDistort8 = new hoverEffect({
    parent: document.querySelector('.project4'),
    intensity: 0.5,
    image1: './images/6.jpg',
    image2: './images/2.jpg',
    displacementImage: './images/14.jpg'
});


// Wrap every letter in a span
let textWrapper = document.querySelector('.summary');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

$(document).ready(function () {

    $('.wrapper').hover(
        function () {
            anime.timeline({ loop: false })
                .add({
                    targets: '.summary .letter',
                    translateX: [80, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1400,
                    delay: (el, i) => 100 + 40 * i
                })
        },

        function () {
            anime.timeline({ loop: false })
                .add({
                    targets: '.summary .letter',
                    translateX: [0, -80],
                    opacity: [1, 0],
                    easing: "easeInExpo",
                    duration: 800,
                    delay: (el, i) => 40 * i
                });
        }
    );

});


// let $cursor = $(".cursor1"),
//         $overlay = $(".project-overlay");

//       function moveCircle(e) {
//         TweenLite.to($cursor, 0.5, {
//           css: {
//             left: e.pageX,
//             top: e.pageY
//           },
//           delay: 0.03
//         });
//       }

//       $(".p-1").hover(function() {
//         $(".cursor1").css({ "background-image": "url(./images/1.jpg)" });
//       });
//       $(".p-2").hover(function() {
//         $(".cursor1").css({ "background-image": "url(./images/2.jpg)" });
//       });
//       $(".p-3").hover(function() {
//         $(".cursor1").css({ "background-image": "url(./images/3.jpg)" });
//       });
//       $(".p-4").hover(function() {
//         $(".cursor1").css({ "background-image": "url(./images/4.jpg)" });
//       });

//       let flag = false;
//       $($overlay).mousemove(function() {
//         flag = true;
//         TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
//         $($overlay).on("mousemove", moveCircle);
//       });

//       $($overlay).mouseout(function() {
//         flag = false;
//         TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
//       });




// function goToAbout(){
//     const aboutButton = document.querySelector(".page-load");
//     aboutButton.addEventListener("onclick",newPage())

//     function newPage(){
//         window.location = ('/index.html') 
//         window.location.reload()
//     }
// }



