interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Marie',
  lastName: 'Dupont',
  age: 21,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Jean',
  lastName: 'Martin',
  age: 23,
  location: 'Lyon',
};

const studentsList: Array<Student> = [student1, student2];

// vanilla table, one row per student
const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
