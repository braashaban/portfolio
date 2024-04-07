import './Exp.css'
import "../Skills/Skills.css"
import { FaBookMedical } from "react-icons/fa";

const Exp = () => {
  return (
    <>
<div className="Exprencies">
      <div className='Exp'>
        <div className="exp-content">
          <div className="circle"><strong>+2</strong></div>
          <span className='circle-1'>Years</span>
          <p className='circle-2'>Exprinice</p>
        </div>
        <div className="exp-content">
          <div className="circle"><strong>+10</strong></div>
          <span className='circle-1'>completed</span>
          <p className='circle-2'>Projects</p>
        </div>
        <div className="exp-content">
          <div className="circle"><strong>+10</strong></div>
          <span className='circle-1'>Microsoft</span>
          <p className='circle-2'>Projects</p>
        </div>

      </div>
      <div className="skills-others">
        <div className="language">
          <h1>language</h1>
          <hr className='line' />
          <div className="skill-box language1">
            <span className="title2">English</span>
            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">75%</span>
              </span>
            </div>
          </div>
          <div className="skill-box language2">
            <span className="title2">French</span>
            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>
          </div>

          <div className="Studies">
            <h1>Studies</h1>
            <hr className='line22' />
            <div className="Studies-part flex  justify-items-start gap-7">
              <div>      <span className='book-studies'> <FaBookMedical /></span></div>
     
            <div>
              <p className='title2'>Tishreen University</p>
              <span>Graduation at <strong className='-amber'>2021</strong></span>
            </div>
            </div>
            
          </div>
      
        </div>
        </div>
      </>
      )
}

      export default Exp