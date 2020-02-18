document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item' });
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        if ($('.justified-gallery > p > .gallery-item').length) {
            $('.justified-gallery > p > .gallery-item').unwrap();
        }
        $('.justified-gallery').justifiedGallery();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item', loop: true, escKey: true, keyPress: true});
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        $('.justified-gallery').justifiedGallery({rowHeight:400, margins:4});
    }
});