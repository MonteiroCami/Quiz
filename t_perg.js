// Seleciona todas as opções de resposta
const options = document.querySelectorAll('.opc');

// Função que será chamada ao clicar em uma das opções
options.forEach(option => {
    option.addEventListener('click', function() {
        const isCorrect = option.getAttribute('data-correct') === 'true';
        
        // Verifica se a resposta está correta
        if (isCorrect) {
            // Redireciona para a página da próxima pergunta
            window.location.href = 'finalizouQuiz.html';
        } else {
            // Redireciona para a página de erro
            window.location.href = 'pontuação2.html';
        }
    });
});
