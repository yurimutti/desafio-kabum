import { SVGProps } from 'react'

function Wishlist(props: SVGProps<SVGSVGElement>) {
  return (
    <a href="#">
      <svg
        width={36}
        height={36}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M18.496 31.35l-1.993-1.815c-7.08-6.42-11.754-10.654-11.754-15.85 0-4.234 3.327-7.561 7.56-7.561 2.393 0 4.689 1.114 6.187 2.873 1.498-1.76 3.794-2.873 6.186-2.873 4.234 0 7.56 3.327 7.56 7.56 0 5.197-4.673 9.43-11.753 15.864l-1.993 1.801z"
          fill="#fff"
          fillOpacity={0.8}
        />
      </svg>
    </a>
  )
}

export default Wishlist
