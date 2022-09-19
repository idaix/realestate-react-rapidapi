
import { Logo } from './'

const Footer = () => {
  return (
    <footer className='p-5'>
        <div className="flex items-center justify-center gap-2 flex-col">
            <Logo />
            <span>Dai Chekkal - RapidApi</span>
        </div>
    </footer>
  )
}

export default Footer