function calculateScore() {
    let score = 0;
    
    // Получаем все вопросы
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        // Находим выбранный ответ в каждом вопросе
        const selected = question.querySelector('input:checked');
        
        if(selected) {
            score += parseInt(selected.value);
        }
    });

    // Показываем результат
    const resultDiv = document.getElementById('result');
    const scoreSpan = document.getElementById('score');
    const comment = document.getElementById('comment');
    
    resultDiv.style.display = 'block';
    scoreSpan.textContent = score;

    // Добавляем комментарий в зависимости от баллов
    if(score >= 19) {
        comment.textContent = "скорее всего, вы являетесь игроманом";
        comment.style.color = "red";
    } else if(score >= 13) {
        comment.textContent = "вохможно, вы зависимы от игр";
        comment.style.color = "orange";
    } else if(score >= 8) {
        comment.textContent = "у вас нет ярко выраженых симптомов зависимости";
        comment.style.color = "green";
    }
}