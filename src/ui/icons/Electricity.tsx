const Electricity: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 50 50" {...props}>
    <path
      fill={props.fill ?? 'currentColor'}
      fillRule="evenodd"
      d="M17.482 49.914a1.053 1.053 0 0 0 1.26-.337l20.524-27.364a1.056 1.056 0 0 0-.845-1.69h-9.017L32.622 1.23a1.056 1.056 0 0 0-1.887-.807L10.21 27.787a1.056 1.056 0 0 0 .844 1.689h9.015L16.855 48.77c-.08.48.18.953.627 1.143zm4.877-21.32a1.053 1.053 0 0 0-1.041-1.23h-8.15l16.66-22.21-2.71 16.252a1.053 1.053 0 0 0 1.041 1.23h8.15L19.65 44.845l2.709-16.253z"
    />
  </svg>
)

export default Electricity
