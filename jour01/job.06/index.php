<!DOCTYPE html>
<html>
<head>
    <script src="script.js" type="text/javascript"></script>
</head>
<body>
    <pre id="output"></pre>
    <script>
        function appendToOutput(text) {
            var output = document.getElementById("output");
            output.textContent += text + "\n";
        }
        fizzbuzz(1, 151, appendToOutput);
    </script>
</body>
</html>
