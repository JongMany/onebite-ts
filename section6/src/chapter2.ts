/**
 * 접근 제어자
 *
 */

class Employee {
  // Field
  private name: string;
  protected age: number;
  public position: string;

  // Constructor
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // Method
  work() {
    console.log(this.name + " is working");
  }
}

class ExecutiveOfficer extends Employee {
  // Field
  officeNumber: number;

  // Constructor
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // console.log(this.name); // Error
    console.log(this.age); // 가능
  }
}

const employee = new Employee("이정환", 27, "developer");
console.log(employee);
// employee.name = "홍길동"; // Error
// employee.age = 30; // Error
