// PART 1
const jumbotronSec = document.querySelector('.jumbotron'); // getElementsByClassName is not working here
const donateBikeBtn =document.querySelector('.btn.btn-primary.btn-lrg'); //and here
const volunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg'); // and here

//when blue button's clicked
const blueBtn = document.getElementById('blueBtn');
blueBtn.addEventListener('click', ()=>{
  jumbotronSec.style.backgroundColor = '#588fbd';
  donateBikeBtn.style.backgroundColor ='#ffa500';
  volunteerBtn.style.backgroundColor = 'black';
  volunteerBtn.style.color = 'white';
});

//when orange button's clicked
const orangeBtn = document.getElementById('orangeBtn');
orangeBtn.addEventListener('click', ()=>{
  jumbotronSec.style.backgroundColor = '#f0ad4e';
  donateBikeBtn.style.backgroundColor ='#5751fd';
  volunteerBtn.style.backgroundColor = '#31b0d5';
  volunteerBtn.style.color = 'white';
});

//when green button's clicked
const greenBtn = document.getElementById('greenBtn');
greenBtn.addEventListener('click', ()=>{
  jumbotronSec.style.backgroundColor = '#87ca8a';
  donateBikeBtn.style.backgroundColor ='black';
  volunteerBtn.style.backgroundColor = 'white';
  volunteerBtn.style.color = 'black';
});

// PART 2

const submitBtnFormEl = document.querySelector('form button');
const emailFormEl = document.getElementById('exampleInputEmail1');
const nameFormEl = document.getElementById('example-text-input');
const textFormEl = document.getElementById('exampleTextarea');

submitBtnFormEl.addEventListener('click', (e)=> {

  e.preventDefault();
  if(emailFormEl.value.length > 0 && emailFormEl.value.includes('@')){
    emailFormEl.style.backgroundColor = 'white';
  }else {
    emailFormEl.style.backgroundColor = 'red';
  }
  //name form 
  if(nameFormEl.value.length > 0){
    nameFormEl.style.backgroundColor = 'white';
  }else {
    nameFormEl.style.backgroundColor = 'red';
  }
  //description form
  if(textFormEl.value.length > 0){
    textFormEl.style.backgroundColor = 'white';
  }else {
    textFormEl.style.backgroundColor = 'red';
  }

  //Alert 
  if (emailFormEl.value.length > 0 && emailFormEl.value.includes('@') 
    && nameFormEl.value.length > 0 && textFormEl.value.length > 0){
    emailFormEl.value = '';
    nameFormEl.value = '';
    textFormEl.value = '';
    alert('Thank you for filling out the form!!!');
  }
   
});
