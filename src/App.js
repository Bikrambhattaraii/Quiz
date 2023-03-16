import React, { useState } from 'react';

export default function App() {

	// jsx code here
	const questions = [
		{
			questionText: 'What is the capital of Nepal?',
			answerOptions: [
				{ answerText: 'bhaktapur', isCorrect: false },
				{ answerText: 'Lalitpur', isCorrect: false },
				{ answerText: 'kathmandu', isCorrect: true },
				{ answerText: 'attariya', isCorrect: false },
			],
		},
		{
			questionText: 'Who is la pulga?',
			answerOptions: [
				{ answerText: 'ronaldo', isCorrect: false },
				{ answerText: 'Messi', isCorrect: true },
				{ answerText: 'zlatan', isCorrect: false },
				{ answerText: 'neymar', isCorrect: false },
			],
		},
		{
			questionText: 'king of ucl?',
			answerOptions: [
				{ answerText: 'Real Madrid', isCorrect: true },
				{ answerText: 'barcelona', isCorrect: false },
				{ answerText: 'AC milan', isCorrect: false },
				{ answerText: 'Liverpool', isCorrect: false },
			],
		},
		{
			questionText: 'winner of last worldcup happened in 2022?',
			answerOptions: [
				{ answerText: 'france', isCorrect: false },
				{ answerText: 'portugal', isCorrect: false },
				{ answerText: 'ronaldo', isCorrect: false },
				{ answerText: 'Argentina', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0); // 0 is the index of the first question
	const [showScore, setShowScore] = useState(false); // false means that the score is not shown
	const [score, setScore] = useState(0); // 0 is the initial score

	const handleAnswerOptionClick = (isCorrect) => { // isCorrect is the boolean value of the answer
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}