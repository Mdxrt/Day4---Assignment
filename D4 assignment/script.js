//1)
//Input : hpw to compare two JSON have same properties without order

var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};
const res1=JSON.stringify(obj1);
const res2=JSON.stringify(obj2);
if(res1===res2){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

//-------------------------------------------------------------------------------------------------------
//2)
//Input : Use the rest countries API and display all the country flags in console
//code: 

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var dome=request.response
    var result=JSON.parse(dome)
 /*    for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].flags)
    } */
    for(var xeya of result){
        console.log(xeya.name.common,xeya.flags)
    }
   
    
}

//-------------------------------------------------------------------------------------------------------
//3)
//Input : Use the rest countries API and display all the countries name,region,subregion and population.
//code: 
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload=function(){
   var dude=request1.response
   var answer=JSON.parse(dude)
   for(var i of answer){
       console.log(i.name.common,i.region,i.subregion,i.population)
   }
}





