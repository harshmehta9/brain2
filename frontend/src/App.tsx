import './App.css'
import NoteDisplay from './components/NoteCard'
import Searchbar from './components/searchbar'
import { dummyContentData } from './dummyData'

function App() {

  return (
    <div className='bg-[#EFE9FF] h-screen w-full px-20 flex-col items-center justify-center'> 
      <Searchbar/>
      <NoteDisplay data={dummyContentData}/>
    </div>
  )
}

export default App
