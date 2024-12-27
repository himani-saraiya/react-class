import { useNavigate } from "react-router-dom";

const Routing = () => {
    const navigate = useNavigate();
    return (
      <div>
        <h1>Rounting example</h1>
        <button onClick={()=>navigate("/home")}>Home</button>
        <button onClick={()=>navigate('/contact')}>Contact</button>
      </div>
    );
  };
  
  export default Routing;