import { GPACalculator } from "./gpacalculator";
import { Offcanvas } from "./offcanvas";
import { SavedMajors } from "./savedmajors";
import { StudyTip } from "./tips";

export function Dashboard() {
  const myMajors = [
    { name: "علوم الحاسوب", description: "Computer Science" },
    { name: "هندسة الحاسوب", description: "Computer Engineering" },
    { name: "ذكاء الأعمال", description: "Business intelligence" },
  ];

  return <>
    <Offcanvas />
    <div className="container">
      <div className="row">
        <div className=" col-6 mt-4">        
          <SavedMajors majors={myMajors} />
          <StudyTip />
        </div>

        <div className="col-6">
        <GPACalculator />
        </div>
      </div>
    </div>
  </>
}