const panels = document.querySelectorAll('.panel'); 

panels.forEach(panel => { 
    panel.addEventListener('click', () => { 
        const paneln = panel.classList.contains('active'); 
        removeActiveClasses();
        stopAllAudio();

        if (!paneln) { 
            panel.classList.add('active'); 
            const audio = panel.querySelector('audio'); 
            audio.play();
        }
    });
});

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active')); 
}

function stopAllAudio() {+
    panels.forEach(panel => {
        const audio = panel.querySelector('audio'); 
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}
