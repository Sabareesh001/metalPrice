import { Outlet, useNavigate } from 'react-router-dom';
import './Layout.css';

const Layout= ()=>{
    const navigate = useNavigate();
    return(
        <div className='layoutContainer'>
            <div className='contentContainer'><Outlet/></div>
            <div className='menuContainer'>
              <div className='menuButtonsContainer'>
                  <button onClick={()=>{navigate('/metals')}}>Metals</button>
                  <button onClick={()=>{navigate('/about')}}>About</button>
              </div>
            </div>
        </div>
    )
}

export default Layout;