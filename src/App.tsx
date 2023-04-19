import { Header } from './components/Header';
import { Content } from './components/Content';

import './App.css'


export function App() {

  return (
    <div>
      <Header />

      <main className="main container mx-auto px-4">
        <Content />
      </main>
    </div>
  )
}
