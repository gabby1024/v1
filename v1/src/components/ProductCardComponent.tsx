import React from 'react';
import './ProductCardComponent.css';

type ProductCardProps = {
  name: string;
  img: string;
  productDesc: string;
  title: string;
  rating: number;
};

const ProductCardComponent: React.FC<ProductCardProps> = ({ name, img, productDesc, title, rating }) => {
  const safeRating = Math.max(0, Math.floor(rating));

  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-image" />
      <div className="product-content">
        <h2 className="product-title">{title}</h2>
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{productDesc}</p>
        <div className="product-rating">
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;