import { Helmet } from 'react-helmet-async'

const PageTitle = ({ title }: { title: string }) => {
  const defaultTitle = 'Mizzle React - Technology and Corporate Bootstrap Theme'
  return (
    <Helmet>
      <title>{title ? title + ' | ' + defaultTitle : defaultTitle}</title>
    </Helmet>
  )
}

export default PageTitle