const turnOnOff = document.getElementById('on-off');
const colorSelector = document.getElementById('color-selector');

turnOnOff.addEventListener('click', function() {
    document.getElementById('globe-container').classList.toggle('active');
});

colorSelector.addEventListener('change', function() {
    const newColor = colorSelector.value;
    document.documentElement.style.setProperty('--global-color', newColor);
});
