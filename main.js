const ozButton = document.querySelector('.oz-button');
const barkPlayer = new Audio();
barkPlayer.preload = 'none';

ozButton.addEventListener('click', () => {
  const barkNumber = Math.floor(Math.random() * 5) + 1;
  barkPlayer.pause();
  barkPlayer.src = `assets/audio/bark${barkNumber}.wav`;
  barkPlayer.play().catch(() => {
    // Leave the button available to retry if playback is interrupted.
  });
});
