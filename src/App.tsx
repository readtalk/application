import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showIframe, setShowIframe] = useState(false)

  const handleAgree = () => {
    setShowIframe(true)
  }

  const handleCloseIframe = () => {
    setShowIframe(false)
  }

  return (
    <>
      {showIframe && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <button 
            onClick={handleCloseIframe}
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              zIndex: 10000,
              padding: '8px 16px',
              background: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ✕ Close
          </button>
          <iframe
            src="https://auth.app-readtalk.workers.dev"
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            title="Authentication"
          />
        </div>
      )}

      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      
      <div className="content-wrapper">
        <h1>Welcome to READTalk</h1>
        
        <p className="terms-text">
          Read our <a href="https://readtalk.pages.dev/">Privacy Policies</a>. Tap "Agree and continue" 
          to accept our <a href="https://readtalk.pages.dev/">Terms of Service</a>.
        </p>

        <div className="language-selector">
          <span>English ▼</span>
        </div>

        <button 
          className="agree-button"
          onClick={handleAgree}
        >
          Agree and continue
        </button>

        <p className="read-the-docs">
          © 2026 SOEPARNO ENTERPRISE Corp.
        </p>
      </div>
    </>
  )
}

export default App
