import { useState } from 'react'

const AuthModal = ({ setShowModal }) => {

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
  }

  const isSignUp = true

  return (
    <div className="auth-modal">
      <h1 className="close-icon" onClick={handleClick}>x</h1>
      <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>
      <p>By clicking you agree to give your life away.</p>
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
        <input
          type="password-check"
          id="password-check"
          name="password-check"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </form>
      AUTH MODAL
    </div>
  )
}

export default AuthModal
