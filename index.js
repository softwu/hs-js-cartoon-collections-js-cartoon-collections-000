function dwarfRollCall(dwarves) {
  var str = "";
  for(let i = 0; i < dwarves.length; i++){
    str += `${i+1}. ${dwarves[i]} `
  }
  return str;
}

function summonCaptainPlanet(planeteerCalls){
  var arr = []
  
  for(let i = 0; i < planeteerCalls.length; i++){
    arr.push(planeteerCalls[i].toUpperCase()+"!")
  }
  return arr;
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if(words[i].length > 4) return true; 
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  
  for(let i = 0; i < foods.length; i++){
    for(let j = 0; j < cheese.length; j++){
      if(foods[i] === cheese[j]) return foods[i];
    }
  }
  return "no cheese!";
}
