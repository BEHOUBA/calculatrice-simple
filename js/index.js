var stringVal = "0"; // string variable that hold all keyboard entry in string format.

$(document).ready(function(){

 // Clear All function this one clear and initialize stringVal value to 0. 
  $("#AC").click(function(){
    stringVal = "0"
    $('#output').text(stringVal);
  });
  // Clear entry function this one remove the last entry number.
  $("#CE").click(function(){
    if( $('h1').text().length > 1 && $('h1').text() !== 0 ) {
      stringVal = stringVal.substring(0, stringVal.length -1);
      $("#output").text($('#output').text().substring(0, $('#output').text().length-1))
    } else if( $('h1').text().length == 1 ){
      $('#output').text("0");
    }

  });
  
  // Numbers keys functions to type a digit by clicking on them.
  // seven key.
  $("#seven").click(function(){ 
    if(stringVal == "0"){
      stringVal = "";
      //$('#output').text(stringVal)
      stringVal += "7";
      $("#output").text("7")
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "7";
      $('#output').text("7"); 
    } 
    else if( $('h1').text().length < 10 ) { 
      stringVal += "7";
      $("#output").append("7"); }
      else{ alert("maximum size of the number reached");}
  });
  
  // eigth key
    $("#eigth").click(function(){
    if(stringVal == "0"){
      stringVal = "";
      stringVal += "8";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "8";
      $('#output').text("8"); 
    } else if( $('h1').text().length < 10 ) { 
      stringVal += "8";
      $("#output").append("8"); }
      else{ alert("maximum size of the number reached");}
  });
  // nine key
  $("#nine").click(function(){
    if(stringVal == "0"){
      stringVal = "";
      stringVal += "9";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "9";
      $('#output').text("9"); 
    }  else if( $('h1').text().length < 9 ) { 
      stringVal += "9";
      $("#output").append("9"); }
      else{ alert("maximum size of the number reached");}
  });
  // six key
  $("#six").click(function(){
    if(stringVal == "0"){
      stringVal = "";
      stringVal += "6";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "6";
      $('#output').text("6"); 
    }  else if( $('h1').text().length < 9 ) { 
      stringVal += "6";
      $("#output").append("6"); }
      else{ alert("maximum size of the number reached");}
  });
  // five key
  $("#five").click(function(){
    if(stringVal == "0"){
      stringVal = "";
      stringVal += "5";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "5";
      $('#output').text("5"); 
    }  else if( $('h1').text().length < 9 ) { 
      stringVal += "5";
      $("#output").append("5"); }
      else{ alert("maximum size of the number reached");}
  });
 // four key 
  $("#four").click(function(){
    if(stringVal == "0"){
      stringVal = "";
      stringVal += "4";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "4";
      $('#output').text("4"); 
    }  else if( $('h1').text().length < 9 ) { 
      stringVal += "4";
      $("#output").append("4"); }
      else{ alert("maximum size of the number reached");}
  });
  // three key
  $("#three").click(function(){
    if(stringVal == "0"){
      stringVal = "";
      stringVal += "3";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "3";
      $('#output').text("3"); 
    }  else if( $('h1').text().length < 9 ) { 
      stringVal += "3";
      $("#output").append("3"); }
      else{ alert("maximum size of the number reached");}
  });
  
  // two key
  $("#two").click(function(){
    if(stringVal == "0"){
      stringVal = "";
      stringVal += "2";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "2";
      $('#output').text("2"); 
    }  else if( $('h1').text().length < 9 ) { 
      stringVal += "2";
      $("#output").append("2"); }
      else{ alert("maximum size of the number reached");}
  });
  // one key
  $("#one").click(function(){
    if(stringVal == "0" ){
      stringVal = "";
      stringVal += "1";
      $("#output").text(stringVal)
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "1";
      $('#output').text("1"); 
    }  else if( $('h1').text().length < 10 ) { 
      stringVal += "1";
      $("#output").append("1"); }
      else{ alert("maximum size of the number reached");}
  });
  // dot key
  $("#dot").click(function(){
    if(stringVal == "0"){
      stringVal = "0.";
      $("#output").text(stringVal)
    } else if ( /\d+\.\d+[\\+\\*/-]\d+$/.test(stringVal) ){           stringVal += ".";
      $("#output").append(".");}
    else if ( /\.$/.test(stringVal) || /\d+\.\d+$/.test(stringVal)){
    } else{
      stringVal += ".";
      $("#output").append(".")
      }
  });
  
  // zero key
    $("#zero").click(function(){
    if(stringVal == "0"){
    } else if(/[\\+\\*/-]$/.test(stringVal)){
      stringVal += "0";
      $("#output").text("0")
    } else if( $('h1').text().length < 10) { 
      stringVal += "0";
      $("#output").append("0"); }
      else if ('[\\+\\*/-]$'.test(stringVal)){ alert("maximum size of the number reached");}
  });
  
 // Operations keys functions.
 // division key 
 $("#division").click(function(){
   if(/[\\+\\*/-]$/.test(stringVal)){
    
   } else {stringVal += "/";}
 }); 
 // multiplication key 
  $("#multiplication").click(function(){
   if(/[\\+\\*/-]$/.test(stringVal)){
    
   } else {stringVal += "*";}
 }); 
 // soustraction key
  $("#minus").click(function(){
   if(/[\\+\\*/-]$/.test(stringVal)){
    
   } else {stringVal += "-";}
 }); 
 //  addiction key
  $("#plus").click(function(){
   if(/[\\+\\*/-]$/.test(stringVal)){
    
   } else {stringVal += "+";}
 }); 
// result key egal key  
 $("#egal").click(function(){
   stringVal = eval(stringVal);
   if( stringVal.toString().length > 9){
    stringVal = eval(stringVal).toString().substring(0,9)
    $('#output').text(eval(stringVal));
   } else {$('#output').text(stringVal);
          }
   
 });
  
  
}); // End of document ready.