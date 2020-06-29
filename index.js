// add solution here
function theBeatlesPlay(music, instrument){
  var arr =[]
  for( var i =0;i<music.length;i++){
    var last =""
    last += music[i]+" plays "+instrument[i]
    arr.push(last)
  }
  return arr
}
function johnLennonFacts(facts){
  for(var i=0;i<facts.length;i++){
    facts[i]+='!!!'
  }
  return facts
}
function iLoveTheBeatles(number){
  var arr=[]
  var i=0
  var add = "I love the Beatles!"
  if (number>=15){
    do{
    
    i++
  }while(i<1)
  }
  else{
    do{
    i = number-1  
    i++
  }while(i<15)
    
  }

  return arr
}