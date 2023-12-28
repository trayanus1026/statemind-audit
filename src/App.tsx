import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Loading from '@/components/loading/Loading'
import './App.css'

const ClientsList = lazy(() => import('@/containers/ClientsList'))
const PageNotFound = lazy(() => import('@/components/page-not-found/PageNotFound'))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<LayoutProvider />}>
            <Route index element={<ClientsList />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
