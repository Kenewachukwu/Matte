


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        views: [{
            namespace: 'home-section',
            beforeEnter({ next }) {
    
            // load your script
            let script = document.createElement('script');
            script.src = './script.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
            console.log(done);
            next.container.appendChild(script);
            }, 
        }],

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

// Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
//     $(container).find('script').each(function (i, script) {
//         var $script = $(script);
//         $.ajax({
//             url: $script.attr('src'),
//             cache: true,
//             dataType: 'script',
//             success: function () {
//                 $script.trigger('load');
//             }
//         });
//     });
// });


// function load_js()
//    {
//       var head= document.getElementsByTagName('head')[0];
//       var script= document.createElement('script');
//       script.src= 'script.js';
//       head.appendChild(script);
//    }
//    load_js();
