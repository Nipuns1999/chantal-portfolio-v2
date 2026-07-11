import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { OilsPage } from './pages/OilsPage'
import { SketchesPage } from './pages/SketchesPage'
import { ContactPage } from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'oils', element: <OilsPage /> },
      { path: 'sketches', element: <SketchesPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
