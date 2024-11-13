const meteorContainer = document.querySelector('.meteors-background');

for (let i = 0; i < 20; i++) {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');
  meteor.style.left = `${Math.random() * 100}%`;
  meteor.style.animationDelay = `${Math.random() * 2}s`;
  meteor.style.animationDuration = `${1.5 + Math.random()}s`;
  meteorContainer.appendChild(meteor);
}