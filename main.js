function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMathExamples(count) {
    const operators = ['+', '-', '*', '/'];
    const examples = [];

    for (let i = 0; i < count; i++) {
        const num1 = getRandomInt(1, 20);
        const num2 = getRandomInt(1, 20);
        const operator = operators[getRandomInt(0, operators.length - 1)];
        examples.push({ example: `${num1} ${operator} ${num2}`, answer: eval(`${num1} ${operator} ${num2}`) });
    }

    return examples;
}

function startQuiz() {
    const count = parseInt(prompt("Введите количество примеров:"), 10);
    const examples = generateMathExamples(count);

    examples.forEach((item) => {
        const userAnswer = parseFloat(prompt(`Решите пример: ${item.example}`));
        
        if (userAnswer === item.answer) {
            alert(`Ваш ответ верный - ${userAnswer}`);
        } else {
            alert(`Ваш ответ не верный - ${userAnswer}. Правильный ответ - ${item.answer}!`);
        }
    });
}


startQuiz();
