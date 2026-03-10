import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showPopup, setShowPopup] = useState(false)

  const handleAgree = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      {/* POPUP MODAL */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: 'white',
            width: '90%',
            maxWidth: '500px',
            height: '80%',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }}>
            <button 
              onClick={handleClosePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                zIndex: 10000,
                background: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
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
        </div>
      )}

      {/* MAIN CONTENT */}
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
