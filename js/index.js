$(document).ready(function() {
  var player;
  var cpu;
  var i = 0;
  var playernum;
  var turn = 0;
  var moves = 0;
  var f = 0;
  //var moves = 0;
  $("#replay").hide();
  $(".board").hide();
  $("#selection1").hide();

  $("button").click(function() {
    playernum = $(this).text();
    $("#selection").hide(600);
    if (playernum == "Two Players") {
      playernum = 2;
    } else if (playernum == "One Player") {
      playernum = 1;
    }
    $("#selection1").delay(200).show(600);
  });

  $("a").click(function() {
    player = $(this).text();
    $("#selection1").hide(300);
    generateBoard();
  });

  function restart() {
    $("#selection").show(600);
    $("#replay").hide();
    $("h2").hide();
    $(".board").hide();
    $("#selection1").hide();

    $("button").click(function() {
      playernum = $(this).text();
      $("#selection").hide(600);
      if (playernum == "Two Players") {
        playernum = 2;
      } else if (playernum == "One Player") {
        playernum = 1;
      }
      $("#selection1").delay(200).show(600);
    });

    $("a").click(function() {
      player = $(this).text();
      $("#selection1").hide(300);
      generateBoard();
    });
  }

  function generateBoard() {
    //console.log(player,playernum);
    turn = 0;
    f = 0;
    moves = 0;
    $("#replay").show(500);
    i = 0;
    if (player == "X") {
      cpu = "O";
      $("#turn").text(player);

    } else if (player == "O") {
     f = 1;
      cpu = "X";
      $("#turn").text(player);
    }
    // var board = ["one","three","two"];
    // var r1 =  Math.floor(Math.random()*4);
    // var r2 =  Math.floor(Math.random()*4);
    //$("div[data-id="+board[r1]+board[r2]+"]").removeClass("noshow");
    //$("div[data-id="+board[r1]+board[r2]+"]").show(900);
    $(".board").fadeIn(500);
    $("h2").slideDown(400);

    //console.log( Math.floor(Math.random()*4));
    if (playernum == 1) {
      $(".sub-board").text("");
      play1(f,moves);
    } else if (playernum == 2) {
      $(".sub-board").text("");

      play2(turn);
    }

  }

  //generateBoard();
  $("#replay").click(function() {
    restart();
  })

  function play2(turn) {
    var moves = 0;

    $(".sub-board").off('click').on('click', function() {

      if ((turn === 0) && $(this).text() == "") {
        $("#turn").text(cpu);
        moves++;
        $(this).text(player);

        turn = 1;
        checkWinner(moves);
      } else if ((turn === 1) && $(this).text() == "") {
        $("#turn").text(player);
        moves++;
        $(this).text(cpu);

        turn = 0;
        checkWinner(moves);
      }
    });

  }

  function play1() {
    
    if ((f == 1)) {
      $(".sub-board").off('click').on('click', function() {
        if (($(this).text()) == "") {
          $(this).text(player);
          f = 0;
          moves++;
          checkWinner(moves);
          play1();
        }

      });

    } else if ((f == 0) && moves < 9) {
      moves++;
      IA();
     checkWinner(moves);
      f = 1;
      play1();
      
    }
  } ////PLAY1/////////////////////////////////////////////

  function IA() {
    
    
    var board = ["one", "two", "three"];

    var r1 = Math.floor(Math.random() * 3); //random1
    var r2 = Math.floor(Math.random() * 3);
    console.log(board[r1] + "" + board[r2], $("div[data-id=" + board[r1] + board[r2] + "]").text());
    //console.log(r1,r2);
    if (($("div[data-id=" + board[r1] + board[r2] + "]").text()) == "") {
      $("div[data-id=" + board[r1] + board[r2] + "]").text(cpu);
   
      return f = 1;
       
    } else {

    IA();
    }
   
  }

  function checkWinner(moves) {

    console.log(moves);

    var pplayer = 0;
    var pcpu = 0;
    if ($("div[data-id=oneone]").text() == player && $("div[data-id=twoone]").text() == player && $("div[data-id=threeone]").text() == player) {
      pplayer = 1;
    } else if (($("div[data-id=oneone]").text() == cpu && $("div[data-id=twoone]").text() == cpu && $("div[data-id=threeone]").text() == cpu)) {
      pcpu = 1;
    } else if ($("div[data-id=onetwo]").text() == player && $("div[data-id=twotwo]").text() == player && $("div[data-id=threetwo]").text() == player) {
      pplayer = 1;
    } else if ($("div[data-id=onetwo]").text() == cpu && $("div[data-id=twotwo]").text() == cpu && $("div[data-id=threetwo]").text() == cpu) {
      pcpu = 1;
    } else if ($("div[data-id=onethree]").text() == cpu && $("div[data-id=twothree]").text() == cpu && $("div[data-id=threethree]").text() == cpu) {
      pcpu = 1;
    } else if ($("div[data-id=onethree]").text() == player && $("div[data-id=twothree]").text() == player && $("div[data-id=threethree]").text() == player) { /////// |||CHECK|||
      pplayer = 1;
    } else if ($("div[data-id=oneone]").text() == player && $("div[data-id=onetwo]").text() == player && $("div[data-id=onethree]").text() == player) {
      pplayer = 1;
    } else if ($("div[data-id=oneone]").text() == cpu && $("div[data-id=onetwo]").text() == cpu && $("div[data-id=onethree]").text() == cpu) {
      pcpu = 1;
    } else if ($("div[data-id=twoone]").text() == player && $("div[data-id=twotwo]").text() == player && $("div[data-id=twothree]").text() == player) {
      pplayer = 1;
    } else if ($("div[data-id=twoone]").text() == cpu && $("div[data-id=twotwo]").text() == cpu && $("div[data-id=twothree]").text() == cpu) {
      pcpu = 1;
    } else if ($("div[data-id=threeone]").text() == player && $("div[data-id=threetwo]").text() == player && $("div[data-id=threethree]").text() == player) {
      pplayer = 1;
    } else if ($("div[data-id=threeone]").text() == cpu && $("div[data-id=threetwo]").text() == cpu && $("div[data-id=threethree]").text() == cpu) { //////------CHECK----
      pcpu = 1;
    } else if ($("div[data-id=oneone]").text() == cpu && $("div[data-id=twotwo]").text() == cpu && $("div[data-id=threethree]").text() == cpu) {
      pcpu = 1;
    } else if ($("div[data-id=oneone]").text() == player && $("div[data-id=twotwo]").text() == player && $("div[data-id=threethree]").text() == player) {
      pplayer = 1;
    } else if ($("div[data-id=onethree]").text() == player && $("div[data-id=twotwo]").text() == player && $("div[data-id=threeone]").text() == player) {
      pplayer = 1;
    } else if ($("div[data-id=onethree]").text() == cpu && $("div[data-id=twotwo]").text() == cpu && $("div[data-id=threeone]").text() == cpu) {
      pcpu = 1;
    }

    if (pplayer == 1) {
      $(".sub-board").text("");
      $("div[data-id=twotwo]").hide(200).slideDown(400).text(player);
      $("div[data-id=oneone]").slideUp(400).slideDown(400).text("W");
      $("div[data-id=onetwo]").slideUp(400).slideDown(400).text("I");
      $("div[data-id=onethree]").slideUp(400).slideDown(400).text("N");
      moves = 0;
      var audio = new Audio(" http://s1download-universal-soundbank.com/mp3/sounds/20856.mp3");
      audio.play();
      $(audio).on("ended", function() {
        alert("Restarting!");
        generateBoard();
      });

    } else if (pcpu == 1) {
      $(".sub-board").text("");
      $("div[data-id=twotwo]").hide(200).slideDown(400).text(cpu);
      $("div[data-id=oneone]").slideUp(300).slideDown(400).text("W");
      $("div[data-id=onetwo]").slideUp(300).slideDown(400).text("I");
      $("div[data-id=onethree]").slideUp(300).slideDown(400).text("N");
      moves = 0;

      var audio = new Audio(" http://s1download-universal-soundbank.com/mp3/sounds/20856.mp3");
      audio.play();
      $(audio).on("ended", function() {
        alert("Restarting!");
        generateBoard();
      });
    } else if (moves == 9) {
      $(".sub-board").text("");
      $("div[data-id=oneone]").slideUp(300).slideDown(400).text("ITS");
      $("div[data-id=onetwo]").slideUp(300).slideDown(400).text("");
      $("div[data-id=onethree]").slideUp(300).slideDown(400).text("A");
      $("div[data-id=twoone]").slideUp(300).slideDown(400).text("T");
      $("div[data-id=twotwo]").slideUp(300).slideDown(400).text("I");
      $("div[data-id=twothree]").slideUp(300).slideDown(400).text("E");

      var audio = new Audio("http://s1download-universal-soundbank.com/mp3/sounds/20856.mp3");
      audio.play();
      $(audio).on("ended", function() {
        alert("Restarting!");
        moves = 0;
        generateBoard();
      });
    }

  }

});