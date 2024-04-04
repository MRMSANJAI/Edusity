import React, { useRef } from 'react'
import './Testi.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testi = () => {

    const slider = useRef();
    let  tx= 0 ;
  
  const slideForward =()=>{
       if(tx > -50){
        tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
  } 
  const slideBackward =()=>{
    if(tx < 0){
        tx += 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
  } 

  return (
   <div className="testimonials">
    <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
    <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
    <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1}alt=""/>
                        <div>
                            <h3>Mariam Kathy 1</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p> Edusity partners with experienced educators, subject matter experts, and industry professionals to deliver 
                        high-quality instruction and mentorship to learners. Our instructors are passionate about their fields of expertise
                         and are dedicated to providing personalized guidance, feedback,
                         and support to help learners succeed.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2}alt=""/>
                        <div>
                            <h3>William Jackson 2</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p> Edusity partners with experienced educators, subject matter experts, and industry professionals to deliver 
                        high-quality instruction and mentorship to learners. Our instructors are passionate about their fields of expertise
                         and are dedicated to providing personalized guidance, feedback,
                         and support to help learners succeed.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3}alt=""/>
                        <div>
                            <h3>Alicent 3</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p> Edusity partners with experienced educators, subject matter experts, and industry professionals to deliver 
                        high-quality instruction and mentorship to learners. Our instructors are passionate about their fields of expertise
                         and are dedicated to providing personalized guidance, feedback,
                         and support to help learners succeed.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4}alt=""/>
                        <div>
                            <h3>Tom Jackson 4</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p> Edusity partners with experienced educators, subject matter experts, and industry professionals to deliver 
                        high-quality instruction and mentorship to learners. Our instructors are passionate about their fields of expertise
                         and are dedicated to providing personalized guidance, feedback,
                         and support to help learners succeed.</p>
                </div>
            </li>
        </ul>
    </div>
   </div>
  )
}

export default Testi