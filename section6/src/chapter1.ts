/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: '제로초',
  age: 27,
  position: 'Developer',
  work() {
    console.log(this.name + ' is working');
  },
};

class Employee {
  // Field
  name: string;
  age: number;
  position: string;

  // Constructor
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // Method
  work() {
    console.log(this.name + ' is working');
  }
}

const employeeB = new Employee('제로초', 27, 'Developer');

const employeeC = {
  name: '제로초',
  age: 27,
  position: 'Developer',
  work() {
    console.log(this.name + ' is working');
  },
};

class ExecutiveOfficer extends Employee {
  // Field
  officeNumber: number;

  // Constructor
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
console.log(employeeB);
