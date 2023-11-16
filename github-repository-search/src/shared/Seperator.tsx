import React, { type ReactElement } from 'react'

interface SeperatorProps {
  vertical: boolean
}

function Seperator ({ vertical }: SeperatorProps): ReactElement {
  const style = vertical ? 'h-full mx-2' : 'w-full my-2'

  return (
    <div className={'bg-gray-400 ' + style}></div>
  )
}

export default Seperator
