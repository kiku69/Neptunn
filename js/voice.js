// Voice button functionality
document.addEventListener('DOMContentLoaded', function() {
  // Store currently playing audio
  let currentAudio = null;
  let currentButton = null;

  // Get all voice buttons
  const voiceButtons = document.querySelectorAll('.voice-btn');

  voiceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const audioPath = this.getAttribute('data-audio');
      const voiceText = this.querySelector('.voice-text');

      // If there's already audio playing
      if (currentAudio && !currentAudio.paused) {
        // If clicking the same button, pause it
        if (currentButton === this) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          this.classList.remove('playing');
          voiceText.textContent = 'Play Voice';
          currentAudio = null;
          currentButton = null;
          return;
        } else {
          // Stop the current audio and reset previous button
          currentAudio.pause();
          currentAudio.currentTime = 0;
          currentButton.classList.remove('playing');
          currentButton.querySelector('.voice-text').textContent = 'Play Voice';
        }
      }

      // Create new audio element
      const audio = new Audio(audioPath);
      
      // Add playing class
      this.classList.add('playing');
      voiceText.textContent = 'Playing...';

      // Play audio
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        this.classList.remove('playing');
        voiceText.textContent = 'Play Voice';
        alert('Could not play audio. Please check if the audio file exists at: ' + audioPath);
      });

      // Store current audio and button
      currentAudio = audio;
      currentButton = this;

      // When audio ends
      audio.addEventListener('ended', () => {
        this.classList.remove('playing');
        voiceText.textContent = 'Play Voice';
        currentAudio = null;
        currentButton = null;
      });

      // Handle audio errors
      audio.addEventListener('error', () => {
        this.classList.remove('playing');
        voiceText.textContent = 'Play Voice';
        currentAudio = null;
        currentButton = null;
        console.error('Audio file not found:', audioPath);
      });
    });
  });

  // Optional: Stop audio when navigating away
  window.addEventListener('beforeunload', () => {
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  });
});