function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => {
    let namesH1 = document.createElement('h1');
    let jobsH2 = document.createElement('h2');

    namesH1.innerHTML = person.name;
    jobsH2.innerHTML = person.job;

    content.appendChild(namesH1);
    content.appendChild(jobsH2);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
