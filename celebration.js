function createCelebrationElement() {
    const elements = ['❤️', '🎉', '✨', '🎈', '🎊'];
    const element = document.createElement('div');
    element.className = 'celebration-element';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    document.querySelector('.celebration-container').appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 6000);
}

setInterval(createCelebrationElement, 300);
