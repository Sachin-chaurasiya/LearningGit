const tableBody = document.querySelector(".table-body");
const row = `<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>https://github.com/Sachin-chaurasiya</td>
</tr>`;

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
