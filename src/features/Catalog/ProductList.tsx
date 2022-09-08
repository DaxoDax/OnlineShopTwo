import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Grid } from '@material-ui/core';

import { Product } from 'src/Product';

import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

export default function productList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
