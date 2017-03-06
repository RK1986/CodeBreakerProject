let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(document.getElementById('answer') == '' && document.getElementById('attempt') = ''){
      setHiddenFields();
    }
    if(validateInput(input.value)){
      document.getElementById('attempt').value = document.getElementById('attempt').value + 1;
    }else{
      return false;
    }
    if(getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }else{
      if(attempt >= 10){
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
      }else {
        setMessage("Incorrect, try again.");
      }
    }
}

function setHiddenFields(){
  document.getElementById('attempt').value = 0;
  answer = Math.floor(Math.random()*9999);
  if(answer < 1000){
    if(answer < 100){
      if(answer < 10){
        answer=("000"+answer).toString();
      }else{
        answer=("00"+answer).toString();
      }
    }else{
      answer=("0"+answer).toString();
    }
  }
  document.getElementById('answer').innerHTML = answer;
}

function setMessage(messageString){
  document.getElementById('message').innerHTML = messageString;
}

function validateInput(inputAnswer){
  if(inputAnswer.length == 4){
    return true;
  }else{
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(inputAnswer){
  let correctGuess = 0;
  let resultDiv = '<div class="row"><span class="col-md-6">' + inputAnswer + '</span><div class="col-md-6">';
  for(var i=0;i<inputAnswer.length;i++){
    if(inputAnswer.charAt(i)==answer.charAt(i)){
      resultDiv += '<span class="glyphicon glyphicon-ok"></span>';
      correctGuess++;
    }else if (answer.indexOf(inputAnswer.charAt(i)>-1)) {
      resultDiv += '<span class="glyphicon glyphicon-transfer"></span>';
    }else{
      resultDiv += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  document.getElementById('results').innerHTML = resultDiv;
  if( answer.length == correctGuess ){
    return true;
  }else {
    return false;
  }
}

function showAnswer(hasWon){
  document.getElementById('code').innerHTML = answer;
  if(hasWon){
    document.getElementById('code').className = document.getElementById('code').className +" success";
  }else{
    document.getElementById('code').className = document.getElementById('code').className +" failure";
  }
}

function showReplay() {
  document.getElementById('guessing-div').style.dispaly = 'none';
  document.getElementById('replay-div').style.dispaly = 'block';
}
