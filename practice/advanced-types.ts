type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Shivam",
  priviliges: ["create-server"],
  startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printDetails(employee: UnknownEmployee) {
  console.log(employee.name);
  if ("priviliges" in employee) {
    console.log(employee.priviliges);
  }
  if ("startDate" in employee) {
    console.log(employee.startDate);
  }
}

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amt: number) {
    console.log("Loading cargo..." + amt);
  }
}

const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird": {
      speed = animal.flyingSpeed;
      break;
    }
    case "horse": {
      speed = animal.runningSpeed;
      break;
    }
  }
  console.log("Moving with speed ..." + speed);
}

const an1: Animal = {
  type: "horse",
  runningSpeed: 700,
};

moveAnimal(an1);

const input = document.getElementById("user-input")! as HTMLInputElement;

input.value = "Hello there";

// When you know the type of the value but dont know how many keys will be present and the name of the keys
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Invalid Email address",
  username: "Invalid username entered",
};

const fetchedData = {
  name: "asdas",
  job: {
    title: "jifksdjl",
  },
};

fetchedData?.job?.title;
