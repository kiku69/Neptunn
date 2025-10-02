const pinData = [
  {
    title: "Capital City",
    description: "The stronghold of the Meduars.",
    top: "8%",
    left: "23%"
  },
  {
    title: "Hidden Crystal",
    description: "A hidden source of immense power.",
    top: "8%",
    left: "81%"
  },
  {
    title: "Charging Point",
    description: "A power node under protection.",
    top: "58%",
    left: "43%"
  },
  {
    title: "2nd Largest City",
    description: "Known for its ancient archives.",
    top: "80%",
    left: "68%"
  },
  {
    title: "Occupied City",
    description: "Currently held by the Thaloors.",
    top: "91%",
    left: "12%"
  },
  {
    title: "Fallen city",
    top: "61%",
    left: "89%"
  }
];

const pinsWrapper = document.getElementById('pins-wrapper');
const infoBox = document.getElementById('infoBox');
const infoTitle = document.getElementById('infoTitle');
const infoDesc = document.getElementById('infoDesc');

pinData.forEach(pin => {
  const pinEl = document.createElement('div');
  pinEl.classList.add('pin');
  pinEl.style.top = pin.top;
  pinEl.style.left = pin.left;
  pinEl.dataset.title = pin.title;
  pinEl.dataset.desc = pin.description;
 
  pinEl.addEventListener('mouseenter', () => {
    infoTitle.textContent = pin.title;
    infoDesc.textContent = pin.description;
    const mapContainer = document.querySelector('.map-container');
    const pinRect = pinEl.getBoundingClientRect();
    const containerRect = mapContainer.getBoundingClientRect();
    const left = pinRect.left - containerRect.left + pinRect.width + 8;
    const top = pinRect.top - containerRect.top - 10;
    infoBox.style.left = `${left}px`;
    infoBox.style.top = `${top}px`;
    infoBox.classList.remove('hidden');
  });
  pinEl.addEventListener('mouseleave', () => {
    infoBox.classList.add('hidden');
  });
  pinsWrapper.appendChild(pinEl);
});