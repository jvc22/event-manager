import nlwUniteIicon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <div>
      <img src={nlwUniteIicon} alt="" />

      <nav>
        <a href="">Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  )
}
