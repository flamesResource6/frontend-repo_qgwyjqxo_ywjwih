import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import ResumePage from './ResumePage'
import './index.css'

// Simple Error Boundary to surface any runtime render errors to the screen
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    this.setState({ info })
    // Also log to console for debugging
    console.error('React render error:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }} className="min-h-screen bg-white text-red-700">
          <h1 className="text-2xl font-bold">An error occurred while rendering the app.</h1>
          <p className="mt-2 text-sm">Please share this with us so we can fix it quickly.</p>
          <pre className="mt-4 whitespace-pre-wrap rounded bg-red-50 p-3 text-xs text-red-800 border border-red-200">
            {String(this.state.error)}{this.state.info ? `\n\n${this.state.info.componentStack}` : ''}
          </pre>
          <a href="/test" className="inline-block mt-4 rounded bg-blue-600 px-4 py-2 text-white text-sm">Open Diagnostics</a>
        </div>
      )
    }
    return this.props.children
  }
}

function BootBanner() {
  return (
    <div className="fixed inset-x-0 top-0 z-[9999] flex items-center justify-between gap-3 bg-amber-50 px-4 py-2 text-amber-800 border-b border-amber-200">
      <div className="text-xs">Portfolio is loading… If this stays for more than a few seconds, open Diagnostics.</div>
      <div className="flex items-center gap-2">
        <a href="/test" className="rounded bg-amber-600 px-2 py-1 text-[11px] font-semibold text-white">Diagnostics</a>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BootBanner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
