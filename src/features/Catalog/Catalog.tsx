import React from 'react';

import { Product } from 'src/Product';

import ProductList from './ProductList';

interface Props {
  products: Product[];
}

export default function catalog({ products }: Props) {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
