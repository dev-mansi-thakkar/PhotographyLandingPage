window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").classList.add("bg-light", "scrolled");
        document.querySelector(".navbar-brand").classList.remove("text-white");
        document.querySelector(".navbar-brand").classList.add("text-black");
        var items = document.querySelectorAll(".nav-link");
        items.forEach(item => {
            item.classList.remove("text-white");
            item.classList.add("text-black", "scrolled");
        });
    } else {
        document.querySelector(".navbar").classList.remove("bg-light", "scrolled");
        var items = document.querySelectorAll(".nav-link");
        items.forEach(item => {
            item.classList.remove("text-white");
            item.classList.add("text-white", "scrolled");
        });
        document.querySelector(".navbar-brand").classList.add("text-white");
    }
}