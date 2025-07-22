window.addEventListener('scroll', function() {
    const header = this.document.getElementById('main-header');
    if(this.window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});