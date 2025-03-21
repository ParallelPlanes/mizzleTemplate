import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {statData, testimonials} from "@/pages/saas/V4/data";
import CountUp from "react-countup";
import {BsArrowLeft, BsArrowRight, BsPatchCheck, BsSendFill} from "react-icons/bs";

import {Swiper, SwiperSlide} from "swiper/react";
import type {SwiperOptions} from "swiper/types";
import {Navigation, Pagination} from "swiper/modules";
import TestimonialCard from "@/pages/saas/V4/components/TestimonialCard";
import { Link } from "react-router-dom";

const Testimonials = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Pagination, Navigation],
        loop: false,
        pagination: {
            "el": ".swiper-pagination",
            "type": "fraction"
        },
        navigation: {
            "nextEl": ".swiper-button-next",
            "prevEl": ".swiper-button-prev"
        },
        wrapperClass: "pb-4 pb-md-6",
    }


    return (
        <section className="pb-0">
            <Container>

                <div className="inner-container-small text-center mb-4 mb-sm-5">
                    <h2 className="mb-4">Our customer's experience</h2>
                    <p className="mb-0">The chatbot can be personalized to match the brand voice and tone, making it
                        feel like an extension of the company's customer support team.</p>
                </div>

                <Row className="mb-7">
                    <Col md={10} className="mx-auto">
                        <Row className="row-cols-2 row-cols-md-3 g-4 justify-content-center align-items-center">
                            {
                                statData.map((item, idx) => (
                                    <Col key={idx}>
                                        <div className="d-flex justify-content-center">
                                            {
                                                item.prefix &&
                                                <span className="h2 text-primary mb-0">{item.prefix}</span>
                                            }
                                            <h2 className="purecounter mb-0">
                                                <CountUp end={item.stat} delay={0.3}/>
                                            </h2>
                                            {
                                                item.suffix &&
                                                <span className="h2 text-primary mb-0">{item.suffix}</span>
                                            }
                                        </div>
                                        <p className="text-center heading-color mb-0">{item.title}</p>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>


                <Row className="g-4 g-lg-6">

                    <Col xl={5} className="position-relative order-1">
                        <Card className="bg-dark p-4 p-sm-5 overflow-hidden h-100" data-bs-theme="dark">
                            <Card.Body className="z-index-1 p-0 mb-5">
                                <div className="text-bg-primary d-inline-block rounded small py-1 px-2 mb-3 icons-center">
                                    <BsPatchCheck className="me-2"/>Weekly news
                                </div>
                                <Card.Title as={'h4'}>Subscribe to our mailing list and stay to
                                    date</Card.Title>
                            </Card.Body>

                            <Card.Footer className="bg-transparent p-0 z-index-1">
                                <Form className="input-group mb-2">
                                    <Form.Control size='lg' className="rounded border me-3"
                                                  type="email"
                                                  placeholder="Enter your email"/>
                                    <button type="button" className="btn btn-white rounded-2 mb-0 flex-centered">
                                        <BsSendFill/></button>
                                </Form>
                                <span className="text-white">✌️ We promise not to spam!</span>
                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col xl={7} className="order-xl-2">
                        <Swiper className="overflow-hidden" {...swiperOptions}>

                            {
                                testimonials.map((testimonial, idx) => (
                                    <SwiperSlide key={idx}>
                                        <TestimonialCard testimonial={testimonial}/>
                                    </SwiperSlide>
                                ))
                            }

                            <div className="d-flex gap-3">
                                <Link to=""
                                   className="btn btn-dark border btn-icon btn-lg rounded-circle mb-0 swiper-button-prev">
                                    <BsArrowLeft/></Link>
                                <Link to=""
                                   className="btn btn-dark border btn-icon btn-lg rounded-circle mb-0 swiper-button-next">
                                    <BsArrowRight/></Link>
                            </div>

                        </Swiper>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Testimonials