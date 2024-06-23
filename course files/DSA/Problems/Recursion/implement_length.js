

function recurLength(string){
  if (string === "") {
    return 0
  }else {
    return 1 + recurLength(string.substring(1))
  }

}