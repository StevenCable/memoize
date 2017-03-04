let elementIDObj = {};
let querySelected = {};

function memoizeID(id){
  
  if(elementIDObj.hasOwnProperty(id)){
    console.log('its there already!');
    return elementIDObj[id];
  }
  else{
    console.log('this should have logged it');

    elementIDObj[id] = document.getElementById(id);
    console.log('is it logged?', elementIDObj[id]);

    return elementIDObj[id];    
  }

}

function memoizeQuery(element){

  if(querySelected.hasOwnProperty(element)){
    console.log('its there already!');
    return querySelected[element];
  }
  else{
    console.log('this should have logged it');

    querySelected[element] = document.querySelector(element);
    console.log('is it logged?', querySelected[element]);

    return querySelected[element];    
  }


};

module.exports = {
  memoizeID: memoizeID,
  memoizeQuery: memoizeQuery
};