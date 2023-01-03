import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '../lib/client';

function Product({product: {name, image, slug, price}}) {
  return (
    <Link href={`/product/${slug.current}`} passHref>
      <div className='product-card'>
        <image src={urlFor(image && image[0])} alt="" 
        width={250}
        height={250}
        className='product-image'/>
        <p className='product-name'>{name}</p>
        <p className='product-prce'>N{price}</p>

      </div>
     </Link>
  )
}

export default Product