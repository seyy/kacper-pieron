import { SVGProps } from 'react'

const BurgerSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask
      id='mask0_382_5481'
      maskUnits='userSpaceOnUse'
      x='0'
      y='10'
      width='34'
      height='14'
    >
      <path
        d='M34 10.0938H0V23.874H34V10.0938Z'
        fill='white'
      />
    </mask>
    <g clipPath='url(#clip0_382_5496)'>
      <path
        d='M4.66667 21H23.3333C23.975 21 24.5 20.475 24.5 19.8333C24.5 19.1917 23.975 18.6667 23.3333 18.6667H4.66667C4.025 18.6667 3.5 19.1917 3.5 19.8333C3.5 20.475 4.025 21 4.66667 21ZM4.66667 15.1667H23.3333C23.975 15.1667 24.5 14.6417 24.5 14C24.5 13.3583 23.975 12.8333 23.3333 12.8333H4.66667C4.025 12.8333 3.5 13.3583 3.5 14C3.5 14.6417 4.025 15.1667 4.66667 15.1667ZM3.5 8.16667C3.5 8.80833 4.025 9.33333 4.66667 9.33333H23.3333C23.975 9.33333 24.5 8.80833 24.5 8.16667C24.5 7.525 23.975 7 23.3333 7H4.66667C4.025 7 3.5 7.525 3.5 8.16667Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_382_5496'>
        <rect
          width='28'
          height='28'
          fill='white'
        />
      </clipPath>
    </defs>
  </svg>
)

export default BurgerSvg