const tableBody = document.querySelector(".table-body");

window.onload = function fetchStudents() {
  fetch("./js/data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((student) => {
        tableBody.innerHTML += `<tr>
        <th scope="row">${
          student.rollNo || Math.floor(Math.random() * 101) + 1
        }</th>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td><a href=${
          student.gitHubUrl
        } class="btn btn-primary bg-gradient">View Profile</a></td>
        </tr>`;
      });
    })
    .catch((err) => console.log(err));
  console.log(tableBody);
};
