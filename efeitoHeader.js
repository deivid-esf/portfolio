    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      var header = document.querySelector('header');

      if (prevScrollpos > currentScrollPos) {
        // Se a página estiver sendo rolada para cima, exiba o cabeçalho
        header.classList.remove('hidden');
        header.classList.add('visible');
      } else {
        // Se a página estiver sendo rolada para baixo, esconda o cabeçalho
        header.classList.remove('visible');
        header.classList.add('hidden');
      }
      
      prevScrollpos = currentScrollPos;
    };
