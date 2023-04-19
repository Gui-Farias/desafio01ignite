import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className='bg-zinc-950 flex justify-center py-14' >
      <img src={logo} alt="" />
    </header>
  )
}
