<!DOCTYPE html>
<html>
<head>
  <title>Jeu du Taquin</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
  <style>
    #taquin-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;
      width: 300px;
      height: 300px;
      margin-bottom: 20px;
    }

    .carreau {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }

    #message {
      font-weight: bold;
      margin-top: 10px;
    }

    .message-gagne {
      color: green;
    }
  </style>
</head>
<body>
  <div id="taquin-container"></div>
  <div id="message"></div>
  <button id="recommencer" style="display: none;">Recommencer</button>
  <script>
    var images = [
      'logo1.png',
      'logo2.png',
      'logo3.png',
      'logo4.png',
      'logo5.png',
      'logo6.png',
      'logo7.png',
      'logo8.png',
      'empty.png'
    ];

    $(document).ready(function() {
      initializeTaquin();
      $('#recommencer').click(function() {
        initializeTaquin();
        $('#message').text('');
        $('#recommencer').hide();
      });
    });
  </script>
</body>
</html>
