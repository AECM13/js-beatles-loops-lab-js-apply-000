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
