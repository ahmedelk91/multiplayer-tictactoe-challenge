$(document).ready(function(){

  // variables

  var gameRound = 1;

  var symbol = 'X';

  var player = 'Player X';

  // start button logic to initiate the game

  $('#restart').click(function(){
    $('.choice').html('');
    $('.choice').removeClass('won');
    gameRound = 1;
  })

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
      $('#square1, #square2, #square3').addClass('won')
      alert(player + " wins!");
    } else if ($('#square4').html()===symbol && $('#square5').html()===symbol && $('#square6').html()===symbol){
      $('#square4, #square5, #square6').addClass('won')
      alert(player + " wins!");
    } else if($('#square7').html()===symbol && $('#square8').html()===symbol && $('#square9').html()===symbol){
      $('#square7, #square8, #square9').addClass('won')
      alert(player + " wins!");
    } else if($('#square1').html()===symbol && $('#square4').html()===symbol && $('#square7').html()===symbol){
      $('#square1, #square4, #square7').addClass('won')
      alert(player + " wins!");
    } else if($('#square2').html()===symbol && $('#square5').html()===symbol && $('#square8').html()===symbol){
      $('#square2, #square5, #square8').addClass('won')
      alert(player + " wins!");
    } else if($('#square3').html()===symbol && $('#square6').html()===symbol && $('#square9').html()===symbol){
      $('#square3, #square6, #square9').addClass('won')
      alert(player + " wins!");
    } else if($('#square1').html()===symbol && $('#square5').html()===symbol && $('#square9').html()===symbol){
      $('#square1, #square5, #square9').addClass('won')
      alert(player + " wins!")
    } else if($('#square1').html()===symbol && $('#square5').html()===symbol && $('#square3').html()===symbol){
      $('#square1, #square5, #square3').addClass('won')
      alert(player + " wins!")
    } else if($('#square3').html()===symbol && $('#square5').html()===symbol && $('#square7').html()===symbol){
      $('#square3, #square5, #square7').addClass('won')
      alert(player + " wins!")
    } else if (gameRound === 9) {
      alert('Its a draw!')
    }
  }
});
