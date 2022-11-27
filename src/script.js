const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () =>{
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
    return;
};

sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();

//end
// let contener = document.querySelector('.contener');
// for (let i = 1; i <= 100; i++) {
//     let dot = document.createElement('div');
//     dot.classList.add('element');
//     contener.appendChild(dot);
// }

// let dotAll = document.querySelectorAll('.element');
// let animation = anime.timeline({
//     targets: dotAll,
//     easing: 'easeInOutExpo',
//     loop: true,
//     delay: anime.stagger(100,{grid:[10,10], from: 'center'})

// })
// animation
// .add({
//     rotateZ: 180,
//     tranlateY: anime.stagger(-20,{grid:[10,10], from: 'center',axis: 'y'}),
//     tranlateX: anime.stagger(-20,{grid:[10,10], from: 'center',axis: 'x'}),
//     opacity: 1,
// })
// .add({
//     borderRadius: 50,
// })
// .add({
//     scale: 0.2,
//     opacity: 0.2,
// })
// animation
// .add({
//     rotateZ: 180,
//     tranlateY: anime.stagger(0,{grid:[10,10], from: 'center',axis: 'y'}),
//     tranlateX: anime.stagger(0,{grid:[10,10], from: 'center',axis: 'x'}),
//     opacity: 1,
// })
// .add({
//     scale: 1,
//     borderRadius: 0,
// })
// .add({
//     rotateZ: -90,
// })