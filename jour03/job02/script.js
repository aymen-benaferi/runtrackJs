$(document).ready(function() {
    // Mélanger les images
    $('#melanger').click(function() {
      var container = $('#arc-en-ciel-container');
      var images = container.children('.image-arc-en-ciel');
      shuffleImages(images);
      container.append(images);
      $('#message').text('');
    });
  
    // Réorganiser les images
    $('#arc-en-ciel-container').on('click', '.image-arc-en-ciel', function() {
      var container = $('#arc-en-ciel-container');
      var images = container.children('.image-arc-en-ciel');
      var index = images.index(this);
      if (index === images.length - 1) {
        container.append(this);
        checkOrder();
      }
    });
  
    // Vérifier l'ordre des images
    function checkOrder() {
      var container = $('#arc-en-ciel-container');
      var images = container.children('.image-arc-en-ciel');
      var isCorrect = true;
      images.each(function(index) {
        if (index !== parseInt($(this).attr('alt').slice(-1)) - 1) {
          isCorrect = false;
          return false; // Sortir de la boucle each
        }
      });
      displayMessage(isCorrect);
    }
  
    // Afficher le message en fonction du résultat
    function displayMessage(isCorrect) {
      var message = $('#message');
      message.removeClass('message-gagne message-perdu');
      if (isCorrect) {
        message.text('Vous avez gagné');
        message.addClass('message-gagne');
      } else {
        message.text('Vous avez perdu');
        message.addClass('message-perdu');
      }
    }
  });
  
  // Fonction pour mélanger les images aléatoirement
  function shuffleImages(images) {
    var currentIndex = images.length, temporaryValue, randomIndex;
  
    // Tant qu'il reste des éléments à mélanger
    while (currentIndex !== 0) {
      // Sélectionner un élément restant
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Échanger avec l'élément actuel
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }
  
    return images;
  }
  