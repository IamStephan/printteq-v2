import React, { useState } from "react"
import { Flipped, Flipper } from "react-flip-toolkit"

interface Props {
  selectedClassName: string
}

const ZoomImage: React.FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  selectedClassName,
  onClick,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const _handleClick = () => {
    setIsOpen((prev) => !prev)
    console.log
  }

  return (
    <Flipper flipKey={isOpen ? "open" : "closed"}>
      {isOpen ? (
        <Flipped flipId="img">
          <div onClick={_handleClick} className={selectedClassName} {...rest}>
            {children}
          </div>
        </Flipped>
      ) : (
        <Flipped flipId="img">
          <div onClick={_handleClick} className={className} {...rest}>
            {children}
          </div>
        </Flipped>
      )}
    </Flipper>
  )
}

export default ZoomImage
