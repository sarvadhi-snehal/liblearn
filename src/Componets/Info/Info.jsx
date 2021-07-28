import React from 'react'

function Info() {
    return (
        <>
           <h3 className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <div className="identity w-50 d-flex">
                <div className="img rounded-circle overflow-hidden w-25">

                <img className="img-fluid" src="https://picsum.photos/1006"/>
                </div>
                <div className="info d-flex text-start  justify-content-center flex-column">
                <h6>Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>

                </div>
              </div> 
        </>
    )
}

export default Info
