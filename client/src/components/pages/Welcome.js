import "../../styles/Welcome.scss";
import "bulma/css/bulma.min.css";
import image from "../../assets/beauty-salon.png";

const Welcome = () => {
  return (
    <div>
      <h1 className="is-size-1">My Beauty Scheduler</h1>
      <h2 className="is-size-2 mt-6">Welcome</h2>
      <img src={image}></img>
    </div>
  );
};

export default Welcome;
