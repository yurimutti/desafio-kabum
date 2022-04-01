import { SVGProps } from 'react'

function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={38}
        viewBox="0 0 38 38"
        fill="none"
        {...props}
      >
        <path
          d="M4.75 9.5h28.5v3.167H4.75V9.5zm0 7.917h28.5v3.167H4.75v-3.167zm0 7.917h28.5V28.5H4.75v-3.166z"
          fill="#fff"
        />
      </svg>
    </button>
  )
}

export default Menu
