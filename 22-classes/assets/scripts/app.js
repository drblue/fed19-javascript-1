/**
 * OOP - Object-Oriented Programming.
 *
 * Classes.
 *
 */

class Exam {
	constructor(student, max_score) {
		this.student = student;
		this.max_score = max_score;
		this.score = 0;
	}

	incScore(points) {
		this.score += points;
		return this;
	}

	getGrade() {
		if (this.score / this.max_score >= 0.8) {
			return 'VG';
		} else if (this.score / this.max_score >= 0.6) {
			return 'G';
		} else {
			return 'IG';
		}
	}

	getScore() {
		return this.score;
	}

	getStudent() {
		return this.student;
	}
}

class ExamList {
	constructor() {
		this.exams = [];
	}

	addExam(exam) {
		this.exams.push(exam);
		return this;
	}

	getExam(student) {
		return this.exams.find(exam => exam.getStudent() === student);
	}

	getExams() {
		return this.exams;
	}
}

const exams = new ExamList();

exams
	.addExam(new Exam("Elliot", 10))
	.addExam(new Exam("Maja", 10))
	.addExam(new Exam("Alicia", 10));

exams.getExam("Alicia").incScore(4).incScore(0).incScore(3);
exams.getExam("Elliot").incScore(2).incScore(1).incScore(0);
exams.getExam("Maja").incScore(3).incScore(1).incScore(4);

exams.getExams().forEach(exam => {
	console.log(`${exam.getStudent()}'s exam-score is ${exam.getScore()} which results in grade ${exam.getGrade()}.`);
});
