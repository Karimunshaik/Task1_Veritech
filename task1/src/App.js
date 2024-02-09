import './App.css';

import girl1 from './girl1.png';
import boy1 from './boy1.png';
import boy2 from './boy2.png';
import boy3 from './boy3.png';

function App() {
  return (
    <div className="App">
      
       <h1 className='heading'><span>MEET</span> OUR TEAM</h1>
       <span className='border'></span>
       <p>Welcome to our Company,where a dedicated team of Professional work together to bring innovation, cerativity
        expertise to software industry.Get to know individuals who make the company thrive.
       </p>
       <span className='border'></span>
      {/*<div classNameName='profiles'>
       
        <div className="profiles-container">
          <div className='profile1'>
            <img src={image1} alt="Henry" className='img1' height="300" width={300}/>
            <h3 className='user-name'>Henry</h3>
            <h5>Board Directors</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='profile2'>
            <img src={image1} alt="hello" className='img2'/>
            <h3 className='user-name'>Jane</h3>
            <h5>Marketing Head</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div> */}
      <h1 className='market'>MARKETING TEAM</h1>
      <section className="property-list">
        <div className="property">
        <a href='#1'><img src={boy1} alt="Henry" className='img1' height="267" width={300}/></a>
            <h2>Henry</h2>
            <p>Chief Marketing Department</p>
            <p>Experienced</p>
            <p>Price: 12,50,000</p>
        </div>

        <div className="property">
        <a href='#1'><img src={boy2} alt="Henry" className='img1' height="267" width={300}/></a>
            <h2>Edward</h2>
            <p>Chief Marketing Department</p>
            <p>Experienced</p>
            <p>Salary: 13,00,000</p>
        </div>
        <div className="property">
        <a href='#1'><img src={boy3} alt="Henry" className='img1' height="267" width={300}/></a>
            <h2>Charles</h2>
            <p> Deputy Chief Marketing Department</p>
            <p>Experienced</p>
            <p>Salary: 13,50,000</p>
        </div>
        </section>
        <h1 className='Develop'>DEVELOPMENT TEAM</h1>
        <section className='property-list'>
        <div className="property">
        <a href='#1'><img src={girl1} alt="Henry" className='img1' height="300" width={300}/></a>
            <h2>Priya</h2>
            <p>Core Member in Marketing Department</p>
            <p>Experienced</p>
            <p>Salary: 13,00,000</p>
        </div>
        <div className="property">
        <a href='#1'><img src={boy2} alt="Henry" className='img1' height="267" width={300}/></a>
            <h2>Henry</h2>
            <p>Directive Head</p>
            <p>Experienced</p>
            <p>Salary: 12,50,000</p>  
        </div>
        <div className="property">
        <a href='#1'><img src={boy3} alt="Henry" className='img1' height="267" width={300}/></a>
            <h2>Lewis</h2>
            <p>Core Member</p>
            <p>Experienced</p>
            <p>Salary: 12,50,000</p>
        </div>
        
        </section>
        <h1 className='Develop'>TESTING TEAM</h1>
        <section className='property-list'>
        <div className="property">
        <a href='#1'><img src={girl1} alt="Henry" className='img1' height="300" width={300}/></a>
            <h2>Priya</h2>
            <p>Chief of the Department</p>
            <p>Experienced</p>
            <p>Salary: 3,00,000</p>
        </div>
        <div className="property">
        <a href='#1'><img src={boy2} alt="Henry" className='img1' height="267" width={300}/></a>
            <h2>Henry</h2>
            <p>Head of the Department</p>
            <p>Experienced</p>
            <p>Salary: 2,50,000</p>
        </div>
        <div className="property">
        <a href='#1'><img src={boy3} alt="Henry" className='img1' height="267" width={300}/></a>
            <h2>Charles</h2>
            <p>Core Member</p>
            <p>Experienced</p>
            <p>Salary: 2,50,000</p>
        </div>
        
        </section>

       
    
    </div>
  );
}

export default App;

