import { defaultSwiperOptions } from "@/states/default-config"
import { Autoplay, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { SwiperOptions } from "swiper/types"
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap"

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import about14 from '@/assets/images/about/14.jpg'

const clients = [client5, client4, client1, client2, client3, client6]

const avatars = [avatar6, avatar5, avatar2, avatar3, avatar4]

const Hero = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay],
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
    }
  }
  return (
    <section className="bg-dark pt-lg-9 pb-7" data-bs-theme="dark">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col md={7} xl={6} className="mb-6 mb-md-0">
            <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Analytics</span>
            <h1 className="h2 my-4">Comprehensive data analytics and reporting</h1>
            <p className="mb-7">Gain valuable insights into your digital campaigns with our comprehensive data analytics and reporting feature.</p>
            <h6 className="text-white fw-normal mb-4">More than 500+ teams are using Mizzle</h6>
            <Swiper {...swiperOptions} wrapperClass="align-items-center">
              {clients.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img src={image} className="pe-sm-3" alt="client-img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={4} className="position-relative ms-auto mb-xl-n9">
            <figure className="position-absolute bottom-0 end-0 z-index-1 mb-n6 me-n6 d-none d-lg-block">
              <svg width={167} height={107} viewBox="0 0 167 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-white" clipRule="evenodd" d="M87.1132 1.04286L87.1128 1.04337C86.6896 1.55271 86.2787 2.04727 85.826 2.5C84.8049 3.40765 83.7918 4.32334 82.78 5.23795L82.7799 5.23803L82.7798 5.23811L82.7796 5.23823C80.2242 7.54807 77.6764 9.85101 75.026 12C61.626 22.5 48.226 33 34.926 43.5L9.12598 63.9L9.12586 63.9001C8.7259 64.2001 8.32595 64.5 8.02598 64.8C7.32598 65.4 6.52598 65.8 5.62598 65C4.82598 64.3 5.02598 63.3 5.52598 62.6C6.12598 61.6 6.92598 60.6 7.72598 59.8C8.20935 59.3606 8.69271 58.919 9.17671 58.4769L9.17678 58.4768L9.17686 58.4767L9.17698 58.4766C11.9972 55.9003 14.8387 53.3044 17.826 51C39.426 34.4 61.126 17.9 83.626 2.5C84.826 1.6 86.126 0.8 87.426 0C87.426 0 87.526 0.1 87.826 0.2C87.5789 0.482421 87.3442 0.764841 87.1132 1.04286ZM166.026 21.9C165.676 22.1 165.326 22.325 164.976 22.55C164.626 22.775 164.276 23 163.926 23.2C149.326 31.8 134.926 40.7 120.826 50.2C99.226 64.6 77.826 79.4 57.426 95.4C53.626 98.4 49.926 101.4 46.226 104.4C45.626 104.9 45.126 105.3 44.526 105.7C43.726 106.3 42.926 106.6 42.126 105.9C41.326 105.2 41.526 104.2 42.026 103.5C42.626 102.5 43.326 101.5 44.226 100.7L44.3458 100.59C46.8091 98.3235 49.3691 95.9681 52.026 94C82.426 71 113.626 49.5 146.926 31C150.726 28.8667 154.615 26.9111 158.504 24.9556C160.448 23.9778 162.393 23 164.326 22C164.826 21.8 165.326 21.6 165.726 21.4C165.826 21.5 165.926 21.7 166.026 21.9ZM99.926 8.5C100.626 8 101.226 7.4 101.826 6.8C101.726 6.7 101.626 6.6 101.326 6.5C100.626 7 99.926 7.525 99.226 8.05C98.526 8.575 97.826 9.1 97.126 9.6C93.0918 12.5088 89.0545 15.4176 85.0158 18.3275L85.0151 18.328C65.7284 32.224 46.4088 46.1436 27.226 60.2C21.8311 64.1042 16.7385 68.3108 11.6263 72.5336L11.6262 72.5336C9.53676 74.2595 7.44401 75.9882 5.32601 77.7C3.82601 78.9 2.52601 80.3 1.22601 81.7C0.726013 82.2 0.226013 82.8 0.026013 83.5C-0.073987 84 0.126013 84.7 0.426013 85C0.726013 85.3 1.52601 85.4 1.92601 85.2C2.72601 84.8 3.42601 84.3 4.12601 83.7C6.54336 81.7156 8.93467 79.7052 11.3234 77.6969C15.5554 74.139 19.7794 70.5878 24.126 67.2C34.7347 58.9552 45.3766 50.8101 56.0135 42.669L56.0143 42.6684L56.015 42.6678C63.8265 36.6891 71.6352 30.7125 79.426 24.7C86.3253 19.3005 93.1247 13.9011 99.924 8.50163L99.926 8.5ZM100.426 22C99.326 23 98.226 24 97.026 24.9C93.6956 27.4851 90.3598 30.0703 87.0224 32.6567L87.015 32.6624C76.0246 41.1795 65.0165 49.7104 54.126 58.3C47.6804 63.3921 41.3179 68.5672 34.9849 73.7183C31.4926 76.5588 28.0093 79.3921 24.526 82.2L24.526 82.2001C23.726 82.9 22.926 83.6 22.026 84.1C21.526 84.4 20.426 84.4 20.126 84.1C19.726 83.7 19.626 82.7 19.926 82.2C20.326 81.4 20.926 80.6 21.626 79.9C22.3148 79.2686 22.9953 78.629 23.6771 77.9883L23.6772 77.9882C25.3709 76.3963 27.0722 74.7973 28.926 73.3C48.926 57.5 69.126 42 90.226 27.7C92.5211 26.1427 94.9505 24.5853 97.2941 23.083L97.2943 23.0828C97.8098 22.7524 98.3212 22.4246 98.826 22.1C99.226 21.9 99.626 21.7 100.026 21.4C100.102 21.5146 100.164 21.6 100.217 21.6729L100.217 21.673C100.302 21.791 100.364 21.8764 100.426 22ZM107.355 35.4442C107.542 35.2315 107.732 35.0157 107.926 34.8C107.626 34.6 107.526 34.5 107.526 34.5L107.526 34.5001C106.026 35.6001 104.526 36.7 103.026 37.7C86.326 48.8 70.226 60.7 54.326 72.8C49.6261 76.2999 45.0262 79.8999 40.4262 83.4998L40.426 83.5C39.526 84.2 38.726 85 38.026 85.8C37.426 86.5 37.126 87.4 37.826 88.2C38.526 89.1 39.426 89 40.226 88.5C41.326 87.9 42.426 87.2 43.426 86.4C45.176 85 46.901 83.575 48.626 82.15C50.351 80.725 52.076 79.3 53.826 77.9C65.926 68.4 78.126 58.9 90.326 49.5L105.326 37.5C106.032 36.951 106.676 36.2175 107.355 35.4442Z" />
              </svg>
            </figure>
            <img src={about14} className="rounded position-relative zindex-2" alt="feature-img" />
            <div className="bg-white rounded d-flex align-items-center position-absolute top-0 end-0 mt-n5 px-3 py-2 d-none d-lg-block">
              <p className="text-dark fw-bold mb-0">Meeting with</p>
              <ul className="mb-0 align-items-center">
                <li className="avatar avatar-xs me-1">
                  <img className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
                </li>
                <li className="avatar avatar-xs">
                  <img className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                </li>
              </ul>
            </div>
            <Card className="card-body position-absolute bottom-0 start-0 ms-xl-n8 mb-n5">
              <p>Our lovely customers</p>
              <div className="d-flex align-items-center">
                <ul className="avatar-group mb-0 align-items-center">
                  {avatars.map((avatar, idx) => (
                    <li className="avatar avatar-xs" key={idx}>
                      <img className="avatar-img rounded-circle" src={avatar} alt="avatar" />
                    </li>
                  ))}
                </ul>
                <h6 className="text-white mb-0 ms-2">5K+</h6>
              </div>
              <hr />
              <div className="overflow-hidden">
                <div className="d-flex justify-content-between mb-2">
                  <small>Satisfaction Rate</small>
                  <small>80%</small>
                </div>
                <ProgressBar  now={80} variant="primary" style={{ width: "100%" ,height:"5px"}} />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Hero