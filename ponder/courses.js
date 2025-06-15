// courses.js
const aCourse = {
  code: "WDD131",
  name: "Javascript Language",
  section: [
    {
    sectionNum: 1,
    roomNum: 'STC 353',
    enrolled: 26,
    days: 'TTh',
    instructor: 'Bro T'
    },
    {
    sectionNum: 2,
    roomNum: 'STC 347',
    enrolled: 28,
    days: 'TTh',
    }
  ],

  enrollStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.section.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.section[sectionIndex].enrolled++;
      renderSections(this.section);
    }
  },
  dropStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.section.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.section[sectionIndex].enrolled--;
      renderSections(this.section);
    }
  },
};

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const coursecode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  coursecode.textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
setCourseInfo(aCourse);
renderSections(aCourse.section);
// console.log(aCourse);
// console.log(aCourse.section[0].roomNum);

// document.querySelector('#courseName').textContent = aCourse.name;
// document.querySelector('#courseCode').textContent = aCourse.code;