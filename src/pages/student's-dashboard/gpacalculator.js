import React, { useState } from "react";

export function GPACalculator() {
  const [courses, setCourses] = useState([]);
  const [gpa, setGPA] = useState(null);
  const [error, setError] = useState(""); // لتخزين رسالة الخطأ

  const addCourse = () => {
    setCourses([...courses, { grade: "", credit: "" }]);
    setError(""); // مسح الخطأ عند إضافة مادة جديدة
  };

  const updateCourse = (index, field, value) => {
    const newCourses = [...courses];

    // تحقق من أن عدد الساعات ليس سالب
    if (field === "credit" && parseFloat(value) <= 0) {
      setError("عدد الساعات لا يمكن أن يكون سالباً!");
      return;
    }

    newCourses[index][field] = value;
    setCourses(newCourses);
    setError(""); // مسح الخطأ إذا كل شيء صحيح
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const grade = parseFloat(course.grade);
      const credit = parseFloat(course.credit);

      if (!isNaN(grade) && !isNaN(credit)) {
        totalPoints += grade * credit;
        totalCredits += credit;
      }
    }

    const result = totalCredits ? (totalPoints / totalCredits).toFixed(2) : null;
    setGPA(result);
  };

  return (
    <div className="container mt-5 p-4 border rounded">
      <h2 className="mb-4">حاسبة GPA</h2>

      {courses.map((course, index) => (
        <div key={index} className="mb-3 row g-2 align-items-center">
          <div className="col-auto">
            <input
              type="number"
              placeholder="العلامة"
              className="form-control"
              value={course.grade}
              onChange={(e) => updateCourse(index, "grade", e.target.value)}
            />
          </div>
          <div className="col-auto">
            <input
              type="number"
              placeholder="عدد الساعات"
              className="form-control"
              value={course.credit}
              onChange={(e) => updateCourse(index, "credit", e.target.value)}
            />
          </div>
        </div>
      ))}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <button className="btn btn-primary m-2" onClick={addCourse}>
          إضافة مادة
        </button>
        <button className="btn btn-success" onClick={calculateGPA}>
          احسب المعدل
        </button>
      </div>

      {gpa !== null && (
        <h3>GPA: {gpa}</h3>
      )}
    </div>
  );
}
