document.addEventListener('mousemove', e => {
    document.documentElement.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -.005}deg`);
    document.documentElement.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * .01}deg`);
});
