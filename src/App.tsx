import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Content } from './components/Content';

import './App.css'


export function App() {

  return (
    <div>
      <Header />

      <main className="main container mx-auto px-4">
        < SearchBar />
      
        <div className="content">
          <Content />
        </div>
      </main>
    </div>
  )
}
