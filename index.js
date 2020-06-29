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
  for(var i=0;facts.length;i++){
    facts[i]+='!!!'
  }
  return facts
}
function iLoveTheBeatles(number){
  var arr=[]
  var i=0
  do{
    var add = "I love the Beatles!"
    i++
  }while(i<15)
  
}