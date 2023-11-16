import { type ReactElement } from 'react'
/**
 * A component that displays a logo.
 * @returns {ReactElement} The rendered header.
 */
function Header (): ReactElement {
  return (
    <section className="bg-slate-50 flex w-full flex-col px-4 py-5 max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f0f8407-ed08-4c33-b4d7-2145ae606f99?apiKey=e41223409040441ba2e098cd3435d86b&"
      className="aspect-[1.03] object-contain object-center w-[76px] fill-zinc-800 overflow-hidden max-w-full"
      alt="description"
    />
  </section>
  )
}

export default Header
