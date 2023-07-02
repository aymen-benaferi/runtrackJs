<!DOCTYPE html>
<html>
<head>
    <script src="script.js" type="text/javascript"></script>
</head>
<body>
    <?php
    $annee = 2024; // Modifier l'année ici selon vos besoins
    $estBisextile = "<script>document.write(bisextile($annee));</script>";
    echo "L'année $annee est bissextile ? " . ($estBisextile ? "Oui" : "Non");
    ?>
</body>
</html>
