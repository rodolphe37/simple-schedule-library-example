import { Link } from "react-router-dom";
import { textWhite_blue500 } from "./utils/style";

const HomePage = () => {
  return (
    <div>
      <h1>Go to Schedule view</h1>
      <Link
        data-testid="forget-password"
        className={`${textWhite_blue500} text-xs underline`}
        to={`/schedule/`}
      >
        Go to...
      </Link>
    </div>
  );
};

export default HomePage;
