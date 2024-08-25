import { Link, useNavigate } from "react-router-dom";

const FourOFour = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <img
          src="/assets/fourofour.webp"
          alt="page not found"
          className="w-1/2"
        />
      </div>
      <div className="flex justify-center gap-5">
        <button
          className="btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Return to previous page
        </button>
        <Link to="/" className="btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default FourOFour;
