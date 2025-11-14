const accountId=123344
let accountEmail="ansh@google.com"
var accountPassword="12223"
accountCity="Jaipur" //can also use this to store variable without initialzing
let accountState; //output will be undefined

//accountId=2 //not allowed

accountEmail="hc@hc.come"
accountPassword="22"
accountCity="bareilly"

//prefer not to use var
//because of issue iin block scope and functional scope
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])