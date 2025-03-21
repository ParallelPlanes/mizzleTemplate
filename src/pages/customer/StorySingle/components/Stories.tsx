import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import { type StoryType, stories } from "@/pages/customer/StorySingle/data"
import { Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap"

export const StoryCard = ({ story }: { story: StoryType }) => {
  const { companyLogo, image, title } = story

  return (
    <Card className="card-img-scale bg-transparent overflow-hidden">
      <div className="card-img-scale-wrapper rounded">
        <img src={image} className="card-img" alt="story-image" />
      </div>
      <CardBody className="px-0">
        <img src={companyLogo} className="h-30px mb-3" />
        <CardTitle as={"h6"} className="mb-3">{title}</CardTitle>
        <Link className="icon-link icon-link-hover stretched-link" to="/customer/story-single">Read full story<BsArrowRight className="bi"/> </Link>
      </CardBody>
    </Card>
  )
}

const Stories = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container text-center mb-5">
          <h2 className="mb-0">Related stories</h2>
        </div>
        <Row className="justify-content-center">
          {stories.map((story, idx) => (
            <Col md={6} lg={4} className="mb-4 mb-md-0" key={idx}>
              <StoryCard story={story} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>

  )
}

export default Stories