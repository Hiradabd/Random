function calculateResult() {
    let score = 0;
    const form = document.getElementById('quizForm');
    const result = document.getElementById('result');

    const questions = form.querySelectorAll('.question');
    questions.forEach(question => {
        const answer = question.querySelector('input[type="radio"]:checked');
        if (answer) {
            score += parseInt(answer.value);
        }
    });

    if (score >= 2) {
        result.innerHTML = "شما یک فرد اجتماعی و همکار هستید!";
    } else {
        result.innerHTML = "شما کمتر اجتماعی هستید و ترجیح می‌دهید تنها کار کنید.";
    }
}
