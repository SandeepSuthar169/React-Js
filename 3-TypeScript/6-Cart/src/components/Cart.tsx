import type { PropsWithChildren, ReactNode } from "react"

interface CartProps extends PropsWithChildren {
  title: string
  footer?: ReactNode
}


const Cart = ({title, children, footer }: CartProps) => {

  return (
    <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}

export default Cart