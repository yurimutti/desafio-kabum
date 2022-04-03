import { SVGProps } from 'react'

function ArrowSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={15}
      height={24}
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.182 24L0 21.818 9.818 12 0 2.182 2.182 0l12 12-12 12z"
        fill="#565C69"
      />
    </svg>
  )
}

export default ArrowSvg
