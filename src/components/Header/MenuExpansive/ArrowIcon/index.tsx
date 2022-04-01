import { SVGProps } from 'react'

function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
    width={14}
    height={9}
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.05 1.84L11.866.66 6.55 5.976 1.231.66.05 1.841l6.5 6.5 6.5-6.5z"
      fill="#fff"
    />
  </svg>
  )
}

export default ArrowIcon
