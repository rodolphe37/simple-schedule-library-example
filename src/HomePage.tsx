import { Link } from "react-router-dom";
import { textWhite_blue500 } from "./utils/style";

const HomePage = () => {
  return (
    <div>
       <Link style={{fontSize:18}}
        data-testid="forget-password"
        className={`${textWhite_blue500} text-xs underline`}
        to={`/schedule/`}
      >
        Go to demo...
      </Link>
      <h1>Go to Schedule view</h1>
     
    </div>
  );
};

export default HomePage;
