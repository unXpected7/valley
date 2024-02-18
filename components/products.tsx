import { ItemProducts } from '@/components/item-product';
import React, { FC } from 'react';

type Product = {
  // Define the structure of your product object
  // For example:
  id: string;
  name: string;
  title: string;
  subtitle: string;
  items: any[]; // Define the structure of items if needed
  // ... other properties
};

type Props = {
  products: Product[];
  className?: string;
};

const Products: FC<Props> = ({ products, className }) => {
  return (
    <div className={`${className}`}>
      {products.map((item: Product) => (
        <ItemProducts key={item.id} itemProduct={item} />
      ))}
    </div>
  );
};

export default Products;
