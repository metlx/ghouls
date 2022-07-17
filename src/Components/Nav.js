// import whiteLogo from '../Images/white_logo_tinder.png'
// import colorLogo from '../Images/color_logo_tinder.png'
import sidsSkull from '../Images/sids_skull.jpeg'

const Nav = ({ minimal, authToken, setShowModal, showModal }) => {

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <nav className="logo-container">
      <img alt="img is broken cuss" className="logo" src={minimal ? sidsSkull : sidsSkull} />
      {!authToken && !minimal &&
        <button
          className='nav-button'
          onClick={handleClick}
          disabled={showModal}
        >Log In</button>}
    </nav>
  )
}

export default Nav
