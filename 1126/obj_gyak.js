class Student {
	constructor(name, skill) {
		this.name = name;
		this.skill = skill;
	}

	aply(course) {
		let cIndex = Math.floor(Math.random() * 10 + 1);

		if (course.students.length >= course.maxCount) {
			return false;
		}

		if (course.lecturer == null) {
			return false;
		}

		if (
			course.maxCount - course.students.length === 1 &&
			this.skill * cIndex >= course.minPoints
		) {
			course.students.push(this);
			course.start();
		}

		if (
			this.skill * cIndex >= course.minPoints &&
			course.maxCount - course.students.length > 1
		) {
			course.students.push(this);
			return true;
		}
	}
}

class Course {
	constructor(name, minStuds, maxStuds, minPoint) {
		this.name = name;
		this.students = [];
		this.lecturer = null;
		this.isStarted = false;
		this.minCount = minStuds;
		this.maxCount = maxStuds;
		this.minPoints = minPoint;
	}

	start() {
		if (this.students.length >= this.minCount) {
			this.isStarted = true;
			return true;
		} else {
			return false;
		}
	}
}

class Lecturer {
	constructor(name) {
		this.name = name;
	}

	teach(course) {
		course.lecturer = this;
	}
}

/**
 * TEST CASES
 *
 * Simply uncomment the codes below to test for the diferent requirements
 **/

// Jelentkezés oktató nélkül

// const andreas = new Student('Andreas', 7);
// const juniorProg = new Course('Junior Programozo', 1, 2, 55);

// console.log(`Course lecturer: ${juniorProg.lecturer}`);
// console.log(
// 	`Andreas is applying without lecturer: ${andreas.aply(juniorProg)}`
// );

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Jelentkezés kevés skill pontal

// const peet = new Student('Peet', 8);
// const juniorProg = new Course('Junior Programozo', 1, 2, 200);
// const james = new Lecturer('James', 6);

// console.log(
// 	`Peet tries to apply with low skillpoints: ${peet.aply(juniorProg)}`
// );

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Jelentkezés ha csak 1 hely van

// const andreas = new Student('Andreas', 7);
// const peet = new Student('Peet', 8);
// const juniorProg = new Course('Junior Programozo', 1, 2, 25);
// const james = new Lecturer('James');
// james.teach(juniorProg);

// andreas.aply(juniorProg);
// console.log(`Course students: ${juniorProg.students.length}`);
// console.log(`Course max student number: ${juniorProg.maxCount}`);
// console.log(`Has the course started? ${juniorProg.isStarted}`);
// peet.aply(juniorProg);
// console.log(`Course students: ${juniorProg.students.length}`);
// console.log(`Has the course started? ${juniorProg.isStarted}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Jelentkezés ha a kurzus elstartolt a max létszámmal

// const andreas = new Student('Andreas', 7);
// const peet = new Student('Peet', 8);
// const thomas = new Student('Thomas', 9);
// const juniorProg = new Course('Junior Programozo', 1, 2, 25);
// const james = new Lecturer('James');
// james.teach(juniorProg);

// andreas.aply(juniorProg);
// peet.aply(juniorProg);
// console.log('Course students: ', juniorProg.students);
// console.log(`Course max student number: ${juniorProg.maxCount}`);
// console.log(`Has the course started? ${juniorProg.isStarted}`);

// console.log('Course students: ', juniorProg.students);
// console.log(`Can Thomas apply? ${thomas.aply(juniorProg)}`);
