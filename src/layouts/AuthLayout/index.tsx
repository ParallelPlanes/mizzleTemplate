import { Col, Row } from 'react-bootstrap'
import { lazy, Suspense, type ReactNode } from 'react'
import Preloader from '@/components/Preloader'

const QuoteSwiper = lazy(() => import('./components/QuoteSwiper'))

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Row className="g-0">

      <Col lg={7} className="vh-100 d-none d-lg-block">

        <Suspense fallback={<div></div>}>
          <QuoteSwiper />
        </Suspense>

      </Col>

      <Suspense fallback={<Preloader />}>
        {children}
      </Suspense>

    </Row>

  )
}

export default AuthLayout