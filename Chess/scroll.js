const navigationHeight = document.querySelector('.topnav ul').offsetHeight;
console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 9 + "px");
