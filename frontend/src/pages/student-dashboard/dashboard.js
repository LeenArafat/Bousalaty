import { GPACalculator } from "./gpacalculator";
import { SavedMajors } from "./savedmajors";
import { StudyTip } from "./tips";

export function Dashboard() {
  const myMajors = [
    { name: "علوم الحاسوب", description: "Computer Science" },
    { name: "هندسة الحاسوب", description: "Computer Engineering" },
    { name: "ذكاء الأعمال", description: "Business intelligence" },
  ];

  return <>
    <div className="container">
      <div className="row">
        <div className=" col-12 col-lg-8 mt-4">        
          <SavedMajors majors={myMajors} />
          <StudyTip />
        </div>

        <div className="col-12 col-lg-4">
        <GPACalculator />
        </div>
      </div>
    </div>
  </>
}