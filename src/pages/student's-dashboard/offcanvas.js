import { Link } from "react-router-dom"
export function Offcanvas() {
    return <>
        <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
            ☰
        </button>

        <div className="offcanvas offcanvas-start" id="sidebar" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">لوحة الطالب</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            {/* Profile Section */}
            <div className="text-center p-3">
                <img
                    src="https://brainium.com/wp-content/uploads/2021/11/sudoku-Mobile-hero-asset@2x.png"
                    className="rounded-circle mb-2"
                    alt="personal photo"
                    style={{ width: "120px", height: "120px" }}
                />
                <p className="mb-0 fw-bold">سودوكو</p>
                <p className="text-muted mb-3">soso@123.example</p>
            </div>

            <div className="offcanvas-body">
                <ul className="list-group text-end">
                    <li className="list-group-item list-group-item-action">
                        <Link to="/dashboard" className="text-decoration-none d-block"> تخصصاتي المحفوظة </Link>
                    </li>

                    <li className="list-group-item list-group-item-action">
                        <Link to="/dashboard" className="text-decoration-none d-block"> حاسبة المعدل الجامعي </Link>
                    </li>

                    <li className="list-group-item list-group-item-action">
                        <Link to="/dashboard" className="text-decoration-none d-block"> نصائح الدراسة </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
}