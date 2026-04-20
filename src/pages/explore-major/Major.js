import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Major.css';

const MajorDetails = () => {
  return (
    <Container className='mt-5 mb-5'>

      <div className="card w-100 mb-3 mt-3">
        <div className="card-body">
          <div className="HC mb-3">
            <span
              className="badge text-bg-success"
              style={{ fontSize: '20px', fontWeight: 10 }}
            >
              85.5% - 98.5%
            </span>

            <h5
              className="card-title"
              style={{ fontSize: '30px', fontWeight: 'bold' }}
            >
              علوم الحاسوب 💻
            </h5>
          </div>

          <p className="card-text">
            تخصص علوم الحاسوب يركز على تصميم وتطوير البرمجيات، فهم الخوارزميات، وهندسة النظم. يمنحك المهارات لبناء تطبيقات وحلول تقنية مبتكرة تخدم مختلف المجالات. يعد هذا التخصص من أكثر التخصصات طلباً في سوق العمل المحلي والعالمي.
          </p>
        </div>
      </div>

      <div className="row mt-3">

        <div className="col-sm-6 mb-3 mb-sm-0 ggrade">
          <div className="card">
            <div className="card-body C5">
              <h5 className="card-title pb-3">معدل القبول 🎓</h5>
              <p className="card-text grade pt-2 pb-5">
                <span className="badge rounded-pill text-bg-success">
                  85.5% - 98.5%
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 pb-3 ">
          <div className="card">
            <div className="card-body C4">
              <h5 className="card-title">فرص العمل 💼</h5>
              <p className="card-text">
                <ul>
                  <li>مطور برمجيات</li>
                  <li>محلل بيانات</li>
                </ul>
              </p>
              <button className="btn btn-primary">عرض تفاصيل</button>
            </div>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body C2">
              <h5 className="card-title">المواد الاساسية 📚</h5>
              <p className="card-text">
                <ul>
                  <li>مقدمة في علوم الحاسوب</li>
                  <li>هندسة البرمجيات</li>
                </ul>
              </p>
              <button className="btn btn-primary">عرض تفاصيل</button>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body C3">
              <h5 className="card-title">المهارات المطلوبة 🔍</h5>
              <p className="card-text">
                <ul>
                  <li>برمجة التطبيقات</li>
                  <li>تحليل البيانات</li>
                </ul>
              </p>
              <button className="btn btn-primary">عرض تفاصيل</button>
            </div>
          </div>
        </div>

      </div>

    </Container>
  );
};

export default MajorDetails;