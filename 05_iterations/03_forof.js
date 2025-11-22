//#FOR OF

const arr=[4,2,3,4,5]

for (const i of arr) {
    //console.log(i); //sare values par iterate karega and print karega unhe
}

const greetings="hello world"
for (const iterator of greetings) {
   // console.log(iterator); 
}

//Maps
const map=new Map()
map.set('IN','INDIA')
map.set('CH','CHINA')
map.set('FR','FRANCE')
// console.log(map);
for (const [key,value]of map) {  //agar bina[] lagake print karenge for hash toh wo  array mai convert karke print karega
    //console.log(key, ':-',value);
    
}

//-------------------------------------------------
const myobj={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

//Objects  are not iterable using for of
// for (const [key,value] of myobj) {
//     console.log(key,":-",value);   
// }


