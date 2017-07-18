$(document).ready(function(){

  // variables

  var gameRound = 1;

  var symbol = 'X';

  var player = 'Player X';

  // start button logic to initiate the game

  $('#start').on("click", function(evt){
    alert('Game Started! Player X, begin!');
    turnOffStart();
  });

  function turnOffStart(){
    $('#start').off("click");
  };

  // Player choice logic

  $('.choice').on('click', function(){
    if($(this).html()===""){
      if (gameRound%2===0){
        symbol = 'O';
        player = 'Player O';
      } else{
        symbol = 'X';
        player = 'Player X';
      }
      $(this).html(symbol);
      checkVictory();
      gameRound++;
    };
  });

  // checkVictory function, compares each possible victory to player symbol 'X' or 'O'
  
  function checkVictory(){
    if($('#square1').html()===symbol && $('#square2').html()===symbol && $('#square3').html()===symbol){
      alert(player + " wins!");
    } else if ($('#square4').html()===symbol && $('#square5').html()===symbol && $('#square6').html()===symbol){
      alert(player + " wins!");
    } else if($('#square7').html()===symbol && $('#square8').html()===symbol && $('#square9').html()===symbol){
      alert(player + " wins!");
    } else if($('#square1').html()===symbol && $('#square4').html()===symbol && $('#square7').html()===symbol){
      alert(player + " wins!");
    } else if($('#square2').html()===symbol && $('#square5').html()===symbol && $('#square8').html()===symbol){
      alert(player + " wins!");
    } else if($('#square3').html()===symbol && $('#square6').html()===symbol && $('#square9').html()===symbol){
      alert(player + " wins!");
    } else if($('#square1').html()===symbol && $('#square5').html()===symbol && $('#square9').html()===symbol){
      alert(player + " wins!")
    } else if($('#square1').html()===symbol && $('#square5').html()===symbol && $('#square3').html()===symbol){
      alert(player + " wins!")
    } else if($('#square3').html()===symbol && $('#square5').html()===symbol && $('#square7').html()===symbol){
      alert(player + " wins!")
    } else if (gameRound === 9) {
      alert('Its a draw!')
    }
  }
});
