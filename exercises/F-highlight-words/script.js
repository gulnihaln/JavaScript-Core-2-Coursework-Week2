function highlightWords(paragraph, colours) {
  const content = document.getElementById('content');
  const pEl = document.createElement('p');
  const selectEl = document.createElement('select');

  content.appendChild(pEl);
  content.appendChild(selectEl);

  colours.forEach( elem => {
    const optionEl = document.createElement('option');
    selectEl.appendChild(optionEl);
    optionEl.value =elem;
    optionEl.innerText = elem;

  });
  const splitParagraph = paragraph.split(' ');
  splitParagraph.forEach( word => {
    const spanEl = document.createElement('span');
    pEl.appendChild(spanEl);
    spanEl.innerText = word + " ";

    spanEl.addEventListener('click', () =>{
      if(selectEl.value === 'none'){
        spanEl.style.backgroundColor = 'none';
      } else if (spanEl.style.backgroundColor === selectEl.value){
        spanEl.removeAttribute('style');
      }else {
        spanEl.style.backgroundColor = selectEl.value;
      }
    })

  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
