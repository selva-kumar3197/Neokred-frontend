import Image from 'next/image'
import React from 'react'

const ResponsiveImage = ({ src, alt, className, style, onClick }) => (
  <Image
    src={src}
    alt={alt}
    className={className}
    style={style}
    height="0"
    width="0"
    layout='responsive'
    onClick={onClick}
  />
)

export default ResponsiveImage