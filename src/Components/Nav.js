import whiteLogo from '../Images/white_logo_tinder.png'
import colorLogo from '../Images/color_logo_tinder.png'

const Nav = ({ minimal, authToken }) => {
    return (
        <nav className="logo-container">
            <img className="logo" src={minimal ? colorLogo : whiteLogo} />

            {!authToken && !minimal && <button className='nav-button'> Log In</button>}

        </nav>

    )
}

export default Nav