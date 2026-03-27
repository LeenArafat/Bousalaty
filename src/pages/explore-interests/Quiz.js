import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    text: "تخيّل أن أمامك يوم كامل حر، أي من هذه الأنشطة تجذبك أكثر؟",
    options: [
      { label: "A", text: "تفكيك جهاز أو إصلاح شيء بيدك" },
      { label: "B", text: "رسم أو كتابة قصة أو تأليف موسيقى" },
      { label: "C", text: "حل مسائل رياضية أو منطقية معقدة" },
      { label: "D", text: "التطوع في مبادرة اجتماعية أو مساعدة محتاج" },
      { label: "E", text: "تنظيم مشروع أو إدارة فريق صغير" },
    ],
  },
  {
    id: 2,
    text: "صديقك يسألك: \"ليش السماء زرقاء؟\"، ما ردة فعلك الطبيعية؟",
    options: [
      { label: "A", text: "أبحث في غوغل وأقرأ كل شيء عنها" },
      { label: "B", text: "أقول \"مش عارف\" وأكمل يومي" },
      { label: "C", text: "أحاول أفسرها بمنطقي حتى لو ما أعرف الجواب" },
      { label: "D", text: "أحوّل السؤال لنقاش فلسفي أو اجتماعي ممتع" },
    ],
  },
  {
    id: 3,
    text: "لو طُلب منك تقدّم مشروعاً أمام زملائك، أي طريقة تختار تلقائياً؟",
    options: [
      { label: "A", text: "تصميم عرض بصري جذاب ومبتكر" },
      { label: "B", text: "جمع بيانات وإحصاءات وتقديمها بدقة" },
      { label: "C", text: "كتابة تقرير منظم ومفصّل" },
      { label: "D", text: "إقناع الجمهور بالكلام والحماس" },
      { label: "E", text: "بناء نموذج أو تجربة عملية" },
    ],
  },
  {
    id: 4,
    text: "أي من هذه المواقف يشعرك بالرضا والفخر أكثر؟",
    options: [
      { label: "A", text: "شرحت درساً صعباً لزميل وفهمه" },
      { label: "B", text: "صممت شيئاً جميلاً أعجب الناس" },
      { label: "C", text: "حللت مشكلة معقدة لوحدك" },
      { label: "D", text: "نظّمت فعالية ونجحت بشكل مثالي" },
      { label: "E", text: "اخترعت فكرة جديدة لم يفكر فيها أحد" },
    ],
  },
  {
    id: 5,
    text: "لو أُعطيت 10,000 ريال لتستثمرها بحرية تامة، ماذا تفعل؟",
    options: [
      { label: "A", text: "أبدأ مشروعاً صغيراً أو فكرة تجارية" },
      { label: "B", text: "أشترك في دورات تعليمية وأطور نفسي" },
      { label: "C", text: "أتبرع لمشروع خيري أو اجتماعي" },
      { label: "D", text: "أشتري أدوات أو برامج لأطور مهارة تقنية" },
      { label: "E", text: "أستثمرها في مشروع فني أو إبداعي" },
    ],
  },
  {
    id: 6,
    text: "كيف تبدو غرفتك أو ملفاتك عادةً؟",
    options: [
      { label: "A", text: "منظمة تماماً، كل شيء في مكانه" },
      { label: "B", text: "فوضى منظمة، أنا فقط أعرف أين كل شيء" },
      { label: "C", text: "متغيرة حسب مزاجي" },
      { label: "D", text: "مش مهم النظام، المهم الإنجاز" },
    ],
  },
  {
    id: 7,
    text: "بعد 10 سنوات، أي من هذه الجمل تتمنى أن تصفك؟",
    options: [
      { label: "A", text: "غيّر حياة الناس وأثّر فيهم" },
      { label: "B", text: "اكتشف شيئاً جديداً لم يعرفه أحد" },
      { label: "C", text: "بنى شيئاً باقياً وملموساً" },
      { label: "D", text: "نجح وحقق ثروة وقيادة" },
      { label: "E", text: "عبّر عن نفسه وترك بصمة إبداعية" },
    ],
  },
  {
    id: 8,
    text: "أي نوع من المهام تشعر أنك تتحمله أكثر في الدراسة؟",
    options: [
      { label: "A", text: "حفظ وفهم كميات كبيرة من المعلومات" },
      { label: "B", text: "تطبيق عملي ومشاريع ميدانية" },
      { label: "C", text: "تحليل وكتابة مقالات وأبحاث" },
      { label: "D", text: "حل مسائل وأرقام وخوارزميات" },
      { label: "E", text: "عمل جماعي ونقاشات وتفاعل" },
    ],
  },
];

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const selectedAnswer = answers[currentQuestion.id];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelect = (label) => {
    setAnswers({ ...answers, [currentQuestion.id]: label });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    console.log("Answers:", answers);
    alert("تم إرسال إجاباتك!");
    // لاحقاً: navigate('/results', { state: { answers } })
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#f0f4ff', direction: 'rtl' }}
    >
      <div className="card shadow-lg p-4" style={{ maxWidth: '650px', width: '100%', borderRadius: '16px' }}>
        
        {/* Header */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <small className="text-muted">السؤال {currentIndex + 1} من {questions.length}</small>
            <small className="text-muted fw-bold">{Math.round(progress)}%</small>
          </div>
          <div className="progress" style={{ height: '8px', borderRadius: '10px' }}>
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                backgroundColor: '#4f46e5',
                borderRadius: '10px',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Question */}
        <h5 className="fw-bold mb-4 text-dark">{currentQuestion.text}</h5>

        {/* Options */}
        <div className="d-flex flex-column gap-2 mb-4">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.label;
            return (
              <div
                key={option.label}
                onClick={() => handleSelect(option.label)}
                className="d-flex align-items-center p-3 rounded-3"
                style={{
                  border: isSelected ? '2px solid #4f46e5' : '2px solid #e2e8f0',
                  backgroundColor: isSelected ? '#eef2ff' : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span
                  className="me-3 fw-bold d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '32px',
                    height: '32px',
                    minWidth: '32px',
                    backgroundColor: isSelected ? '#4f46e5' : '#e2e8f0',
                    color: isSelected ? 'white' : '#555',
                    fontSize: '14px',
                  }}
                >
                  {option.label}
                </span>
                <span style={{ color: '#1e293b' }}>{option.text}</span>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-secondary px-4"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{ borderRadius: '10px' }}
          >
            السابق
          </button>

          {isLast ? (
            <button
              className="btn px-4 text-white"
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              style={{ backgroundColor: '#4f46e5', borderRadius: '10px' }}
            >
              إرسال الإجابات
            </button>
          ) : (
            <button
              className="btn px-4 text-white"
              onClick={handleNext}
              disabled={!selectedAnswer}
              style={{ backgroundColor: '#4f46e5', borderRadius: '10px' }}
            >
              التالي ←
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Quiz;