let elementIDObj = {};
let querySelected = {};

function memoizeID(id){  
  if(elementIDObj.hasOwnProperty(id)){
    return elementIDObj[id];
  }
  else{
    elementIDObj[id] = document.getElementById(id);
    return elementIDObj[id];    
  }
}

function memoizeQuery(element){
  if(querySelected.hasOwnProperty(element)){
    return querySelected[element];
  }
  else{
    return querySelected[element] = document.querySelector(element); 
  }
}

//ORRR RETURN A FUNCTION THAT DOES THE WORK:
//THIS WAY THE CACHE OBJECT CAN BE STORED WITHIN THE FUNCTION ONLY
//AND IT MAKES THE FUNCTION MORE SECURE/PRIVATE.

// function memoizeID(id){
//   var cache = {};
//   return function(id){
//     if(cache.hasOwnProperty(id)){
//       return cache[id];
//     }else{
//       return cache[id] = document.getElementById(id);
//     }
//   };
// }


// function memoizeQuery(){
//   var cache = {};
//   return function(sel){
//     if(cache.hasOwnProperty(sel)){
//       return cache[sel];
//     }else{
//       return cache[sel] = document.querySelector(sel);
//     }
//   };
// }

module.exports = {
  memoizeID: memoizeID,
  memoizeQuery: memoizeQuery
};
