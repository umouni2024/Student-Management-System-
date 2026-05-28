let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if(name === "" || roll === "" || course === ""){
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        course: course
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function displayStudents(){

    let studentList = document.getElementById("student-list");

    studentList.innerHTML = "";

    students.forEach((student, index) => {

        studentList.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.course}</td>
                <td>
                    <button class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index){

    students.splice(index, 1);

    localStorage.setItem("students",
    JSON.stringify(students));

    displayStudents();
}