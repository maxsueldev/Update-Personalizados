let count = 1;

document.querySelector('#radio1').checked = true;

setInterval(function() {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if(count > 3) count = 1;
    
    document.querySelector("#radio"+count).checked = true;
}