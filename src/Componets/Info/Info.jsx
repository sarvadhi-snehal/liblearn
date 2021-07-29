import React from 'react'
import Fade from 'react-reveal/Fade';
import {useSelector} from "react-redux";

function Info() {
  const state = useSelector(state => state.isDark)
  const style={
    zIndex: '3',
   
  }
    return (
      <Fade bottom>
          <div className={`position-absolute fixed-bottom w-50 ms-5 mb-5 text-light ${state && 'dark'}`} style={style}>
           <h3 className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <div className="identity  d-flex">
                <div className="img  overflow-hidden w-25">

                <img className="img-fluid  rounded-circle w-75" src="https://picsum.photos/1006"/>
                </div>
                <div className="text-start d-flex flex-column justify-content-center w-100 ">
                <h6  className="m-0 p-0" >Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>

                </div>
              </div> 
        </div>
      </Fade>
    )
}

export default Info
