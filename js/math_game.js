let timer;
        let score = 0;
        let timeLeft = 30;
        let isGameRunning = false;
        let correctAnswer;

        const operationSelect = document.getElementById('operation');
        const startButton = document.getElementById('startButton');
        const timeDisplay = document.getElementById('time');
        const scoreDisplay = document.getElementById('score');
        const problemDisplay = document.getElementById('problem');
        const answerInput = document.getElementById('answer');
        const gameDiv = document.getElementById('game');
        const submitButton = document.getElementById('submit-button');
        const playAgainButton = document.getElementById('play-again-button');
        const homeLink = document.querySelector('a');

        startButton.addEventListener('click', startGame);
        submitButton.addEventListener('click', checkAnswer);
        playAgainButton.addEventListener('click', playAgain);

        function startGame() {
            if (!isGameRunning) {
                isGameRunning = true;
                score = 0;
                timeLeft = 30;
                scoreDisplay.textContent = score;
                timeDisplay.textContent = timeLeft;
                answerInput.value = '';
                generateProblem();
                timer = setInterval(updateTime, 1000);
                gameDiv.style.display = 'block';
                startButton.style.display = 'none';
                operationSelect.style.display = 'none';

                // Set focus on the input field
                answerInput.focus();
            }
        }

        function updateTime() {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
            if (timeLeft === 0) {
                endGame();
            }
        }

        function endGame() {
            isGameRunning = false;
            clearInterval(timer);
            alert(`Game Over! Your Score: ${score}`);
            playAgainButton.style.display = 'block';
        }

        function resetGame() {
            gameDiv.style.display = 'none';
            startButton.style.display = 'block';
            operationSelect.style.display = 'block';
            playAgainButton.style.display = 'none';
        }

        function generateProblem() {
            const operation = operationSelect.value;
            const num1 = Math.floor(Math.random() * 10);
            const num2 = Math.floor(Math.random() * 10);

            switch (operation) {
                case 'addition':
                    correctAnswer = num1 + num2;
                    problemDisplay.textContent = `${num1} + ${num2} = `;
                    break;
                case 'subtraction':
                    correctAnswer = num1 - num2;
                    problemDisplay.textContent = `${num1} - ${num2} = `;
                    break;
                case 'multiplication':
                    correctAnswer = num1 * num2;
                    problemDisplay.textContent = `${num1} * ${num2} = `;
                    break;
            }
        }

        function checkAnswer() {
            const userAnswer = parseInt(answerInput.value);
            if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
                score++;
                scoreDisplay.textContent = score;
            }
            generateProblem();
            answerInput.value = '';
        }

        function playAgain() {
            resetGame();
            score = 0;
            scoreDisplay.textContent = score;
        }

        function goToHome() {
            resetGame();
            score = 0;
            scoreDisplay.textContent = score;
        }