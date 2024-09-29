import clsx from 'clsx'

export const CriticBatteryIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={clsx('w-5 mr-1 fill-current', className)}
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    {...props}
  >
    <g>
      <g>
        <path d="M88,71.2V62h5.8c2,0,3.6-1.6,3.6-3.6V41.7c0-2-1.6-3.6-3.6-3.6H88v-9.2c0-2-1.6-3.6-3.6-3.6H6.1c-2,0-3.6,1.6-3.6,3.6    v42.4c0,2,1.6,3.6,3.6,3.6h78.2C86.4,74.8,88,73.2,88,71.2z M21.9,65.5h-5.1c-1.3,0-2.4-1.1-2.4-2.4V37c0-1.3,1.1-2.4,2.4-2.4h5.1    c1.3,0,2.4,1.1,2.4,2.4v26C24.3,64.4,23.3,65.5,21.9,65.5z"></path>
      </g>
    </g>
  </svg>
)
