import './App.css';
import email from './images/email.png';
import password from './images/password.png';
import profile from './images/profile.png';
function App() {
  return(
    <div className='main'>
     <div className='sub-main'>
      <div>
        <div className='imgs'>
          <div className='container.image'>
            <img src={profile} alt="profile" className='profile'/>
            
          </div>

        </div>
        <h1>login page</h1>
        <div>
         <img  src={email} alt="email" className='email'/>
         <input type="text" placeholder='user name' className='name'/>
        </div>
        <div className='second-input'>
         <img  src={password} alt="password" className='email'/>
         <input type="text" placeholder='user name' className='name'/>
        </div>
         <div className='login-button'>
         <button>Login</button>
         </div>
         <div className='link'>
          <a href='#'>Forgot password?</a>Or<a href='#'>Sign up</a>
         </div>
        
      </div>
     </div>
    </div>
    
  );
}
export default App