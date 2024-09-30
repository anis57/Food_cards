import React, { useState } from 'react'
import Card from '../../components/common/Card'
import './Product.css'
import { products } from '../../utils/constant/products'
import Modal from '../../components/common/Modal'

const Product = () => {
    const [productModal, setProductModal] = useState(false);
    const handleModalOpen = (item) => {
        setProductModal(item); // Set the clicked product data
    };

    const handleModalClose = () => {
        setProductModal(false); // Close modal by setting null
    };
    return (
        <div className='product'>
            {
                products.map((item, index) => {
                    return (
                        <React.Fragment  key={index}>
                            <Card onClick={() => handleModalOpen(item)} data={item} />
                        </React.Fragment>
                    )
                })
            }
            {productModal && (
                <Modal
                    modal={true} // Modal opens only if a product is selected
                    setModal={handleModalClose}
                    data={productModal} // Pass the selected product data to modal
                />
            )}
        </div>
    )
}

export default Product