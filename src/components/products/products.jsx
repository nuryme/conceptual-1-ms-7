import React from 'react'
import Product from '../product/Product'

export default function Products({info}) {
  // console.log(props)
  // console.log(props.info)

  // const {info} = props
  // console.log(info)
  // console.log(info)
  return (
    <div>
      <h1>I am from products</h1>

      {/* 1.nested component */}
      <Product infoing= {info}></Product>
    </div>
  )
}
