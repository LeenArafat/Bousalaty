import './style.css'
export function StudyTip() {
  const tips = [
    "قسّم دراستك على جلسات قصيرة مع فواصل.",
    "راجع المادة أول بأول لتجنب التراكم.",
    "استخدم الخرائط الذهنية لتسهيل الحفظ.",
    "ادرس في مكان هادئ بعيد عن المشتتات."
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)]; {/*random() function returns a random value between 0 and 1 */ }

  return (
    <div className="container mt-3">
      <div className="card shadow-sm border-0" style={{ backgroundColor: "#fffdf0" }}>
        <div className="card-body text-center">
          <h4 className="mb-3"> نصيحة اليوم💡</h4>
          <hr className="op" />
          <p className="text-muted">{randomTip}</p>
        </div>
      </div>
    </div>
  );
}