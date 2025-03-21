import GLightbox from 'glightbox'
import { useEffect, useRef, type AnchorHTMLAttributes } from 'react'

import 'glightbox/dist/css/glightbox.min.css'

const GlightBox = ({ children, image, ...other }: { image: string } & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const ref = useRef<HTMLAnchorElement | null>(null)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let instance: any = null
    if (ref.current) {
      instance = GLightbox({
        openEffect: 'fade',
        closeEffect: 'fade',
      })

    }
    return () => instance?.destroy()
  }, [ref])

  return (
    <a ref={ref} href={image} {...other} className={`glightbox ${other['className']}`}>
      {children}
    </a>
  )
}
export default GlightBox
