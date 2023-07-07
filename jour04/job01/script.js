document.getElementById('button').addEventListener('click', () => {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ceci est mon expression.');
            }
            return response.text();
        })
        .then(data => {
            const expressionParagraph = document.getElementById('expressionParagraph');
            expressionParagraph.innerText = data;
        })
        .catch(error => {
            console.error(error);
            const expressionParagraph = document.getElementById('expressionParagraph');
            expressionParagraph.innerText = 'Erreur lors du chargement du fichier.';
        });
});
