document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = musicToggle.querySelector('.play-icon');
    const pauseIcon = musicToggle.querySelector('.pause-icon');

    // Check if music was playing before (using localStorage)
    const musicState = localStorage.getItem('musicPlaying');
    if (musicState === 'true') {
        backgroundMusic.play()
            .then(() => {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            })
            .catch(error => console.log('Playback failed:', error));
    }

    musicToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play()
                .then(() => {
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                    localStorage.setItem('musicPlaying', 'true');
                })
                .catch(error => console.log('Playback failed:', error));
        } else {
            backgroundMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            localStorage.setItem('musicPlaying', 'false');
        }
    });

    // Handle page visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            backgroundMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else if (localStorage.getItem('musicPlaying') === 'true') {
            backgroundMusic.play()
                .then(() => {
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                })
                .catch(error => console.log('Playback failed:', error));
        }
    });
});