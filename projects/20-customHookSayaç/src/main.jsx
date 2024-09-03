// import { StrictMode } from 'react' // burada ki kod iki defa console çağırıyor bunu silerek engelleyilebilirsin
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> bunlarıda silmek gerekyiyor
    <App />,
  // </StrictMode>
)
