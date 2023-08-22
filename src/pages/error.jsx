import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Error(){

    const {currentUser} = useContext(AuthContext);
  
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
          return <Navigate to="/login" />;
        }
          return children
        
      }
  return (
    <section className='error-page section'>
<div className='error-container'>
      <h1>oops! it's a dead end</h1>
        {
            <ProtectedRoute/> &&
                
            <Link to="/" className="btn btn-primary">
          Click here
        </Link>}
    </div>
    </section>
  )
}

export default Error
