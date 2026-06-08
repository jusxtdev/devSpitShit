import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Layout from './components/Layout'
import Landing from './pages/Landing'

function App() {

  return <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Landing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}

export default App
