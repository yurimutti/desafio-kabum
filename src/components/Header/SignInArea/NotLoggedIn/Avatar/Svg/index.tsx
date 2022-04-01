import { SVGProps } from 'react'

function Svg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={28}
        height={28}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.637 13.563c1.97-1.357 3.238-3.588 3.238-6.126A7.431 7.431 0 0014.437 0 7.431 7.431 0 007 7.438c0 2.537 1.269 4.768 3.238 6.125-3.894 1.224-6.738 4.9-6.738 9.187V28h21.875v-5.25c0-4.288-2.844-7.963-6.738-9.188z"
          fill="#347BBE"
        />
      </mask>
      <g mask="url(#a)">
        <circle cx={14.5} cy={11.5} r={15.5} fill="#C4C4C4" />
      </g>
    </svg>
  )
}

export default Svg
