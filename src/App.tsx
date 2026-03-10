import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showLanguagePopup, setShowLanguagePopup] = useState(false)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  return (
    <>
      {/* POPUP BAHASA (SLIDE UP) */}
      {showLanguagePopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'flex-end',
          zIndex: 9999,
          animation: 'fadeIn 0.2s'
        }} onClick={() => setShowLanguagePopup(false)}>
          <div style={{
            backgroundColor: 'white',
            width: '100%',
            maxHeight: '70%',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            padding: '20px',
            overflowY: 'auto',
            animation: 'slideUp 0.3s ease-out'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: '20px' }}>App language</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>English</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Bahasa Indonesia</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Afrikaans</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Shqip</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>አግርኛ</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>العربية</div>
              {/* ... dan seterusnya */}
            </div>
          </div>
        </div>
      )}

      {/* POPUP NOMOR TELFON (SLIDE RIGHT) */}
      {showPhonePopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
          animation: 'fadeIn 0.2s',
          overflow: 'hidden'
        }} onClick={() => setShowPhonePopup(false)}>
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
            maxWidth: '400px',
            height: '100%',
            backgroundColor: 'white',
            boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
            animation: 'slideRight 0.3s ease-out',
            overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '24px' }}>
              <button 
                onClick={() => setShowPhonePopup(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  marginBottom: '20px'
                }}
              >
                ←
              </button>
              <h2>Enter your phone number</h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                WhatsApp will need to verify your phone number. Carrier charges may apply. <a href="#">What's my number?</a>
              </p>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Indonesia ▼</div>
                <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                  <span style={{ padding: '12px', background: '#f5f5f5', borderRight: '1px solid #ccc' }}>+62</span>
                  <input 
                    type="tel" 
                    placeholder="Phone number"
                    style={{ flex: 1, padding: '12px', border: 'none', outline: 'none' }}
                  />
                </div>
              </div>
              <button style={{
                width: '100%',
                padding: '14px',
                background: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <img src={viteLogo} className="logo" alt="Vite logo" style={{ width: '80px', marginBottom: '20px' }} />
        
        <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Welcome to READTalk</h1>
        
        <p style={{ textAlign: 'center', marginBottom: '24px', color: '#666' }}>
          Read our <a href="#">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#">Terms of Service</a>.
        </p>

        <div 
          onClick={() => setShowLanguagePopup(true)}
          style={{ 
            cursor: 'pointer', 
            marginBottom: '20px',
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '20px'
          }}
        >
          English ▼
        </div>

        <button 
          onClick={() => setShowPhonePopup(true)}
          style={{
            background: '#25D366',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          Agree and continue
        </button>

        <p style={{ color: '#888', fontSize: '12px' }}>© 2026 SOEPARNO ENTERPRISE Corp.</p>
      </div>

      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}

export default App
