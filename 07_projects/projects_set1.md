# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1 solution

```javascript 
const button=document.querySelectorAll('.button')
const body=document.querySelector('body')

button.forEach(function(button){
 // console.log(button)
  button.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  })
})

```
## project 2 solution
```javascript
const form = document.querySelector('form');

//submit event listener
form.addEventListener('submit', function (e) {
  e.preventDefault(); //prevents the default input to store on any server

  //taking height as value it is given as string thats why we used parse to convert it to int
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    //shows the result
    results.innerHTML = `<span>${bmi}</span>`;
    // if(bmi<=18.5){
    //   results.innerHTML=`You are under weight ${bmi}`;
    // }else if(bmi>18.6 && bmi<=24.9){
    //   results.innerHTML=`You are normal ${bmi}`;
    // }else {
    //   results.innerHTML=`You are over weight ${bmi}`;
    // }
  }
});

```

## project 3 

```javascript
const clock=document.querySelector('#clock')

//set interval is a important concept in js for interviews also set interval is used when you want to perform a particular function on repeated time of interval like here we are displaying time every 1 second
setInterval(function(){
  const date=new Date();
  clock.innerHTML= date.toLocaleTimeString();
}, 1000)

```