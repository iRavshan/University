GLightbox({
    'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoplayVideos': true,
});

//====== counter up 
var cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: " ",
});
cu.start();