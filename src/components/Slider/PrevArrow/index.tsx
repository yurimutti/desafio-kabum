import { SVGProps } from 'react'

function ArrowSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={15}
      height={24}
      viewBox="0 0 15 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24l2.182-2.182L4.364 12l9.818-9.818L12 0 0 12l12 12z"
        fill="#565C69"
      />
    </svg>
  )
}

export default ArrowSvg
