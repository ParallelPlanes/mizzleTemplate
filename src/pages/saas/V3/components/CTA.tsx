import {Button, Row, Col, Container, Form} from "react-bootstrap";
import comingSoonImg from '@/assets/images/elements/comming-soon.png'
import {BsPatchCheckFill} from "react-icons/bs";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="bg-primary bg-opacity-10">
            <Container>
                <Row className="g-sm-6 align-items-center">

                    <Col lg={6} className="mb-5 mb-sm-0">

                        <h2 className="mb-0">Join <span className="text-primary">4,500+ </span> Startups growing with
                            Mizzle
                        </h2>

                        <Row className="mt-4">
                            <Col md={6}>
                                <ul className="list-group list-group-borderless">
                                    <li className="list-group-item heading-color pb-0">
                                        <BsPatchCheckFill className="text-primary me-2"/>30 days free trial
                                    </li>
                                    <li className="list-group-item heading-color pb-0">
                                        <BsPatchCheckFill className="text-primary me-2"/>Personalization
                                        onboarding
                                    </li>
                                    <li className="list-group-item heading-color pb-0">
                                        <BsPatchCheckFill className="text-primary me-2"/>Access to all features
                                    </li>
                                </ul>
                            </Col>

                            <Col md={6}>
                                <ul className="list-group list-group-borderless">
                                    <li className="list-group-item heading-color pb-0">
                                        <BsPatchCheckFill className="text-primary me-2"/>Web + mobile app
                                    </li>
                                    <li className="list-group-item heading-color pb-0">
                                        <BsPatchCheckFill className="text-primary me-2"/>Very easy customization
                                    </li>
                                    <li className="list-group-item heading-color pb-0">
                                        <BsPatchCheckFill className="text-primary me-2"/>Cloud-based
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row as={Form} className="g-2 align-items-center mt-4">
                            <Col md={8} lg={6} xxl={8}>
                                <Form.Control size='lg' type="email" placeholder="Enter your email address"/>
                            </Col>
                            <Col md={4} lg={6} xxl={4}>
                                <Button size='lg' variant='dark' type="submit" className="m-0">Subscribe for
                                    free</Button>
                            </Col>
                            <div className="small mt-2">By subscribing you agree to our
                                <Link to="" className="text-decoration-underline">Privacy Policy</Link>
                            </div>
                        </Row>
                    </Col>

                    <Col lg={6} className="position-relative">
                        <img src={comingSoonImg} className="position-relative z-index-2"
                             alt="CTA-image"/>

                        <figure className="position-absolute top-0 start-0 mt-n5">
                            <svg width="96" height="99" viewBox="0 0 96 99" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-mode"
                                      d="M66.5204 64.3653C68.4878 62.2239 69.8711 59.7411 70.3936 56.886C72.4225 45.5894 64.3072 35.5653 52.1035 36.6825C44.603 37.3653 38.9777 44.5653 39.8999 52.0446C40.6684 58.2205 45.9556 62.4101 51.8576 61.448C54.6549 60.9825 56.776 59.4929 58.0363 56.886C59.02 54.8377 58.7126 52.5101 57.2985 51.0205C55.7923 49.4377 51.8576 48.6308 49.798 49.4377C49.4599 49.5618 49.2447 50.2136 49.4599 50.5239C49.7673 50.9273 50.1054 51.2687 50.4743 51.6101C51.1506 52.2308 51.8576 52.8205 52.5031 53.4722C52.9028 53.8756 52.872 54.4032 52.4724 54.8067C51.5195 55.8618 50.3206 56.048 49.0603 55.6756C46.9393 55.0239 45.8019 53.4411 45.4023 51.2998C44.3571 45.7136 49.4292 42.0205 53.1487 41.7722C58.6511 41.3687 63.5694 44.7205 65.1679 49.9963C66.7356 55.086 65.2294 59.7411 60.9873 62.9377C59.7884 63.8377 58.4666 64.5515 57.0219 65.017C53.0872 66.3204 49.1525 66.3515 45.2793 65.017C37.9325 62.5032 34.1823 56.6377 35.1352 48.5998C35.7193 43.6963 37.7788 39.4446 41.0065 35.7825C42.3898 34.1998 43.8653 32.7101 46.0478 32.3067C46.14 32.3067 46.2015 32.2446 46.2937 32.2136C46.5089 32.0894 46.5396 31.5308 46.3245 31.3136C46.0478 30.9722 45.6789 30.7549 45.2793 30.7239C44.4493 30.5998 43.6501 30.7239 42.8201 31.0032C41.2832 31.5618 40.0536 32.4929 38.8855 33.6101C34.336 37.9239 31.6616 43.2308 31.0468 49.4998C30.1861 58.4377 34.2745 65.048 41.8365 68.7101C44.8182 70.1377 47.9844 70.7273 51.2736 70.7584C52.3494 70.6963 53.4253 70.6653 54.5012 70.5101C59.2351 69.8584 63.2928 67.9032 66.5204 64.3653Z"></path>
                                <path className="fill-primary"
                                      d="M0.769309 44.5963C2.36777 45.8998 3.99697 47.2032 5.65692 48.4756C7.99313 50.2446 10.6367 51.0205 13.8337 51.1136C13.7722 51.1136 14.0488 51.1446 14.264 51.0825C14.4792 51.0205 14.7866 50.9274 14.8481 50.7412C14.9096 50.586 14.8173 50.2446 14.6944 50.0894C14.0796 49.5308 13.4955 48.9101 12.7885 48.4756C10.1449 46.8929 7.53204 45.3101 4.70399 44.0998C3.6281 43.6343 2.52147 43.3239 1.41484 42.9515C1.10745 42.8584 0.769309 42.8584 0.431173 42.8584C0.123776 42.8584 -0.152881 43.3549 0.00081747 43.6032C0.246735 43.9446 0.461913 44.3481 0.769309 44.5963Z"></path>
                                <path className="fill-primary"
                                      d="M55.6683 15.2692C55.822 15.2692 56.0064 15.3002 56.1294 15.2071C56.6212 14.8657 56.8364 14.3071 57.0823 13.7795C58.4349 10.614 60.1563 7.66572 62.0007 4.77951C62.6462 3.78641 63.2303 2.79331 63.8451 1.8002C64.0602 1.45882 64.2447 1.05537 64.3676 0.68296C64.3984 0.558822 64.3369 0.372615 64.2447 0.217443C64.091 -0.0308331 63.8143 0.00020143 63.5991 0.0933049C63.384 0.186408 63.1688 0.341581 62.9536 0.465719C58.0967 3.91055 56.1601 8.93813 55.4531 14.6795C55.4839 14.7726 55.4839 14.9278 55.5453 15.114C55.5453 15.1761 55.6376 15.2692 55.6683 15.2692Z"></path>
                                <path className="fill-primary"
                                      d="M24.5905 26.6586C23.3916 23.0896 22.1928 19.5207 20.9325 15.9827C20.3791 14.4 19.6721 12.8793 18.9959 11.3586C18.8729 11.0793 18.627 10.831 18.4425 10.6138C18.2274 10.7069 18.0122 10.7379 17.9507 10.831C17.7048 11.2034 17.797 11.6379 17.8278 12.0414C18.2888 17.9689 20.6251 23.1827 23.8835 28.0551C23.9757 28.1793 24.0986 28.3345 24.2216 28.3965C24.3446 28.4586 24.5597 28.5517 24.6827 28.4896C24.8057 28.4586 24.9286 28.2414 24.8979 28.1172C24.8364 27.6207 24.7442 27.1241 24.5905 26.6586Z"></path>
                                <path className="fill-primary"
                                      d="M56.5302 83.9173C56.4072 83.8862 56.1613 83.9483 56.0998 84.0414C55.7924 84.7241 55.4851 85.4069 55.2699 86.1207C54.6243 88.1379 53.8251 90.0621 52.3189 91.5828C51.9192 91.9862 51.6119 92.5138 51.2737 93.0104C50.3208 94.4069 49.6753 95.9586 49.0912 97.5104C48.9682 97.8207 48.9682 98.1621 48.9375 98.5035C48.9375 98.6586 48.999 98.9379 49.0912 98.9379C49.3064 99 49.6445 99.0311 49.7675 98.9069C51.1815 97.2621 52.5033 95.5241 54.0095 93.9724C55.9461 91.8931 56.8376 89.4724 56.8683 86.6793C56.8683 86.3379 56.9298 85.9966 56.9606 85.469C56.9298 85.1897 56.9298 84.6931 56.8683 84.1966C56.8376 84.0724 56.6532 83.9173 56.5302 83.9173Z"></path>
                                <path className="fill-primary"
                                      d="M80.4469 37.086C81.031 37.1481 81.615 37.1791 82.1683 37.055C83.8897 36.7136 85.6112 36.6205 87.3633 36.7136C89.8533 36.9308 92.3124 36.4033 94.7716 36.124C95.079 36.0929 95.4171 35.9377 95.6938 35.7826C95.8167 35.7205 96.0319 35.4722 96.0012 35.4412C95.8782 35.2239 95.7245 35.0067 95.5401 34.9136C95.3249 34.7895 95.079 34.7584 94.8331 34.7274C92.5276 34.4791 90.2221 34.2619 87.9166 34.0446C85.2423 33.7653 82.8753 34.7895 80.5391 35.8446C80.3854 35.9067 80.2625 36.0308 80.1702 36.155C80.078 36.2791 79.9551 36.4964 80.0165 36.5895C80.078 36.7757 80.2625 37.055 80.4469 37.086Z"></path>
                                <path className="fill-primary"
                                      d="M78.4176 68.4311C78.2332 68.6173 78.1717 68.8656 78.3254 69.1139C78.4484 69.3311 78.5713 69.5484 78.7865 69.7035C80.7231 71.1001 82.0141 72.9932 83.2437 75.0104C84.3196 76.8104 85.7951 78.269 87.3936 79.6346C87.6088 79.8208 87.9469 80.069 88.2543 79.7587C88.3773 79.6035 88.4387 79.2311 88.3773 79.0759C87.0247 76.5001 85.7644 73.8621 84.0737 71.4725C82.8134 69.7346 80.8768 68.9277 78.9709 68.2139C78.6943 68.2759 78.5406 68.338 78.4176 68.4311Z"></path>
                                <path className="fill-primary"
                                      d="M18.9031 80.3173C16.1058 81.0621 13.8311 82.6759 11.8023 84.7242C11.7408 84.7863 11.6793 84.8483 11.6793 84.9104C11.6486 84.9725 11.6486 85.0966 11.6793 85.1587C11.7715 85.2518 11.9252 85.4069 12.0174 85.4069C12.2634 85.3759 12.5093 85.2828 12.7245 85.1587C16.0443 83.1414 19.6409 82.0242 23.4526 81.5276C23.9444 81.4656 24.4363 81.3725 24.8974 80.7207C22.8071 79.7897 20.8397 79.7897 18.9031 80.3173Z"></path>
                            </svg>
                        </figure>

                        <figure className="position-absolute end-0 bottom-0 mb-5">
                            <svg className="fill-dark" width="78" height="86" viewBox="0 0 78 86" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M58.1663 52.6936C57.2433 52.922 56.3362 53.183 55.4053 53.3705C49.0479 54.6836 43.0644 57.0976 37.1287 59.6911C34.0096 61.053 30.986 62.5537 28.1057 64.405C24.7877 66.5417 21.788 69.0862 19.0032 71.8836C15.4465 75.4475 11.9694 79.1012 8.50824 82.763C7.64095 83.6765 6.94872 84.7612 5.99391 86.0008C5.5722 84.8509 5.66768 84.125 6.25648 83.4236C7.16355 82.339 7.99901 81.1727 8.96973 80.1533C12.7253 76.2386 16.4809 72.324 20.3161 68.4909C22.8463 65.9627 25.8142 64.0053 28.9014 62.2927C35.7362 58.5085 42.9132 55.5073 50.3607 53.2319C52.1192 52.6936 53.9572 52.3919 55.7793 52.0983C56.559 51.9759 57.3786 52.1472 58.1743 52.188C58.1743 52.3592 58.1742 52.5224 58.1663 52.6936Z"></path>
                                <path
                                    d="M0.00390625 83.4154C1.49182 81.2949 3.07521 79.2316 4.43582 77.0215C5.40654 75.4393 6.11469 73.6858 6.87854 71.9813C8.15162 69.1351 9.40083 66.2806 10.5943 63.4017C11.0717 62.26 11.3741 61.0529 11.7799 59.8867C12.7665 57.0649 13.785 54.2512 14.7716 51.4294C15.7901 48.5016 16.2118 45.4596 16.4107 42.3686C16.4425 41.9119 16.3869 41.4063 16.5778 41.0311C16.7449 40.6967 17.1984 40.5092 17.5247 40.2563C17.7475 40.5907 18.0498 40.9088 18.1692 41.2839C18.2646 41.5694 18.1373 41.9282 18.1214 42.2545C17.8668 46.8949 16.5221 51.2745 14.9387 55.5806C13.2917 60.0498 11.6128 64.5109 9.75888 68.8986C7.77765 73.5961 5.50202 78.1551 2.05675 81.9637C1.48386 82.5998 0.823452 83.1544 0.210782 83.7498C0.139171 83.6274 0.0675602 83.5214 0.00390625 83.4154Z"></path>
                                <path
                                    d="M34.957 48.3875C34.1852 47.2294 34.3602 46.5117 34.7819 45.8103C35.4821 44.6359 36.1982 43.4697 36.9064 42.2953C38.9751 38.8292 41.0677 35.3794 43.0808 31.8889C44.0993 30.1191 45.0939 28.3167 45.8657 26.4328C46.3988 25.1361 46.542 23.6681 46.8523 22.2735C46.8762 22.1512 46.8046 22.0125 46.8125 21.882C46.8682 21.042 47.4809 20.3325 47.9185 20.6506C48.3084 20.936 48.7221 21.6292 48.6505 22.0451C48.4437 23.1869 48.1174 24.3613 47.6082 25.3889C45.6668 29.3036 43.6935 33.2019 41.6088 37.035C40.1209 39.7753 38.4182 42.3932 36.8348 45.0845C36.4767 45.688 36.2539 46.3731 35.9197 47.001C35.681 47.4088 35.3707 47.784 34.957 48.3875Z"></path>
                                <path
                                    d="M68.3681 68.0586C67.3019 68.1402 66.8802 67.7324 66.8563 66.8353C66.7847 63.9972 66.2675 61.2325 65.3843 58.5411C65.1536 57.8479 65.1377 57.1547 66.0129 57.0079C66.7052 56.8856 66.9996 57.4157 67.111 58.0763C67.5645 60.8573 68.0578 63.6302 68.4875 66.4194C68.567 66.9576 68.4079 67.5367 68.3681 68.0586Z"></path>
                                <path
                                    d="M61.1509 56.4287C60.9997 56.9588 60.944 57.5215 60.6894 57.9619C59.1696 60.6206 57.5862 63.2386 56.0506 65.8891C55.5732 66.7047 55.1594 67.561 54.6343 68.5478C53.8307 67.7404 53.4408 67.1043 54.1728 66.248C56.4484 63.5729 57.7693 60.3026 59.4402 57.2524C59.7823 56.6326 60.0926 56.1514 61.1509 56.4287Z"></path>
                                <path
                                    d="M12.2033 36.2847C12.4818 38.0544 12.458 38.0707 11.3042 38.5519C9.01269 39.5143 6.73706 40.4929 4.45348 41.4716C3.44297 41.9038 3.31566 41.8223 2.92578 40.4848C5.97322 39.1065 9.00474 37.7364 12.2033 36.2847Z"></path>
                                <path
                                    d="M31.7987 34.001C31.5998 34.5882 31.377 35.2407 31.194 35.7708C28.8627 35.0776 26.8019 34.4659 24.7411 33.8624C24.3751 33.7564 23.9215 33.7645 23.6669 33.5362C23.3805 33.2752 23.2611 32.8103 23.0781 32.4352C23.4441 32.2884 23.8579 31.9459 24.1841 32.0111C26.5393 32.5086 28.8866 33.0876 31.2338 33.6504C31.3452 33.6748 31.4486 33.7727 31.7987 34.001Z"></path>
                                <path
                                    d="M69.3222 55.915C69.8473 56.91 70.3009 57.8479 70.834 58.7368C71.5023 59.8378 72.1707 60.947 72.9743 61.9501C73.4438 62.5373 73.4517 63.0593 73.0459 63.4997C72.5765 64.0135 71.8843 63.8667 71.5501 63.3284C70.3327 61.3303 69.1392 59.3077 68.073 57.2281C67.6194 56.3391 68.2639 55.9314 69.3222 55.915Z"></path>
                                <path
                                    d="M52.9551 28.8386C51.873 28.3493 51.7457 27.6316 51.7059 26.8079C51.5786 24.5162 51.4354 22.2245 50.4487 20.0959C50.2259 19.6229 50.2419 19.0928 50.8307 19.0276C51.133 18.9949 51.6423 19.3375 51.7855 19.6392C52.1435 20.3977 52.4538 21.2214 52.5971 22.0533C52.9153 23.9209 53.1461 25.8048 53.3609 27.6887C53.3848 28.0068 53.1222 28.3656 52.9551 28.8386Z"></path>
                                <path
                                    d="M69.9609 53.24C71.5045 53.4928 72.8731 53.6967 74.2417 53.9332C75.1726 54.0963 76.0876 54.3328 77.0265 54.447C77.8699 54.553 78.0848 55.0179 77.9813 55.7845C77.8699 56.5919 77.2493 56.7958 76.7162 56.5348C74.8384 55.6377 72.8492 55.3523 70.8282 55.1321C70.0405 55.0505 70.0485 54.9853 69.9609 53.24Z"></path>
                                <path
                                    d="M20.6819 40.1992C21.5094 41.2431 22.321 42.1565 22.9973 43.1515C23.7293 44.2199 24.4056 45.3372 24.9706 46.4953C25.1377 46.8378 24.8671 47.4087 24.8035 47.8817C24.3738 47.7268 23.8168 47.6941 23.5543 47.3924C23.1007 46.8623 22.87 46.1446 22.4801 45.5492C21.7401 44.4238 21.0161 43.2657 20.1567 42.2299C19.4884 41.4225 19.4884 40.9087 20.6819 40.1992Z"></path>
                                <path
                                    d="M20.5234 20.0959C21.5101 20.2509 21.4146 21.0175 21.3271 21.4905C20.8019 24.3613 20.1813 27.2157 19.5845 30.1109C18.6695 30.3964 17.9295 30.1436 18.2399 29.1812C19.0833 26.547 19.3697 23.823 19.8551 21.1235C19.9187 20.7402 20.3086 20.414 20.5234 20.0959Z"></path>
                                <path
                                    d="M56.9658 14.5664C58.4538 14.86 59.9576 15.0884 61.4216 15.4554C62.3685 15.6919 62.6947 16.2954 62.3923 16.956C62.0661 17.6818 61.4057 17.5921 60.9204 17.3393C59.2813 16.4911 57.5626 16.2546 55.7644 16.3606C55.5257 16.3769 55.2154 16.3117 55.0483 16.1567C54.8414 15.9692 54.6107 15.6266 54.6345 15.382C54.6663 15.1454 54.9926 14.8111 55.2233 14.7785C55.7803 14.6887 56.3611 14.7458 56.9261 14.7458C56.942 14.6887 56.9499 14.6235 56.9658 14.5664Z"></path>
                                <path
                                    d="M28.1863 44.5381C27.7168 44.1874 27.1678 43.902 26.7859 43.4697C25.5526 42.0588 24.3909 40.5827 23.1815 39.1554C22.7836 38.6824 22.6484 38.1686 23.1417 37.8098C23.3804 37.6385 24.0488 37.7282 24.2636 37.9647C25.7038 39.449 27.1121 40.966 28.425 42.5645C28.7273 42.9315 28.6239 43.641 28.7114 44.1874C28.5284 44.3016 28.3534 44.4158 28.1863 44.5381Z"></path>
                                <path
                                    d="M60.49 47.9877C60.0603 47.8491 59.5113 47.8409 59.3283 47.5718C57.9915 45.59 56.1297 44.2525 53.9336 42.9476C54.4508 42.3604 54.8407 41.92 55.2146 41.4878C59.9569 45.223 60.6013 45.9978 60.49 47.9877Z"></path>
                                <path
                                    d="M13.0865 32.6066C12.6488 32.3049 12.1953 32.0357 11.7816 31.7014C10.4528 30.633 9.13196 29.5483 7.83501 28.4392C7.47695 28.1292 6.91998 27.6725 6.96772 27.3626C7.03138 26.9141 7.56448 26.5308 7.83501 26.1882C9.70484 27.7459 11.4474 29.1405 13.0944 30.633C13.4525 30.9592 13.4684 31.6851 13.6355 32.2233C13.4604 32.3538 13.2774 32.4843 13.0865 32.6066Z"></path>
                                <path
                                    d="M49.1122 8.72714C48.8576 8.28674 48.3563 7.83003 48.3882 7.4141C48.5632 5.20396 48.8497 2.99381 49.1441 0.791818C49.1759 0.547153 49.526 0.343264 49.8363 0.000732422C50.2341 0.685796 50.5365 1.21591 50.8468 1.75417C50.7513 1.75417 50.6479 1.76233 50.5524 1.76233C50.2898 4.02956 50.0193 6.2968 49.7567 8.55588C49.5419 8.61296 49.3271 8.67005 49.1122 8.72714Z"></path>
                                <path
                                    d="M51.2461 58.9816C53.3546 57.4076 55.4791 55.8254 57.5797 54.2595C58.4867 54.6591 58.3992 55.2463 57.9457 55.8335C57.6751 56.1761 57.2853 56.437 56.9272 56.7062C55.5507 57.7419 54.1662 58.7695 52.7738 59.7971C51.9781 60.3843 51.7792 60.2783 51.2461 58.9816Z"></path>
                                <path
                                    d="M68.8047 50.9075C69.2105 50.2958 69.5924 49.5618 70.1176 48.9665C71.2235 47.7105 72.433 46.5525 73.5549 45.3047C73.9527 44.8643 74.3744 44.5707 74.8677 44.9132C75.5361 45.3781 75.1542 46.0142 74.812 46.4464C74.3744 46.9929 73.7856 47.4169 73.2764 47.9063C72.2579 48.8931 71.2474 49.8962 70.2369 50.8912C69.8709 51.2664 69.5049 51.6986 68.8047 50.9075Z"></path>
                                <path
                                    d="M42.977 16.271C40.1763 16.32 38.1075 14.5013 35.625 13.8651C36.4127 12.1851 36.4048 12.2504 37.5664 12.7968C39.0146 13.4737 40.5025 14.0772 42.0143 14.6155C42.7065 14.852 43.1919 15.0885 42.977 16.271Z"></path>
                                <path
                                    d="M38.3477 8.30308C39.4298 6.71275 39.6923 6.79431 40.6631 8.25414C41.2917 9.19203 42.2783 9.88525 43.1138 10.6845C43.3843 10.9455 43.7662 11.1412 43.9333 11.4593C44.0447 11.6795 43.9651 12.1362 43.798 12.3401C43.6469 12.5195 43.1774 12.6337 42.9864 12.5276C42.326 12.1362 41.6815 11.6958 41.1246 11.1738C40.2016 10.2849 39.3422 9.32252 38.3477 8.30308Z"></path>
                                <path
                                    d="M15.1309 39.0085C14.192 42.0097 11.9562 44.0486 10.4524 46.691C9.64076 46.0222 9.93516 45.3535 10.2296 44.8478C11.3276 42.9639 12.5052 41.1289 13.6351 39.2613C13.9613 38.7312 14.3273 38.5273 15.1309 39.0085Z"></path>
                                <path
                                    d="M52.6367 18.106C52.9072 17.7879 53.0584 17.4699 53.2971 17.3802C53.5438 17.2823 53.9416 17.3149 54.1405 17.4617C54.427 17.6901 54.5623 18.0978 54.8089 18.3914C55.5568 19.2722 56.3287 20.1204 57.0766 20.9931C57.5619 21.5558 57.4744 22.5345 56.8697 22.8362C56.265 23.138 55.8592 22.9178 55.4852 22.2898C54.8964 21.2948 54.1485 20.3977 53.4881 19.4517C53.2016 19.0357 52.955 18.6035 52.6367 18.106Z"></path>
                                <path
                                    d="M26.6668 24.6467C27.2556 25.8374 27.3034 26.4083 26.4997 27.0689C25.2266 28.121 24.1047 29.3688 22.959 30.5758C22.3861 31.1793 21.9325 31.1467 21.3438 30.4698C22.959 28.4554 24.7333 26.6367 26.6668 24.6467Z"></path>
                                <path
                                    d="M38.871 21.7271C38.4732 21.197 38.1708 20.7893 37.7969 20.2836C38.1231 20.0063 38.3698 19.6312 38.6721 19.5659C40.2714 19.2397 41.8787 18.9869 43.4859 18.7177C43.6133 18.6933 43.7406 18.7096 43.8679 18.7014C44.4408 18.6851 44.9341 18.8646 44.9341 19.5251C44.9341 20.145 44.5283 20.4549 43.9156 20.3896C42.1492 20.2102 40.534 20.6669 38.871 21.7271Z"></path>
                                <path
                                    d="M63.9457 39.4002C63.9457 42.0263 63.9457 44.6605 63.9457 47.2213C63.0943 47.6291 62.6407 47.4578 62.6407 46.626C62.6407 44.6116 62.6328 42.5971 62.7442 40.5909C62.7681 40.1097 63.2216 39.6612 63.4762 39.1963C63.6274 39.2615 63.7865 39.3268 63.9457 39.4002Z"></path>
                                <path
                                    d="M69.0926 41.0229C68.5674 43.5267 68.0502 46.0222 67.533 48.5097C67.3898 48.5423 67.2466 48.5668 67.1034 48.5994C66.9204 48.1916 66.5305 47.7675 66.5782 47.3924C66.809 45.4595 67.1591 43.5348 67.4614 41.602C67.6047 40.6559 68.1537 40.6641 69.0926 41.0229Z"></path>
                                <path
                                    d="M57.0229 3.83393C55.901 5.49765 54.7791 7.15323 53.5856 8.93113C53.0286 8.79249 52.3205 8.7354 52.7899 7.75673C53.3946 6.49263 54.0312 5.23668 54.7314 4.02966C55.2883 3.05915 55.6623 3.04284 57.0229 3.83393Z"></path>
                                <path
                                    d="M60.7625 9.07794C60.5 9.53465 60.3408 10.1545 59.9509 10.4073C58.7654 11.1658 57.4844 11.7611 56.259 12.4462C55.71 12.7561 55.2008 12.7072 54.9939 12.1444C54.9064 11.8998 55.2644 11.337 55.5588 11.1331C56.7205 10.342 57.922 9.61621 59.1473 8.93114C59.4974 8.73541 59.9669 8.75172 60.3727 8.67017C60.5 8.80065 60.6352 8.9393 60.7625 9.07794Z"></path>
                                <path
                                    d="M14.238 22.9829C14.6438 23.929 14.8905 24.4346 15.0735 24.9565C15.4952 26.1717 15.8612 27.4114 16.2829 28.6265C16.5853 29.5073 16.5693 30.1761 15.169 30.2739C14.5642 28.4471 13.88 26.5877 13.3628 24.6793C13.2673 24.3367 13.8004 23.7985 14.238 22.9829Z"></path>
                                <path
                                    d="M62.9977 64.6905C61.836 64.3398 61.653 63.8097 61.7883 63.0593C62.0508 61.5832 62.2418 60.0989 62.5521 58.6391C62.6237 58.2884 63.0216 58.0111 63.2682 57.7012C63.491 58.0355 63.9366 58.3944 63.9048 58.688C63.6581 60.6698 63.3239 62.6353 62.9977 64.6905Z"></path>
                                <path
                                    d="M56.4428 48.3221C56.3552 49.3497 56.0767 49.9451 55.1219 49.5862C54.1194 49.2111 53.1248 48.787 52.162 48.3221C51.5812 48.0448 50.9287 47.637 51.3823 46.8296C51.7164 46.2261 52.2973 46.2751 52.8861 46.5768C54.0716 47.1885 55.2731 47.7594 56.4428 48.3221Z"></path>
                                <path
                                    d="M46.5422 10.4317C46.1921 10.2359 45.6829 10.1381 45.5078 9.8363C44.8952 8.78423 44.378 7.66693 43.8528 6.56593C43.5744 5.97873 43.8051 5.44862 44.3541 5.32629C44.6246 5.2692 45.1577 5.66882 45.301 5.98689C45.8977 7.31624 46.391 8.69452 46.9241 10.0565C46.8048 10.1788 46.6695 10.3012 46.5422 10.4317Z"></path>
                                <path
                                    d="M6.95703 34.0093C8.46881 33.4874 9.84533 33.6423 11.2059 33.7483C11.3969 33.7647 11.6436 34.1806 11.7072 34.4497C11.747 34.621 11.5003 35.0532 11.3889 35.0532C10.084 35.0451 8.77117 35.0043 7.47422 34.8901C7.30713 34.8738 7.17982 34.4089 6.95703 34.0093Z"></path>
                            </svg>
                        </figure>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTA