import { BsArrowRight, BsLightningCharge, BsStarFill, BsStarHalf } from 'react-icons/bs';
import pattern2 from '@/assets/images/elements/bg-pattern-2.png'
import decorationImg13 from '@/assets/images/elements/saas-decoration/13.png'
import decorationImg14 from '@/assets/images/elements/saas-decoration/14.png'
import decorationImg15 from '@/assets/images/elements/saas-decoration/15.png'
import saasBackground from '@/assets/images/bg/saas-bg-3.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import { Col, Container, Row } from "react-bootstrap";

import Parallax from "@/components/Parallax";
import { Link } from 'react-router-dom';
import { currency } from '@/states/constants';


const Hero = () => {
  return (
    <section className="parallax-wrap position-relative overflow-hidden pt-xl-9">

      <div className="bg-dark position-absolute top-0 end-0 w-30 h-100 d-none d-xl-block"
        style={{
          backgroundImage: `url(${pattern2})`,
          backgroundPosition: 'center left',
          backgroundSize: 'cover'
        }}></div>

      <Container className="py-5">
        <Row>
          <Col xl={5} className="mb-7 mb-xl-0"> 

            <div className="alert alert-light rounded-pill d-inline-block py-2 px-3 mb-4">
              <span className="badge text-bg-dark rounded-pill me-sm-2 px-sm-3">Mizzle 2023 release</span>
              <Link className="icon-link icon-link-hover small" to="">Join waitlist
                <BsArrowRight className='bi' />
              </Link>
            </div>

            <h1 className="display-6 mb-4">Powering your potential through innovative SaaS</h1>
            <p className="mb-4 mb-xl-5">Two before narrow not relied on how except moment assurance Mrs led
              certainly So gate at no only none open Betrayed.</p>

            <div className="d-flex gap-1 gap-sm-3 flex-wrap mb-4 mb-xl-7">
              <button className="btn btn-lg btn-dark icons-center" type="button">
                <BsLightningCharge className="me-2" />Get started
              </button>
              <button className="btn btn-lg btn-white border" type="button">Buy directly<span
                className="badge bg-primary ms-2">{currency}8.99</span></button>
            </div>

            <div className="d-sm-flex align-items-center">

              <ul className="avatar-group mb-0 align-items-center">
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src={avatar6}
                    alt="avatar" />
                </li>
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src={avatar5}
                    alt="avatar" />
                </li>
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src={avatar2}
                    alt="avatar" />
                </li>
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src={avatar3}
                    alt="avatar" />
                </li>
              </ul>

              <div className="ms-sm-3 mt-2 mt-sm-0">

                <ul className="list-inline mb-0 icons-center mb-1">
                  <li className="list-inline-item me-0"><BsStarFill size={18} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item me-0"><BsStarFill size={18} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item me-0"><BsStarFill size={18} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item me-0"><BsStarFill size={18} className="text-warning me-1" />
                  </li>
                  <li className="list-inline-item me-0"><BsStarHalf size={18} className="text-warning me-2" />
                  </li>
                  <li className="list-inline-item heading-color fw-bold me-0">4.5 / 5.0</li>
                </ul><br />
                <small>From 500+ reviews</small>
              </div>

            </div>
          </Col>


          <Col xl={7} className="ps-5 mb-7 mb-xl-0">
            <div className="position-relative">
              <Parallax>
                <img src={saasBackground}
                  className="rounded-4 shadow position-relative z-index-2" alt="saas-img" />

                <figure className="position-absolute top-0 end-0 mt-n6 me-n6">
                  <svg width="96" height="65" viewBox="0 0 96 65" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M94.9919 63.2714C82.6891 61.8686 77.2202 59.7299 91.3798 50.3496C66.2559 55.442 60.7782 53.2998 84.2845 18.2965C49.8205 49.0145 44.3428 46.8723 38.7088 2.15405C33.3785 42.6297 27.901 40.4875 12.9697 20.3782C16.9453 36.203 11.4677 34.0608 1.77521 27.0778"
                      stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
                  </svg>
                </figure>

                <figure className="position-absolute bottom-0 start-0 mb-n7 ms-n6">
                  <svg className="mb-n3" width="181" height="125" viewBox="0 0 181 125" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-primary"
                      d="M28.1232 89.1218L29.2708 90.0071L30.467 90.8429L31.6994 91.6172L32.9561 92.342L34.2612 93.0173L35.5904 93.6433L36.9559 94.2076L38.3334 94.7349L39.7471 95.2006L41.1727 95.6294L42.6226 96.0088L44.0962 96.3389L45.5821 96.6321L47.0798 96.8883L48.6015 97.0953L50.1354 97.2653L51.681 97.3985L53.2263 97.4823L54.7714 97.5419L56.3283 97.5644L57.8728 97.5503L59.4292 97.4991L60.9853 97.4235L62.529 97.3111L64.0724 97.1741L65.6033 97.0006L67.1338 96.8025L68.6398 96.5799L70.1331 96.3208L71.6139 96.0496L73.0701 95.7539L74.5017 95.434L75.9084 95.0896L77.0214 94.7972L76.6083 95.2182L75.9514 95.8133L75.2091 96.4461L74.4055 97.0916L73.5776 97.7374L72.7617 98.3709L72.3718 98.669L71.9821 98.9671L71.6167 99.2405L71.2759 99.5136L70.9471 99.7744L70.6671 100.01L69.5104 100.917L68.3044 101.799L67.0247 102.682L66.3542 103.118L65.6595 103.578L64.9401 104.039L64.1965 104.525L63.4407 105.022L62.6606 105.545C62.3194 105.769 62.2374 106.224 62.4611 106.566C62.6845 106.907 63.1389 106.989 63.4679 106.777L64.248 106.255L65.0038 105.757L65.7474 105.271L66.4667 104.81L67.1616 104.35L67.8443 103.902L69.1604 103.006L70.4153 102.099L71.5965 101.168L71.8763 100.932L72.193 100.683L72.5338 100.41L72.8992 100.137L73.2769 99.8512L73.6788 99.5406L74.4947 98.9072L75.3349 98.249L76.1505 97.5911L76.9296 96.9457L77.635 96.3011L78.2183 95.7067L78.4855 95.4096L78.716 95.1253L78.9096 94.8288L79.0663 94.5206L79.1859 94.1759L79.2074 93.8075L79.1431 93.4768L79.0305 93.1955L78.869 92.9638L78.6835 92.7568L78.4735 92.5747L78.2392 92.4173L77.9929 92.2723L77.7343 92.1397L77.4636 92.0194L77.1808 91.9115L76.8857 91.816L76.5661 91.7208L75.9149 91.5427L75.2148 91.3651L74.4775 91.1754L73.7158 90.986L72.9417 90.76L72.1552 90.5217L71.7496 90.3904L71.307 90.2472L70.8522 90.1165L70.3732 89.9858L69.8816 89.8431L69.3654 89.7005L68.2966 89.4281L67.1664 89.1438L65.9994 88.8477L64.7955 88.5396L63.5669 88.2318L62.314 87.9243L61.0486 87.6046L59.7955 87.2724L58.5422 86.9403C58.1613 86.8333 57.7465 87.058 57.6395 87.4639C57.5326 87.8455 57.7568 88.2607 58.1621 88.3674L59.4153 88.6995L60.693 89.0314L61.9584 89.3512L63.2114 89.6588L64.4399 89.9666L65.6438 90.2747L66.8108 90.5708L67.9166 90.8552L68.9732 91.14L69.477 91.2705L69.9562 91.4009L70.4232 91.5439L70.8778 91.6749L71.308 91.8059L71.7137 91.9372L72.5247 92.1751L73.3235 92.401L74.0975 92.6025L74.8346 92.7922L75.5103 92.9701L76.137 93.1484L76.4197 93.2317L76.6779 93.3152L76.8009 93.3632L75.59 93.6811L74.2077 94.0252L72.8007 94.345L71.3691 94.6404L69.9125 94.9115L68.4559 95.1581L66.9746 95.3802L65.4806 95.5658L63.9864 95.7268L62.4675 95.8634L60.9485 95.9756L59.4292 96.0632L57.9096 96.1017L56.3895 96.1156L54.8695 96.105L53.3489 96.0454L51.8402 95.9487L50.3436 95.8152L48.8589 95.6447L47.3861 95.4374L45.9253 95.193L44.4764 94.9117L43.0515 94.5812L41.6388 94.2136L40.25 93.7969L38.8976 93.3429L37.5695 92.8397L36.2654 92.2871L34.9853 91.6851L33.7417 91.0461L32.5223 90.3578L31.3514 89.6199L30.2168 88.8202L29.1187 87.9834L28.0568 87.0851L27.0435 86.1371L26.0665 85.1274L25.1502 84.0558L24.2825 82.9346L23.4511 81.7518L22.6805 80.5071L21.9581 79.1882L21.6213 78.5162L21.2969 77.832L20.9966 77.1229L20.7085 76.4015L20.4326 75.6676L20.1687 74.9213L19.9293 74.1503L19.7018 73.3671L19.4867 72.5712L19.2958 71.7506L19.1171 70.9178L18.9504 70.0725L18.8337 69.3248L18.7418 68.6016L18.6867 67.8903L18.6685 67.1909L18.6871 66.5035L18.718 65.8282L18.7859 65.1649L18.8907 64.5133L19.0078 63.8741L19.1618 63.2468L19.3406 62.6437L19.5438 62.0405L19.7718 61.4615L20.0242 60.8824L20.3014 60.3276L20.6031 59.7726L20.9296 59.2419L21.2805 58.7109L21.6563 58.2043L22.0443 57.7098L22.4448 57.2274L22.882 56.757L23.3317 56.2988L23.7937 55.8527L24.2804 55.4309L24.7795 55.0214L25.291 54.624L25.8148 54.2387L26.3633 53.8778L26.9242 53.5289L27.4974 53.1923L28.0831 52.868L28.6689 52.5679L29.2671 52.2801L29.8777 52.0046L30.4885 51.7535L31.7717 51.2877L33.08 50.8952L34.3156 50.6015L34.5395 50.9922L34.9247 51.5901L35.3463 52.1508L35.7921 52.6867L36.2623 53.1978L36.7814 53.684L37.3123 54.1331L37.8675 54.5576L38.4593 54.9449L39.075 55.2829L39.7151 55.5962L40.3793 55.8602L41.0676 56.0747L41.7925 56.2521L42.5412 56.3802L43.2897 56.4594L44.0132 56.4895L44.8836 56.4937L45.8393 56.4358L46.3536 56.3821L46.8557 56.316L47.3698 56.2378L47.8838 56.1348L48.3976 56.0073L48.8866 55.8557L49.3631 55.6671L49.8149 55.4544L50.254 55.2049L50.6561 54.919L51.0209 54.5719L51.3119 54.2011L51.4569 53.9543L51.5653 53.7201L51.6612 53.4737L51.7203 53.2155L51.767 52.945L51.7892 52.6749L51.7745 52.3927L51.7353 52.1108L51.6717 51.8291L51.5956 51.5352L51.4951 51.2416L51.3574 50.9116L51.0961 50.4598L50.7493 50.0458L50.3296 49.7059L49.8613 49.4158L49.3565 49.1626L48.7907 48.9468L47.6482 48.6505L46.384 48.4535L45.0837 48.3427L44.4092 48.312L43.747 48.2936L43.0851 48.2997L42.4356 48.318L41.8106 48.3359L41.1979 48.366L40.6098 48.396L40.0585 48.4379L39.544 48.4672L39.0784 48.4959L38.6618 48.5243L38.2819 48.5402L36.8854 48.6512L35.4651 48.836L35.0733 48.9132L34.8858 48.4854L34.6478 47.8862L34.4465 47.2743L34.2695 46.6379L34.1168 46.001L34.001 45.3517L33.9217 44.6897L33.881 44.2114L33.8769 43.745L33.8974 43.2784L33.9426 42.8117L34.0244 42.3569L34.1309 41.9017L34.2617 41.4465L34.4175 41.0156L34.5977 40.5842L34.8025 40.1529L35.0195 39.7335L35.2734 39.3262L35.5518 38.9187L35.8427 38.5233L36.158 38.1276L36.4858 37.7441L36.838 37.3604L37.2025 36.9889L37.993 36.2575L38.8331 35.5749L39.7223 34.9163L40.6485 34.294L41.6121 33.7083L42.5879 33.1594L43.589 32.6594L43.8208 32.5467L44.2886 32.7634L44.8421 32.9916L45.4568 33.2068L46.1328 33.4092L46.8578 33.6111L47.6316 33.7882L48.4421 33.9526L49.2891 34.1044L50.1484 34.2438L51.0321 34.3584L51.9154 34.4484L52.7986 34.5139L53.6693 34.5428L54.515 34.5473L55.3361 34.5029L56.1198 34.422L56.8543 34.2927L57.2334 34.2033L57.5758 34.1019L57.9058 33.9884L58.2235 33.8628L58.5288 33.7249L58.8094 33.5629L59.0897 33.3762L59.3453 33.1652L59.5762 32.9299L59.7825 32.6703L59.9515 32.3741L60.0716 32.0785L60.1792 31.7707L60.2502 31.4754L60.2968 31.1805L60.3067 30.8982L60.292 30.616L60.2281 30.3097L60.0525 29.8451L59.7545 29.4059L59.3838 29.0656L58.9649 28.7995L58.5095 28.5951L58.0179 28.4522L57.5144 28.3465L56.9745 28.2777L56.4346 28.2336L55.8706 28.2143L55.3069 28.2194L54.7553 28.2367L54.2041 28.2786L53.6651 28.3327L53.1508 28.3864L52.6609 28.4401L52.2078 28.5056L51.8039 28.5706L51.4489 28.6353L51.1552 28.6871L50.9104 28.7384L50.0415 28.906L49.124 29.123L48.158 29.3896L47.1554 29.6934L46.1286 30.0464L45.0899 30.4364L44.0396 30.888L43.9786 30.9252L43.6334 30.6829L43.0531 30.2096L42.4972 29.7116L41.9778 29.1764L41.4952 28.6285L41.0366 28.0558L40.6148 27.4706L40.2296 26.8728L39.8811 26.2377L39.5569 25.6027L39.2571 24.9427L38.994 24.27L38.7673 23.5848L38.5775 22.887L38.4243 22.1766L38.2834 21.4538L38.1791 20.7183L38.0992 19.9826L38.0439 19.2468L38.0375 18.5105L38.0558 17.774L38.0985 17.0372L38.1657 16.3002L38.2697 15.5506L38.3984 14.8253L38.5515 14.0998L38.7416 13.3862L38.9561 12.6724L39.2076 11.9706L39.4714 11.2809L39.772 10.6031L40.0849 9.93752L40.435 9.2838L40.8096 8.65443L41.209 8.0494L41.6327 7.44416L42.0814 6.8632L42.5548 6.30656L43.0527 5.77428L43.5755 5.26629L44.1231 4.7826L44.6831 4.33565L45.2679 3.91301L45.8773 3.51469L46.5117 3.14065L47.1584 2.80338L47.8423 2.50255L48.551 2.22603C48.9299 2.08752 49.1224 1.66849 48.9719 1.27714C48.8338 0.897969 48.4154 0.705433 48.0366 0.843895L47.2913 1.13301L46.5464 1.47121L45.7642 1.74843L45.069 2.15979L44.3985 2.59552L43.7405 3.06793L43.1196 3.55227L42.5234 4.08548L41.952 4.64301L41.4054 5.22486L40.8836 5.83099L40.4107 6.46127L39.9505 7.10369L39.5149 7.7704L39.104 8.46146L38.73 9.16446L38.3806 9.89179L38.0682 10.631L37.7804 11.37L37.5172 12.1334L37.291 12.9086L37.0892 13.6837L36.9242 14.4707L36.7839 15.2574L36.668 16.044L36.589 16.8424L36.5346 17.6407L36.517 18.4508L36.5361 19.2485L36.5796 20.0458L36.6599 20.8304L36.7648 21.6149L36.9185 22.3991L37.1089 23.1704L37.3239 23.9418L37.5757 24.7003L37.8516 25.4342L38.1642 26.1554L38.5134 26.8641L38.8995 27.5601L39.3342 28.2311L39.7933 28.8773L40.289 29.5109L40.8335 30.1195L41.4024 30.7034L42.0202 31.2624L42.4152 31.5778L41.8781 31.8527L40.8534 32.4267L39.8411 33.0374L38.8537 33.6969L37.9036 34.3928L37.0028 35.1375L36.1637 35.9185L35.7505 36.3396L35.3618 36.7604L34.9977 37.1809L34.6458 37.6137L34.3188 38.0709L34.0162 38.5277L33.7261 38.9968L33.4728 39.4778L33.2318 39.9708L33.0277 40.476L32.8359 40.9931L32.6812 41.5223L32.5508 42.0513L32.4573 42.5921L32.4008 43.1449L32.3687 43.6976L32.3736 44.262L32.4152 44.8385L32.5073 45.5617L32.6359 46.2724L32.8013 46.9704L32.9911 47.6682L33.2176 48.3535L33.4807 49.026L33.5434 49.1849L32.6013 49.4022L31.2196 49.8199L29.8877 50.3109L29.2157 50.5747L28.5686 50.8629L27.9215 51.1757L27.2992 51.5129L26.6769 51.8499L26.067 52.1991L25.4819 52.5727L24.8968 52.9708L24.3241 53.3811L23.764 53.8035L23.2283 54.2501L22.7051 54.7092L22.2067 55.1924L21.7206 55.6877L21.2468 56.1953L20.7978 56.727L20.3733 57.2587L19.9735 57.8147L19.5861 58.3827L19.2234 58.9752L18.8976 59.5796L18.5842 60.1961L18.3076 60.8246L18.0557 61.4773L17.8284 62.1299L17.6258 62.8068L17.46 63.4955L17.319 64.2088L17.2149 64.9338L17.1353 65.6586L17.0926 66.3954L17.0746 67.1565L17.0935 67.9294L17.1492 68.7144L17.2417 69.5113L17.3713 70.3201L17.5383 71.2146L17.7295 72.0841L17.933 72.9414L18.1607 73.7738L18.4008 74.594L18.6528 75.4016L18.9292 76.1846L19.2177 76.9551L19.5184 77.7133L19.8433 78.4467L20.1805 79.1676L20.5421 79.8884L21.2893 81.2562L22.0973 82.5619L22.9659 83.8058L23.8834 85.0001L24.9227 86.1198L25.9492 87.178L27.0119 88.1747L28.1232 89.1218ZM46.5567 31.368L47.5222 31.0278L48.4636 30.7368L49.381 30.4953L50.2496 30.3031L51.0818 30.1482L51.3144 30.1093L51.6082 30.0575L51.951 30.0053L52.3429 29.9526L52.7714 29.8873L53.2366 29.8339L53.7265 29.7803L54.2287 29.7389L54.7434 29.7096L55.2581 29.6804L55.7728 29.6756L56.2634 29.6957L56.7417 29.7281L57.1712 29.7856L57.5764 29.8678L57.9328 29.9749L58.2159 30.1074L58.4378 30.2525L58.5983 30.386L58.6853 30.5203L58.7484 30.7283L58.7612 30.7895L58.7744 30.9L58.7632 31.035L58.74 31.1825L58.6925 31.3548L58.6206 31.5519L58.5604 31.6873L58.4879 31.8108L58.391 31.9343L58.2694 32.0582L58.1355 32.1698L57.9771 32.2819L57.7941 32.3939L57.5743 32.4941L57.3422 32.5822L57.0855 32.6706L56.8165 32.7465L56.5351 32.8105L55.8864 32.9269L55.1882 32.9947L54.4408 33.0384L53.6564 33.0456L52.8472 33.0284L52.0254 32.9746L51.191 32.8842L50.3565 32.769L49.5342 32.6416L48.736 32.4894L47.9624 32.337L47.2377 32.1595L46.5496 31.9694L45.935 31.7787L45.7138 31.7071L46.5567 31.368ZM36.9834 50.0861L38.3433 49.9877L38.6986 49.9722L39.1152 49.9438L39.5808 49.9151L40.083 49.8737L40.6222 49.8441L41.1858 49.8144L41.774 49.7845L42.3745 49.7666L42.9995 49.7486L43.6368 49.7429L44.2621 49.7494L44.8751 49.7682L46.1141 49.8673L47.2556 50.041L48.2753 50.3138L48.6813 50.4697L49.0629 50.6502L49.3711 50.8562L49.6302 51.0624L49.8159 51.2694L49.9652 51.538L50.0405 51.7337L50.1036 51.9417L50.1543 52.1375L50.1925 52.3213L50.2062 52.4808L50.2075 52.6279L50.1964 52.7631L50.173 52.886L50.1494 53.009L50.1136 53.1198L50.0654 53.2184L50.017 53.2925L49.8351 53.5273L49.6284 53.7133L49.3726 53.8998L49.0677 54.0866L48.7135 54.2495L48.3225 54.4004L47.9068 54.5269L47.4664 54.6291L47.0136 54.7192L46.5484 54.797L46.0832 54.8504L45.63 54.8914L44.7355 54.9364L43.9509 54.9436L43.301 54.9128L42.6385 54.8452L42 54.7283L41.3736 54.5745L40.7836 54.3836L40.2055 54.1558L39.6393 53.8909L39.1096 53.5889L38.6041 53.2622L38.1107 52.8985L37.6416 52.5102L37.1967 52.097L36.776 51.6344L36.3796 51.1471L36.0199 50.6473L35.7341 50.2203L36.9834 50.0861Z" />
                    <path className="fill-mode"
                      d="M103.248 88.1349H98.4316L96.6749 91.5964H94.3516L101.378 78.3555H103.532L106.176 91.5964H103.853L103.248 88.1349ZM102.927 86.3568L102.02 81.2117H101.926L99.3193 86.3568H102.927ZM108.113 81.609H110.266L110.871 89.1185H110.965L114.403 81.609H116.424L117.406 89.1185H117.501L120.58 81.609H122.714L118.445 91.5964H115.65L114.932 85.1651H114.8L111.91 91.5964H109.114L108.113 81.609ZM126.768 91.6343C125.433 91.6343 124.426 91.2433 123.746 90.4615C123.066 89.667 122.726 88.6518 122.726 87.4161C122.726 86.2811 122.965 85.247 123.444 84.3139C123.935 83.3808 124.621 82.6431 125.503 82.1008C126.384 81.546 127.398 81.2685 128.544 81.2685C129.803 81.2685 130.729 81.5395 131.32 82.0819C131.925 82.6115 132.227 83.2609 132.227 84.0302C132.227 84.5598 132.082 85.0579 131.793 85.5245C131.503 85.9912 131.05 86.3695 130.433 86.6594C129.828 86.9494 129.066 87.0945 128.147 87.0945H124.917L124.898 87.2458C124.885 87.3342 124.879 87.4601 124.879 87.6241C124.879 88.2294 125.068 88.7464 125.446 89.1752C125.836 89.5914 126.353 89.7994 126.995 89.7994C127.511 89.7994 127.983 89.667 128.411 89.4022C128.84 89.1374 129.173 88.7842 129.413 88.3429H131.66C131.257 89.3139 130.64 90.1083 129.809 90.7263C128.978 91.3316 127.964 91.6343 126.768 91.6343ZM128.109 85.5813C128.789 85.5813 129.287 85.4488 129.601 85.184C129.916 84.9065 130.074 84.585 130.074 84.2193C130.074 83.8788 129.929 83.5889 129.639 83.3492C129.362 83.0971 128.921 82.9709 128.317 82.9709C127.499 82.9709 126.812 83.2041 126.258 83.6708C125.704 84.1374 125.351 84.7741 125.2 85.5813H128.109ZM136.711 91.7478C135.981 91.7478 135.351 91.6216 134.823 91.3694C134.294 91.1046 133.891 90.7641 133.614 90.348C133.349 89.9192 133.217 89.459 133.217 88.9672C133.217 88.7653 133.236 88.5826 133.274 88.4186L133.293 88.3051H135.484L135.465 88.4186C135.452 88.8347 135.572 89.1941 135.824 89.4968C136.088 89.7994 136.504 89.9508 137.07 89.9508C137.599 89.9508 138.04 89.8057 138.393 89.5157C138.758 89.2257 138.94 88.8726 138.94 88.4564C138.94 88.1665 138.827 87.9395 138.6 87.7755C138.374 87.599 138.103 87.4917 137.788 87.4539L136.636 87.2269C135.994 87.1261 135.414 86.8927 134.898 86.527C134.394 86.1487 134.143 85.5939 134.143 84.8625C134.143 84.1942 134.319 83.5951 134.671 83.0655C135.037 82.5358 135.54 82.1197 136.183 81.817C136.825 81.5144 137.543 81.3631 138.336 81.3631C139.117 81.3631 139.759 81.5081 140.263 81.7981C140.779 82.0756 141.15 82.4539 141.377 82.9331C141.616 83.3997 141.711 83.904 141.66 84.4463V84.522H139.394V84.4652C139.394 84.0996 139.293 83.7716 139.091 83.4816C138.903 83.1916 138.537 83.0466 137.996 83.0466C137.492 83.0466 137.07 83.1916 136.73 83.4816C136.39 83.7591 136.22 84.0996 136.22 84.5031C136.22 84.7806 136.327 85.0075 136.541 85.184C136.768 85.348 137.051 85.4615 137.391 85.5245L138.657 85.7515C139.362 85.8901 139.948 86.1487 140.414 86.527C140.892 86.9053 141.131 87.435 141.131 88.1159C141.131 88.7842 140.936 89.396 140.546 89.9508C140.155 90.5056 139.62 90.9471 138.94 91.2749C138.273 91.5902 137.53 91.7478 136.711 91.7478ZM146.687 91.7478C145.377 91.7478 144.389 91.3694 143.721 90.6128C143.054 89.8435 142.72 88.8663 142.72 87.6809C142.72 86.5081 142.972 85.4426 143.476 84.4841C143.979 83.5257 144.666 82.7691 145.535 82.2143C146.403 81.6595 147.361 81.382 148.406 81.382C149.728 81.382 150.717 81.7665 151.371 82.5358C152.039 83.2925 152.372 84.2634 152.372 85.4488C152.372 86.6089 152.121 87.6682 151.617 88.6267C151.113 89.5851 150.427 90.348 149.558 90.9155C148.689 91.4703 147.732 91.7478 146.687 91.7478ZM146.989 89.8562C147.556 89.8562 148.078 89.667 148.557 89.2887C149.035 88.9104 149.413 88.3934 149.69 87.7376C149.98 87.0818 150.125 86.363 150.125 85.5813C150.125 84.8876 149.948 84.3266 149.596 83.8978C149.256 83.4689 148.758 83.2546 148.103 83.2546C147.537 83.2546 147.014 83.4438 146.536 83.8221C146.057 84.1877 145.679 84.6985 145.402 85.3543C145.125 85.9974 144.987 86.71 144.987 87.4917C144.987 88.1979 145.157 88.7718 145.497 89.2131C145.837 89.6419 146.334 89.8562 146.989 89.8562ZM155.131 81.609H157.417L157.134 83.2925H157.266C157.518 82.9015 157.895 82.4853 158.399 82.044C158.915 81.59 159.62 81.3631 160.515 81.3631C161.195 81.3631 161.736 81.5206 162.139 81.836C162.542 82.1513 162.819 82.4853 162.97 82.8385C163.134 83.1916 163.216 83.4375 163.216 83.5762H163.348C163.587 83.1474 163.996 82.6745 164.576 82.1575C165.168 81.6279 165.974 81.3631 166.994 81.3631C168.014 81.3631 168.744 81.6784 169.185 82.3088C169.638 82.9268 169.865 83.6834 169.865 84.5787C169.865 84.9444 169.839 85.2534 169.789 85.5056L168.788 91.5964H166.502L167.485 85.7326C167.522 85.5183 167.541 85.3227 167.541 85.1462C167.541 84.566 167.378 84.1247 167.05 83.8221C166.723 83.5194 166.307 83.3681 165.804 83.3681C165.212 83.3681 164.67 83.5762 164.179 83.9923C163.688 84.3958 163.379 84.976 163.254 85.7326L162.271 91.5964H159.986L160.968 85.7326C161.006 85.5183 161.025 85.3227 161.025 85.1462C161.025 84.566 160.861 84.1247 160.534 83.8221C160.206 83.5194 159.79 83.3681 159.287 83.3681C158.695 83.3681 158.154 83.5762 157.662 83.9923C157.171 84.3958 156.863 84.976 156.737 85.7326L155.755 91.5964H153.469L155.131 81.609ZM175.245 91.6343C173.91 91.6343 172.903 91.2433 172.223 90.4615C171.543 89.667 171.203 88.6518 171.203 87.4161C171.203 86.2811 171.442 85.247 171.92 84.3139C172.411 83.3808 173.098 82.6431 173.979 82.1008C174.861 81.546 175.874 81.2685 177.02 81.2685C178.28 81.2685 179.206 81.5395 179.797 82.0819C180.402 82.6115 180.704 83.2609 180.704 84.0302C180.704 84.5598 180.558 85.0579 180.269 85.5245C179.98 85.9912 179.527 86.3695 178.909 86.6594C178.305 86.9494 177.543 87.0945 176.624 87.0945H173.394L173.375 87.2458C173.362 87.3342 173.356 87.4601 173.356 87.6241C173.356 88.2294 173.545 88.7464 173.923 89.1752C174.313 89.5914 174.829 89.7994 175.471 89.7994C175.988 89.7994 176.46 89.667 176.888 89.4022C177.316 89.1374 177.65 88.7842 177.889 88.3429H180.137C179.735 89.3139 179.117 90.1083 178.286 90.7263C177.455 91.3316 176.441 91.6343 175.245 91.6343ZM176.586 85.5813C177.266 85.5813 177.763 85.4488 178.078 85.184C178.394 84.9065 178.55 84.585 178.55 84.2193C178.55 83.8788 178.405 83.5889 178.116 83.3492C177.838 83.0971 177.398 82.9709 176.794 82.9709C175.975 82.9709 175.289 83.2041 174.735 83.6708C174.181 84.1374 173.828 84.7741 173.677 85.5813H176.586ZM111.943 107.618C111.54 107.618 111.232 107.7 111.017 107.864C110.803 108.028 110.652 108.223 110.564 108.45C110.489 108.665 110.419 108.955 110.356 109.32L110.243 109.982H112.51L112.226 111.779H109.941L108.297 121.634C107.983 123.564 106.831 124.529 104.841 124.529C104.564 124.529 104.268 124.51 103.953 124.472C103.638 124.434 103.418 124.396 103.292 124.358L103.556 122.751C103.808 122.814 104.123 122.845 104.501 122.845C104.904 122.845 105.212 122.763 105.426 122.599C105.641 122.435 105.785 122.24 105.861 122.013C105.949 121.786 106.025 121.489 106.087 121.124L107.655 111.779H106.371L106.654 109.982H107.957L108.146 108.885C108.26 108.129 108.562 107.46 109.053 106.88C109.544 106.288 110.394 105.991 111.603 105.991C111.893 105.991 112.195 106.01 112.51 106.048C112.825 106.086 113.032 106.13 113.133 106.18L112.887 107.694C112.585 107.643 112.271 107.618 111.943 107.618ZM116.374 120.008C115.039 120.008 114.032 119.617 113.352 118.835C112.672 118.041 112.332 117.025 112.332 115.79C112.332 114.655 112.571 113.621 113.049 112.687C113.54 111.754 114.227 111.017 115.108 110.474C115.99 109.919 117.003 109.642 118.149 109.642C119.408 109.642 120.334 109.913 120.926 110.455C121.53 110.985 121.833 111.634 121.833 112.404C121.833 112.933 121.688 113.431 121.398 113.898C121.108 114.365 120.655 114.743 120.038 115.033C119.434 115.323 118.672 115.468 117.753 115.468H114.523L114.504 115.619C114.491 115.708 114.485 115.834 114.485 115.998C114.485 116.603 114.674 117.12 115.052 117.549C115.442 117.965 115.958 118.173 116.6 118.173C117.117 118.173 117.589 118.041 118.017 117.776C118.445 117.511 118.779 117.158 119.018 116.716H121.266C120.863 117.687 120.246 118.482 119.415 119.1C118.584 119.705 117.57 120.008 116.374 120.008ZM117.715 113.955C118.395 113.955 118.892 113.822 119.207 113.558C119.522 113.28 119.679 112.958 119.679 112.593C119.679 112.252 119.534 111.962 119.245 111.723C118.968 111.471 118.527 111.344 117.923 111.344C117.104 111.344 116.418 111.578 115.864 112.044C115.31 112.511 114.957 113.148 114.806 113.955H117.715ZM126.222 120.121C125.165 120.121 124.352 119.781 123.786 119.1C123.232 118.406 122.955 117.479 122.955 116.319C122.955 115.109 123.175 113.999 123.616 112.99C124.069 111.981 124.68 111.187 125.448 110.607C126.216 110.027 127.066 109.737 127.998 109.737C128.854 109.737 129.503 109.938 129.944 110.342C130.384 110.733 130.674 111.168 130.812 111.647H130.945L131.228 109.982H133.532L131.87 119.97H129.585L129.887 118.135H129.736C129.396 118.652 128.942 119.112 128.376 119.516C127.809 119.919 127.091 120.121 126.222 120.121ZM127.337 118.23C127.916 118.23 128.445 118.047 128.924 117.681C129.402 117.303 129.78 116.792 130.057 116.149C130.334 115.506 130.472 114.793 130.472 114.011C130.472 113.305 130.302 112.731 129.962 112.29C129.635 111.849 129.131 111.628 128.451 111.628C127.872 111.628 127.343 111.817 126.865 112.196C126.386 112.561 126.008 113.066 125.731 113.709C125.454 114.352 125.316 115.071 125.316 115.865C125.316 116.571 125.48 117.145 125.807 117.587C126.147 118.015 126.657 118.23 127.337 118.23ZM138.297 116.679C138.221 117.133 138.184 117.429 138.184 117.568C138.184 117.845 138.272 118.053 138.448 118.192C138.624 118.318 138.945 118.381 139.411 118.381C139.625 118.381 139.921 118.349 140.299 118.286L140.035 119.894C139.959 119.919 139.739 119.951 139.374 119.989C139.008 120.027 138.656 120.046 138.316 120.046C137.371 120.046 136.716 119.894 136.351 119.592C135.986 119.276 135.804 118.835 135.804 118.268C135.804 117.914 135.841 117.549 135.917 117.17L136.824 111.779H135.105L135.388 109.982H137.126L137.674 106.729H139.94L139.411 109.982H141.678L141.395 111.779H139.109L138.297 116.679ZM151.178 119.97H148.892L149.176 118.286H149.044C148.716 118.803 148.263 119.245 147.684 119.611C147.117 119.976 146.468 120.159 145.738 120.159C144.693 120.159 143.944 119.856 143.49 119.251C143.037 118.646 142.81 117.902 142.81 117.019C142.81 116.691 142.842 116.351 142.905 115.998L143.906 109.982H146.191L145.247 115.638C145.209 115.878 145.19 116.111 145.19 116.338C145.19 116.931 145.341 117.391 145.644 117.719C145.958 118.047 146.399 118.211 146.966 118.211C147.671 118.211 148.257 117.971 148.722 117.492C149.188 117 149.478 116.382 149.591 115.638L150.555 109.982H152.84L151.178 119.97ZM155.196 109.982H157.463L157.217 111.571H157.331C157.57 111.13 157.929 110.758 158.407 110.455C158.898 110.14 159.484 109.982 160.164 109.982C160.416 109.982 160.655 110.014 160.882 110.077L160.447 112.215C160.271 112.152 160.114 112.114 159.975 112.101C159.849 112.076 159.673 112.063 159.446 112.063C158.678 112.063 158.061 112.277 157.595 112.706C157.142 113.135 156.84 113.822 156.688 114.768L155.801 119.97H153.534L155.196 109.982ZM164.869 120.008C163.534 120.008 162.526 119.617 161.846 118.835C161.166 118.041 160.826 117.025 160.826 115.79C160.826 114.655 161.066 113.621 161.544 112.687C162.035 111.754 162.722 111.017 163.603 110.474C164.485 109.919 165.498 109.642 166.644 109.642C167.904 109.642 168.829 109.913 169.421 110.455C170.025 110.985 170.328 111.634 170.328 112.404C170.328 112.933 170.183 113.431 169.893 113.898C169.604 114.365 169.15 114.743 168.533 115.033C167.929 115.323 167.167 115.468 166.248 115.468H163.018L162.999 115.619C162.986 115.708 162.98 115.834 162.98 115.998C162.98 116.603 163.169 117.12 163.546 117.549C163.937 117.965 164.453 118.173 165.095 118.173C165.612 118.173 166.084 118.041 166.512 117.776C166.94 117.511 167.274 117.158 167.513 116.716H169.761C169.358 117.687 168.741 118.482 167.91 119.1C167.079 119.705 166.065 120.008 164.869 120.008ZM166.21 113.955C166.89 113.955 167.387 113.822 167.702 113.558C168.017 113.28 168.174 112.958 168.174 112.593C168.174 112.252 168.029 111.962 167.74 111.723C167.463 111.471 167.022 111.344 166.418 111.344C165.599 111.344 164.913 111.578 164.359 112.044C163.805 112.511 163.452 113.148 163.301 113.955H166.21Z" />
                  </svg>
                </figure>

                <figure className="position-absolute bottom-0 end-0 mb-n6 me-n6 d-none d-sm-block">
                  <svg width="148" height="140" viewBox="0 0 148 140"
                    xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-primary"
                      d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <circle className="fill-primary" cx="25.86" cy="131.41" r="2.95"></circle>
                    <circle className="fill-primary" cx="44.71" cy="131.41" r="2.95"></circle>
                    <circle className="fill-primary" cx="63.57" cy="131.41" r="2.95"></circle>
                    <circle className="fill-primary" cx="82.43" cy="131.41" r="2.95"></circle>
                    <circle className="fill-primary" cx="101.29" cy="131.41" r="2.95"></circle>
                    <circle className="fill-primary" cx="120.14" cy="131.41" r="2.95"></circle>
                    <path className="fill-primary"
                      d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <circle className="fill-primary" cx="25.86" cy="113.61" r="2.95"></circle>
                    <circle className="fill-primary" cx="44.71" cy="113.61" r="2.95"></circle>
                    <circle className="fill-primary" cx="63.57" cy="113.61" r="2.95"></circle>
                    <circle className="fill-primary" cx="82.43" cy="113.61" r="2.95"></circle>
                    <circle className="fill-primary" cx="101.29" cy="113.61" r="2.95"></circle>
                    <circle className="fill-primary" cx="120.14" cy="113.61" r="2.95"></circle>
                    <path className="fill-primary"
                      d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <circle className="fill-primary" cx="25.86" cy="95.81" r="2.95"></circle>
                    <circle className="fill-primary" cx="44.71" cy="95.81" r="2.95"></circle>
                    <circle className="fill-primary" cx="63.57" cy="95.81" r="2.95"></circle>
                    <circle className="fill-primary" cx="82.43" cy="95.81" r="2.95"></circle>
                    <circle className="fill-primary" cx="101.29" cy="95.81" r="2.95"></circle>
                    <circle className="fill-primary" cx="120.14" cy="95.81" r="2.95"></circle>
                    <path className="fill-primary"
                      d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <circle className="fill-primary" cx="25.86" cy="24.62" r="2.95"></circle>
                    <circle className="fill-primary" cx="44.71" cy="24.62" r="2.95"></circle>
                    <circle className="fill-primary" cx="63.57" cy="24.62" r="2.95"></circle>
                    <circle className="fill-primary" cx="82.43" cy="24.62" r="2.95"></circle>
                    <circle className="fill-primary" cx="101.29" cy="24.62" r="2.95"></circle>
                    <circle className="fill-primary" cx="120.14" cy="24.62" r="2.95"></circle>
                    <path className="fill-primary"
                      d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                    <path className="fill-primary"
                      d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"></path>
                    <circle className="fill-primary" cx="25.86" cy="6.82" r="2.95"></circle>
                    <circle className="fill-primary" cx="44.71" cy="6.82" r="2.95"></circle>
                    <circle className="fill-primary" cx="63.57" cy="6.82" r="2.95"></circle>
                    <circle className="fill-primary" cx="82.43" cy="6.82" r="2.95"></circle>
                    <circle className="fill-primary" cx="101.29" cy="6.82" r="2.95"></circle>
                    <circle className="fill-primary" cx="120.14" cy="6.82" r="2.95"></circle>
                    <path className="fill-primary"
                      d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                  </svg>
                </figure>

                <Col md={7} xs={4}
                  className="layer position-absolute top-0 start-0 ms-n4 mt-n4 z-index-2"
                  data-depth="1.5">
                  <img src={decorationImg14} className="rounded-4 shadow"
                    alt="decoration-img" />
                </Col>

                <div
                  className="position-absolute top-100 start-50 translate-middle ms-n7 mt-n4 z-index-2 d-none d-sm-block">
                  <img src={decorationImg15} alt="decoration-img" />
                </div>

                <Col md={7} xs={4}
                  className="layer position-absolute bottom-0 end-0 mb-n7 me-sm-n3 me-lg-n5 me-xl-n8 z-index-2"
                  data-depth="1">
                  <img src={decorationImg13} alt="decoration-img" />
                </Col>
              </Parallax>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero