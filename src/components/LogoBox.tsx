import {NavbarBrand} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import logoLight from '@/assets/images/logo-light.svg'
import logo from '@/assets/images/logo.svg'
import logoSmall from '@/assets/images/logo-icon.svg'

type LogoBoxProps = {
    className?: string
    smallIcon?: boolean
    imageClassName?: string
}

const LogoBox = ({className, smallIcon, imageClassName}: LogoBoxProps) => {
    return smallIcon ? (
        <img src={logoSmall} className={className ?? ''} alt="logo"/>
    ) : (
        <NavbarBrand as={Link} className={className ?? ''} to="/">
            <img className={`light-mode-item navbar-brand-item ${imageClassName ?? ''} `} src={logo} alt="logo"/>
            <img className={`dark-mode-item navbar-brand-item ${imageClassName ?? ''}`} src={logoLight} alt="logo"/>
        </NavbarBrand>
    )
}

export default LogoBox