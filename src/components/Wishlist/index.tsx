import { SVGProps } from 'react'
import { Svg } from './styles'

type WishListProps = {
  Isliked?: boolean
} & SVGProps<SVGSVGElement>

const Wishlist = ({ Isliked, ...props }: WishListProps) => {
  return Isliked ? (
    <svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 5.603C22 2.51 19.456 0 16.294 0 13.887 0 11.825 1.478 11 3.54 10.175 1.479 8.113 0 5.706 0 2.544 0 0 2.51 0 5.603v.413C0 11.79 11.412 19.25 11.412 19.25S22 11.79 22 6.016v-.413z"
        fill="#FF6500"
      />
  </svg>
) : (
  <Svg
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 21.6l-.412-.3C11.1 20.962 0 13.275 0 6.975v-.412C0 2.962 2.962 0 6.6 0c2.213 0 4.2 1.087 5.4 2.85A6.549 6.549 0 0117.4 0C21.038 0 24 2.925 24 6.563v.412c0 6.263-11.1 13.987-11.588 14.325l-.412.3zM6.6 1.5c-2.812 0-5.1 2.288-5.1 5.063v.412c0 2.25 1.875 5.175 5.362 8.55C9 17.512 11.1 19.125 12 19.762c.9-.637 3-2.25 5.137-4.237 3.488-3.375 5.363-6.3 5.363-8.55v-.412c0-2.775-2.288-5.063-5.1-5.063a5.048 5.048 0 00-4.725 3.188L12 6.45l-.713-1.725A5.032 5.032 0 006.6 1.5z"
    fill="#42464D"
  />
</Svg>
)
};

export default Wishlist
