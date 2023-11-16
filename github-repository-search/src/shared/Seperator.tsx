import { type ReactElement } from 'react'

/**
 * Props for the Seperator component.
 * @interface
 * @property {boolean} vertical - If true, the separator is vertical. Otherwise, it's horizontal.
 */
interface SeperatorProps {
  vertical: boolean
}

/**
 * A component that renders a vertical or horizontal line.
 * @param {SeperatorProps} props - The props of the component.
 * @returns {ReactElement} The rendered separator.
 */
function Seperator ({ vertical }: SeperatorProps): ReactElement {
  const style = vertical ? 'h-full mx-2' : 'w-full my-2'

  return (
    <div className={'bg-gray-400 ' + style}></div>
  )
}

export default Seperator
