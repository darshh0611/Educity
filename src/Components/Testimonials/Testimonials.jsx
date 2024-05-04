import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef(); // Move useRef inside the component
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>
                                Sydney Sweeney
                            </h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, 
                        dolore architecto eligendi voluptates libero a dolores dolorum, eveniet
                         quibusdam accusamus consectetur beatae tempore laudantium aliquam quas autem. 
                         Aut, saepe aperiam.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>
                                William Jackson
                            </h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, 
                        dolore architecto eligendi voluptates libero a dolores dolorum, eveniet
                         quibusdam accusamus consectetur beatae tempore laudantium aliquam quas autem. 
                         Aut, saepe aperiam.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>
                                Jennifer Lawrence
                            </h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, 
                        dolore architecto eligendi voluptates libero a dolores dolorum, eveniet
                         quibusdam accusamus consectetur beatae tempore laudantium aliquam quas autem. 
                         Aut, saepe aperiam.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>
                                Chris Brown
                            </h3>
                            <span>Educity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, 
                        dolore architecto eligendi voluptates libero a dolores dolorum, eveniet
                         quibusdam accusamus consectetur beatae tempore laudantium aliquam quas autem. 
                         Aut, saepe aperiam.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
