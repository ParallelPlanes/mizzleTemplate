import LanguageDropdown from './LanguageDropdown'
import { currentYear, developedBy, developedByLink } from '@/states/constants'

const CreditWithLanguage = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
      <div className="text-body"> Copyrights ©{currentYear} Mizzle. Build by <a href={developedByLink} className="text-body text-primary-hover" target='_blank'>{developedBy}</a>. </div>
      <LanguageDropdown />
    </div>
  )
}

export default CreditWithLanguage