## project 1 solution  project 6
```javascript
//generate a random color
// Start should change the Background color every second
const randomcolor = function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let ref;
const startChangingColor = function(){
    changecolor=function(){
      return document.body.style.backgroundColor=randomcolor()
    }

    if(!ref){
      ref = setInterval(changecolor,1000);
    }
}

const stopChangingColor = function(){
    clearInterval(ref)
    ref=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)
```

## project 2 solution  project 5
```javascript
const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=> { 
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key ===" " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `
})

```