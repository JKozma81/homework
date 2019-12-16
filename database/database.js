const fs = require('fs');

// const studentsData = JSON.parse(fs.readFileSync('./tables/students.json'));
// const examData = JSON.parse(fs.readFileSync('./tables/exams.json'));
// const coursesData = JSON.parse(fs.readFileSync('./tables/courses.json'));
// const teachersData = JSON.parse(fs.readFileSync('./tables/teachers.json'));

let studentsData;
let coursesData;
let examData;

try {
	studentsData = JSON.parse(fs.readFileSync('./tables/students.json'));
	coursesData = JSON.parse(fs.readFileSync('./tables/courses.json'));
	examData = JSON.parse(fs.readFileSync('./tables/exams.json'));
} catch (err) {
	console.error(err.toString());
}

class Database {
	listStudents() {
		let result = [];

		coursesData.forEach(item => {
			let resultObj = {};
			resultObj.courseName = item.name;
			resultObj.studentNames = [];

			item.students.forEach(studentId => {
				let student = studentsData.find(
					student => student.id === studentId
				);
				resultObj.studentNames.push(student.name);
			});
			result.push(resultObj);
		});
		return result;
	}

	maxPoints() {
		let maxPoint = 0;
		let result = [];

		examData.forEach(exam => {
			let students = {};
			students.courseName = coursesData.find(
				course => course.id === exam.courseId
			).name;

			exam.points.forEach(studentPoint => {
				studentPoint.points > maxPoint
					? (maxPoint = studentPoint.points)
					: (maxPoint = maxPoint);
			});

			let studId = exam.points.find(point => point.points === maxPoint)
				.studentId;

			students.studentName = studentsData.find(
				student => student.id === studId
			).name;

			students.points = maxPoint;
			result.push(students);
			maxPoint = 0;
		});
		return result;
	}

	failedStudents() {
		let result = [];

		examData.forEach(exam => {
			let students = {};
			students.failedStudents = [];

			students.courseName = coursesData.find(
				course => course.id === exam.courseId
			).name;

			exam.points.forEach(studentPoint => {
				if (studentPoint.points < 60) {
					let studId = studentPoint.studentId;
					let studentName = studentsData.find(
						student => student.id === studId
					).name;
					let studObj = {};

					studObj.name = studentName;
					studObj.point = studentPoint.points;

					students.failedStudents.push(studObj);
				}
			});
			result.push(students);
		});
		return result;
	}
}

module.exports = { Database };
