import { FunctionComponent, useCallback } from "react";

import { Outlet, useNavigate } from "react-router-dom";


const Home: FunctionComponent = () => {


 

  

  return (
    <div>
      
    <Outlet /> 
            
    </div>
                  
  );
};

export default Home;
