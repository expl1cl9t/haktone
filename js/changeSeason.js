let picture = $("#seasonImage");
$("li[class ^= 'b']").click((e) => {
    let s = $(e.target).attr("season");
    picture.css("width", "0");
    console.log(s);
    switch (s) {
        case "z":
            picture.css("width", "0");
            picture.animate({
                width: "+=906"
            }, 2000, () => { });
            picture.attr("src", "imgsrc/beautiful-scenery-of-the-summit-of-mount-everest-covered-with-snow-under-the-white-clouds.jpg");
            break;
        case "l":
            picture.css("width", "0");
            picture.animate({
                width: "+=906"
            }, 2000, () => { });
            picture.attr("src", "imgsrc/лето и арбалеты.jpg");
            break;
        case "o":
            picture.css("width", "0");
            picture.animate({
                width: "+=906"
            }, 2000, () => { });
            picture.attr("src", "imgsrc/beautiful-shot-of-mountains-under-a-cloudy-sky-at-sunset.jpg");
            break;
        case "v":
            picture.css("width", "0");
            picture.animate({
                width: "+=906"
            }, 2000, () => { });
            picture.attr("src", "imgsrc/aerial-photography-of-houses-on-green-field-viewing-mountain-under-white-and-gray-sky-during-daytime_400718-49.jpg");
            break;
        default:
            break;
    }
});



//смена z индекса
$(".by_order_menu_elem2").click(() => {
    console.log(1);
    if(Number($(".by_order_menu_elem2").css("z-index")) > Number($(".by_order_menu_elem1").css("z-index"))){
        return;
    }
    let el = Number($(".by_order_menu_elem2").css("z-index"));
    console.log(el);
    el += 1;
    $(".by_order_menu_elem2").css("z-index",el);
    $(this).css("background-color","white");
});
$(".by_order_menu_elem1").click(() => {
    if(Number($(".by_order_menu_elem2").css("z-index")) < Number($(".by_order_menu_elem1").css("z-index"))){
        return;
    }
    let el = Number($(".by_order_menu_elem1").css("z-index"));
    el += 1;
    $(".by_order_menu_elem1").css("z-index",el);
    $(this).css("background-color","white");
});
let images = ["imgsrc/natural-landscape-with-sunrise.jpg","imgsrc/tree-and-mountain-landscape_1048-9294.jpg","imgsrc/view-on-empty-icelandic-road-from-inside-car.jpg"];
let ind = 0;
setInterval(() => {
    $("img[class='border']").css("opacity","0");
    $("img[class='border']").animate({
        opacity: "+=1"
    },1000,() => {$("img[class='border']").attr("src",`${images[ind]}`)});
    ind++;
    if(ind == 2){
        ind = 0;
    }
}, 5000);