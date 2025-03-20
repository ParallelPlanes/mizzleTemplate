import { Link } from 'react-router-dom'
import { currentYear, developedBy, developedByLink } from '@/states/constants'
import { socialMediaLinks } from '@/assets/data/footer-items'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container className="mb-4 mb-md-2">
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start">
          <div className="mb-3 mb-md-0"> Copyrights ©{currentYear} Mizzle. Build by <a href={developedByLink} target='_blank' className="text-body text-primary-hover">{developedBy}</a>. </div>
          <ul className="list-inline mb-0">

            {socialMediaLinks.map((item, idx) => {
              const Icon = item.icon
              return (
                <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                  <Link className="btn btn-xs btn-icon btn-light mb-0" to="">
                    {Icon && <Icon />}
                  </Link>
                </li>
              )
            })}

          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer