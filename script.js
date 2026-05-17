// Fade animation for gallery

const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold:0.1
});

photos.forEach((photo) => {

    photo.style.opacity = "0";
    photo.style.transform = "translateY(40px)";
    photo.style.transition = "all 0.9s ease";

    observer.observe(photo);

});