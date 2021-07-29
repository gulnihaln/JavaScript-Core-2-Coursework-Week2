function listOfColours(colours) {
    const content = document.getElementById('content');
    const selectEl = document.createElement('select');
    const pEl = document.createElement('p');
    content.appendChild(selectEl);
    content.appendChild(pEl);

    colours.forEach(colour => {
      const optionEl = document.createElement('option');
      selectEl.appendChild(optionEl);
      optionEl.innerText = colour; 
    });
    
    selectEl.addEventListener('change', () => {
      pEl.style.color = selectEl.value;
      pEl.innerText = `You have selected: ${selectEl.value}`
    });
    
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
