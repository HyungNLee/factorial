function factorial(num){

  if (num === 0 || num === 1) {
    num = 1;
    return num;
  } else {
    $("#numbers").append(num);
    for(i = num-1; i >=1; i--){
      num *= i;
      $("#numbers").append(" * " + i);
    }
    return num;
  }
}

$(document).ready(function(){
  $("#inputBox").submit(function(event){
    event.preventDefault();

    $("#initialNum").text("");
    $("#output").text("");
    $("#numbers").text("");

    var num = parseInt($("#inputFactorial").val());
    var facNum = factorial(num);
    $("#initialNum").text(num);
    $("#output").text(facNum);
  });
});
