import NextLink from 'next/link'

export const ProjectOverview = () => {
  return (
    <div className='flex flex-col items-center justify-end'>
      <h1 className='text-3xl font-semibold mb-4'>xAI Chatbot</h1>
      <p className='text-center'>
        Chat With <Link href='https://x.com/xai'>Grok xAI</Link> in a Simple
        User Interface.
      </p>
    </div>
  )
}

const Link = ({children, href}: {children: React.ReactNode; href: string}) => {
  return (
    <NextLink
      target='_blank'
      className='text-blue-500 hover:text-blue-600 transition-colors duration-75'
      href={href}
    >
      {children}
    </NextLink>
  )
}
