

// $(document).ready(function () {
//     $(".by_order_menu_elem2").mouseenter(() => {
//         console.log(1);
//         if (Number($(".by_order_menu_elem2").css("z-index")) > Number($(".by_order_menu_elem1").css("z-index"))) {
//             return;
//         }
//         let el = Number($(".by_order_menu_elem2").css("z-index"));
//         console.log(el);
//         el += 1;
//         $(".by_order_menu_elem2").css("z-index", el);
//         $(this).css("background-color", "white");
//     });
//
//     $(".by_order_menu_elem1").mouseenter(() => {
//         if (Number($(".by_order_menu_elem2").css("z-index")) < Number($(".by_order_menu_elem1").css("z-index"))) {
//             return;
//         }
//         let el = Number($(".by_order_menu_elem1").css("z-index"));
//         el += 1;
//         $(".by_order_menu_elem1").css("z-index", el);
//         $(this).css("background-color", "white");
//     });
// });

$(document).ready(function () {
    $(".by_order_menu_elem2").mouseenter(function() {
        if (Number($(this).css("z-index")) > Number($(".by_order_menu_elem1").css("z-index"))) {
            return;
        }
        $(this).css({ "z-index": "+=1", backgroundColor: "white" }).animate({ opacity: 1 }, "slow");
        $(".by_order_menu_elem1").animate({ opacity: 0.7 }, "slow");
    });

    $(".by_order_menu_elem1").mouseenter(function() {
        if (Number($(this).css("z-index")) < Number($(".by_order_menu_elem2").css("z-index"))) {
            return;
        }
        $(this).css({ "z-index": "+=1", backgroundColor: "white" }).animate({ opacity: 1 }, "slow");
        $(".by_order_menu_elem2").animate({ opacity: 0.7 }, "slow");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// let images = ["imgsrc/natural-landscape-with-sunrise.jpg","imgsrc/tree-and-mountain-landscape_1048-9294.jpg","imgsrc/view-on-empty-icelandic-road-from-inside-car.jpg"];
// let ind = 0;
//
// function changeImage() {
//     $("img[class='border']").attr("src",`${images[ind]}`);
//     $("img[class='border']").animate({ opacity: 1 }, 2000, function() {
//
//         setTimeout(changeImage, 1000);
//     });
//
//     ind++;
//     if (ind >= images.length) {
//         ind = 0;
//     }
// }
//
// changeImage();


let images = ["imgsrc/natural-landscape-with-sunrise.jpg","imgsrc/tree-and-mountain-landscape_1048-9294.jpg","imgsrc/view-on-empty-icelandic-road-from-inside-car.jpg"];
let ind = 0;

function changeImage() {
$("img[class='border']").fadeOut(1000, function() {
$(this).attr("src", images[ind]);
$(this).fadeIn(1000);
});
ind++;
if (ind >= images.length) {
    ind = 0;
}

setTimeout(changeImage, 3000);
}

changeImage();


const infoButton = document.getElementById('infoButton');
const amazingNearPhoto = document.querySelector('.blur');

infoButton.addEventListener('mouseover', () => {
    amazingNearPhoto.classList.add('blur-effect');
});

infoButton.addEventListener('mouseout', () => {
    amazingNearPhoto.classList.remove('blur-effect');
});
