import React from 'react'

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="w-6 h-6 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={20}
      height={20}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
}

export default PlusIcon
