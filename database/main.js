const db = require('./database');
let result;

let database = new db.Database();

switch (process.argv[2]) {
	case 'listStudents':
		result = database.listStudents();

		result.forEach(course => {
			let formatedText = '';
			course.studentNames.forEach(name => {
				return (formatedText += `${name}, `);
			});
			formatedText += `has applied to the ${course.courseName} course`;
			console.log(formatedText);
		});

		break;

	case 'maxpoints':
		result = database.maxPoints();

		result.forEach(course => {
			console.log(
				`${course.studentName} has earned ${course.points} in the ${course.courseName} course.`
			);
		});

		break;

	case 'failedStudents':
		result = database.failedStudents();

		result.forEach(course => {
			if (!course.failedStudents.length) {
				console.log(
					`Everyone finished the ${course.courseName} course.`
				);
			}

			course.failedStudents.forEach(student => {
				console.log(
					`${student.name} with ${student.point} points, can't finish the ${course.courseName} course`
				);
			});
		});

		break;
}
