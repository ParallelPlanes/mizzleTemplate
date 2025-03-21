import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import type {SwiperOptions} from "swiper/types";

import {Container} from "react-bootstrap";

import PricingCard from "@/pages/saas/V1/components/PricingCard";
import {pricingData} from "@/pages/saas/V1/data";

const Pricing = () => {

    const swiperOptions: SwiperOptions = {
        modules: [Pagination],
        loop: false,
        spaceBetween: 40,
        pagination: {
            "el": ".swiper-pagination"
        },
        breakpoints: {
            576: {slidesPerView: 1},
            768: {slidesPerView: 2},
            992: {slidesPerView: 3}
        }
    }

    return (
        <section className="pt-0">
            <Container>
                <div className="inner-container-small text-center mb-4 mb-sm-5">
                    <h2 className="mb-4">Discover our competitive plans</h2>
                    <p className="mb-0">Your agency's success deserves a pricing strategy that aligns with your goals.
                        We
                        offer a range of pricing plans crafted to meet your unique needs.</p>
                </div>

                <Swiper {...swiperOptions}>

                    {
                        pricingData.map((plan, idx) => (
                            <SwiperSlide key={idx}>
                                <PricingCard plan={plan}/>
                            </SwiperSlide>
                        ))
                    }

                    <div className="swiper-pagination swiper-pagination-primary position-relative mt-4"></div>
                </Swiper>
            </Container>
        </section>
    )
}

export default Pricing