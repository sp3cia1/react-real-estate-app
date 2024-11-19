import Navbar from './components/navbar/navbar.jsx' 

import HomePage from './routes/homePage.jsx'

import './layout.scss'

function App() {
  return (
    <div className ="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
    
  )
}

export default App