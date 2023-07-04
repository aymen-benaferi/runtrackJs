<!DOCTYPE html>
<html>
<head>
  <title>Exemple d'emploi avec jQuery</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="script.js"></script>
  <style>
    #arc-en-ciel-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .image-arc-en-ciel {
      width: 100px;
      height: 100px;
      margin: 5px;
    }

    #message {
      font-weight: bold;
      margin-top: 10px;
    }

    .message-gagne {
      color: green;
    }

    .message-perdu {
      color: red;
    }
  </style>
</head>
<body>
  <button id="melanger">Mélanger les images</button>
  <div id="arc-en-ciel-container">
    <img class="image-arc-en-ciel" src="arc1.png" alt="arc1">
    <img class="image-arc-en-ciel" src="arc2.png" alt="arc2">
    <img class="image-arc-en-ciel" src="arc3.png" alt="arc3">
    <img class="image-arc-en-ciel" src="arc4.png" alt="arc4">
    <img class="image-arc-en-ciel" src="arc5.png" alt="arc5">
    <img class="image-arc-en-ciel" src="arc6.png" alt="arc6">
  </div>
  <div id="message"></div>
</body>
</html>
