import { useState } from 'react'

const AuthModal = ({ setShowModal, isSignUp }) => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)

  console.log(email, password, confirmPassword, error);

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (isSignUp && (password !== confirmPassword)) {
        setError('Passwords needs to match')
      }
      console.log('make a post req to the database');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="auth-modal">
      <h1 className="close-icon" onClick={handleClick}>x</h1>
      <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>
      <p>Clicking submit will give me your life</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && <input
          type="password"
          id="password-check"
          name="password-check"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>Get the App</h2>
    </div>
  )
}

export default AuthModal
