import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from '@/components/loading/Loading'
import './App.css'

const ClientsList = lazy(() => import('@/containers/ClientsList'))
const PageNotFound = lazy(() => import('@/components/page-not-found/PageNotFound'))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<ClientsList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
