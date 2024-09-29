import clsx from 'clsx'
import React from 'react'

const BigChevronRightIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg className={clsx('fill-current', className)} viewBox="0 0 20 20" width="32" {...props}>
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default BigChevronRightIcon
