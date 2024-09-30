import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ modal, setModal,data }) => {
    const {name,price,description,img1,img2,img3,btnText} = data;
    const [image,setImage] = useState(img1);
    const handleImage = (img) => {
        setImage(img)
    }
    return (
        <>
            {
                modal &&
                <div className='modal-wrapper'>
                    <div className="main-image">
                        <img src={image} alt="" />
                        <div className="close-mobile" onClick={() => setModal(false)}>
                            <img src="/assets/icons/cross.png" />
                        </div>
                    </div>
                    <div className="data">
                        <h3>{name}</h3>
                        <p className='amount'>{price}</p>
                        <p className='des'>{description}</p>
                        <div className="more-imgs">
                            <img src={img1} onClick={() => handleImage(img1)}/>
                            <img src={img2} onClick={() => handleImage(img2)}/>
                            <img src={img3} onClick={() => handleImage(img3)}/>
                        </div>
                        <button className='addCart'>{btnText}</button>
                        <div className="close" onClick={() => setModal(false)}>
                            <img src="/assets/icons/cross.png" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal