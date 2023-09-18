import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Fade, Tooltip } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { Product } from '../../types/product.type'
import { addProductToWishList } from '../../redux/wishList'

interface Props {
  onMouseOver: boolean
  product: Product
}

function WishlistIcon({ onMouseOver, product }: Props) {
  const dispatch = useAppDispatch()

  return (
    <Tooltip
      title={<p className='text-sm tracking-wide'>Add to Wishlist</p>}
      placement='left'
      TransitionComponent={Fade}
      arrow
    >
      <button
        onClick={(event) => {
          event.preventDefault()
          dispatch(addProductToWishList(product))
        }}
        className={classNames(
          'mt-2 flex w-full items-center justify-center rounded-md bg-white py-2 text-main-text opacity-0 duration-200 ease-in-out hover:bg-hover hover:text-product-bg',
          {
            'opacity-100': onMouseOver
          }
        )}
      >
        <FavoriteBorderOutlined />
      </button>
    </Tooltip>
  )
}

export default WishlistIcon
