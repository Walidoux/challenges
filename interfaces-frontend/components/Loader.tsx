interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  color: string
  duration?: number
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className, duration = 1.5, color, ...rest } = props

  return (
    <svg
      height={30}
      width={30}
      viewBox='0 0 45 50'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      stroke={color}
      {...rest}>
      <g
        fill='none'
        fillRule='evenodd'
        transform='translate(1 1)'
        strokeWidth='2'>
        <circle cx='22' cy='22' r='6' strokeOpacity='0'>
          <animate
            attributeName='r'
            begin='1.5s'
            dur={duration}
            values='6;22'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='stroke-opacity'
            begin='1.5s'
            dur={duration}
            values='1;0'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='stroke-width'
            begin='1.5s'
            dur={duration}
            values='2;0'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='22' cy='22' r='6' strokeOpacity='0'>
          <animate
            attributeName='r'
            begin='3s'
            dur={duration}
            values='6;22'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='stroke-opacity'
            begin='3s'
            dur={duration}
            values='1;0'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='stroke-width'
            begin='3s'
            dur={duration}
            values='2;0'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='22' cy='22' r='8'>
          <animate
            attributeName='r'
            begin='0s'
            dur='1.5s'
            values='6;1;2;3;4;5;6'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
      </g>
    </svg>
  )
}
