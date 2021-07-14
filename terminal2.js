function animateContent2() {
  var myd2 = $('.ovr .wb-body');
  myd2.animate({
    scrollTop: myd2[0].scrollHeight
  }, 0);
}
var Typer2 = {
  text: '',
  accessCountimer: null,
  index: 0,
  speed: 2,
  file: '',
  accessCount: 0,
  deniedCount: 0,
  init: function() {
    accessCountimer = setInterval(function() {
      Typer2.updLstChr();
    }, 500);
    $.get(Typer2.file, function(data) {
      Typer2.text = data;
      Typer2.text = Typer2.text.slice(0, Typer2.text.length - 1);
    });
  },

  content: function() {
    return $('#c2').html();
  },

  write: function(str) {
    $('#c2').append(str);
    return false;
  },

  addText: function(key) {
    if (key.keyCode == 18) {
      Typer2.accessCount++;

      if (Typer2.accessCount >= 3) {
        Typer2.makeAccess();
      }
    } else if (key.keyCode == 20) {
      Typer2.deniedCount++;

      if (Typer2.deniedCount >= 3) {
        Typer2.makeDenied();
      }
    } else if (key.keyCode == 27) {
      Typer2.hidepop();
    } else if (Typer2.text) {
      var cont = Typer2.content();
      if (cont.substring(cont.length - 1, cont.length) == '|')
        $('#c2').html(
          $('#c2')
          .html()
          .substring(0, cont.length - 1),
        );
      if (key.keyCode != 8) {
        Typer2.index += Typer2.speed;
      } else {
        if (Typer2.index > 0) Typer2.index -= Typer2.speed;
      }
      var text = Typer2.text.substring(0, Typer2.index);
      var rtn = new RegExp('\n', 'g');

      $('#c2').html(text.replace(rtn, '<br/>'));
      //  window.scrollBy(0, 10);
      var elem2 = $("#c2");
      if (elem2) {
        animateContent2();
      }

    }

    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault();
    }

    if (key.keyCode != 122) {
      // otherway prevent keys default behavior
      key.returnValue = false;
    }
  },

  updLstChr: function() {
    var cont = this.content();

    if (cont.substring(cont.length - 1, cont.length) == '|')
      $('#c2').html(
        $('#c2')
        .html()
        .substring(0, cont.length - 1),
      );
    else this.write('|'); // else write it
  },
};


Typer2.speed = 2;
Typer2.file = 'ove.html';
Typer2.init();

var timer2 = setInterval('t2();', 30);

function t2() {
  Typer2.addText({
    keyCode: 123748
  });

  if (Typer2.index > Typer2.text.length) {
    clearInterval(timer2);
  }
}
