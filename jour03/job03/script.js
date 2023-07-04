function initializeTaquin() {
  var container = $('#taquin-container');
  container.empty();

  var shuffledImages = shuffleImages(images);

  for (var i = 0; i < 9; i++) {
    var carreau = $('<div class="carreau"></div>');
    carreau.css('background-image', 'url(' + shuffledImages[i] + ')');
    container.append(carreau);
  }

  container.on('click', '.carreau', function() {
    var emptyCarreau = $('.carreau').filter(function() {
      return $(this).css('background-image') === 'none';
    });

    var clickedCarreau = $(this);
    var clickedIndex = clickedCarreau.index();
    var emptyIndex = emptyCarreau.index();

    if (isValidMove(clickedIndex, emptyIndex)) {
      swapCarreaux(clickedCarreau, emptyCarreau);
      checkWin();
    }
  });
}

function isValidMove(clickedIndex, emptyIndex) {
  var validMoves = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4, 6],
    [1, 3, 5, 7],
    [2, 4, 8],
    [3, 7],
    [4, 6, 8],
    [5, 7]
  ];

  return validMoves[emptyIndex].includes(clickedIndex);
}

function swapCarreaux(carreau1, carreau2) {
  var tempBackground = carreau1.css('background-image');
  carreau1.css('background-image', carreau2.css('background-image'));
  carreau2.css('background-image', tempBackground);
}



function shuffleImages(images) {
  var currentIndex = images.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = images[currentIndex];
    images[currentIndex] = images[randomIndex];
    images[randomIndex] = temporaryValue;
  }

  return images;
}
