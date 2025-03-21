import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const MainTitle = () => {
  return (
    <section className="pb-5 pb-md-7">
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-dots pb-0 mb-0">
            <li className="breadcrumb-item"><Link to="">Home</Link></li>
            <li className="breadcrumb-item"><Link to="">All product</Link></li>
            <li className="breadcrumb-item"><Link to="">Cart</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
          </ol>
        </nav>
        <h1 className="h3 mb-0 mt-3">Checkout</h1>
      </Container>
    </section>

  )
}

export default MainTitle