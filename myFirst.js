let photos = ["image/1.png","image/3.png","image/6.png"]

let images = document.querySelector("img");

let count = 0;

function next() {
    count++;

    if(count >= photos.length) {
        count = 0;
        images.src = photos[count];
    } else {
        images.src = photos[count];
    }  
}

function prev() {
    count--;

    if(count < 0) {
        count = photos.length - 1 ;
        images.src = photos[count];
    } else {
        images.src = photos[count];
    }  

}       