import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Major.css';

const MajorDetails = () => {

  return (
   <Container>

          <div className="card w-100 mb-3 mt-3 " >
            <div className="card-body" >
              <div className="HC mb-3">
               <span className="badge text-bg-success" style={{ fontSize: '20px', fontWeight: 10 }}>  85.5%  -  98.5%  </span>
               <h5 className="card-title" style={{ fontSize: '30px', fontWeight: 'bold' }}> علوم الحاسوب 💻</h5>
               </div>
              <p className="card-text">تخصص علوم الحاسوب يركز على تصميم وتطوير البرمجيات، فهم الخوارزميات، وهندسة النظم. يمنحك المهارات لبناء تطبيقات وحلول تقنية مبتكرة تخدم مختلف المجالات. يعد هذا التخصص من أكثر التخصصات طلباً في سوق العمل المحلي والعالمي.</p>
             
            </div>
          </div>  

              <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body C2">
              <h5 class="card-title">المواد الاساسية  📚</h5>
              <p class="card-text"><ul><li>مقدمة في علوم الحاسوب</li><li>هندسة البرمجيات</li></ul></p>
              <a href="#" class="btn btn-primary">عرض تفاصيل</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body C3">
              <h5 class="card-title">المهارات المطلوبة 🔍</h5>
              <p class="card-text"><ul><li>برمجة التطبيقات</li><li>تحليل البيانات</li></ul></p>
              <a href="#" class="btn btn-primary">عرض تفاصيل</a>
            </div>
          </div>
        </div>
      </div>





                  <div class="row mt-3 ">
          <div class="col-sm-6 mb-3 mb-sm-0 ">
            <div class="card">
              <div class="card-body C5">
                <h5 class="card-title pb-3">معدل القبول  🎓</h5>
                <p class="card-text  grade pt-2 pb-5"> <span class="badge rounded-pill text-bg-success">  85.5%  -  98.5% </span></p>
            
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body C4">
                <h5 class="card-title">فرص العمل  💼</h5>
                <p class="card-text"><ul><li>مطور برمجيات</li><li>محلل بيانات</li></ul></p>
                <a href="#" class="btn btn-primary">عرض تفاصيل</a>
              </div>
            </div>
          </div>
        </div>








    </Container>

  );
};

export default MajorDetails;