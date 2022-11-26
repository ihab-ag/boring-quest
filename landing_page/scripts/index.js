// import rellax library
const rellax = new Rellax('.rellax');

window.addEventListener('scroll', function (e) {

    const title = document.querySelectorAll('.title')

    // title animation
    let index = 0, length = title.length
    for (index; index < length; index++) {
        const pos = window.pageYOffset * title[index].dataset.rate

        title[index].style.transform = 'translate3d(' + pos + 'px, 0px,  0px)'
    }
})