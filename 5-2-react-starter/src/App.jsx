import './App.css'
import './components/StudentCard'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Shatha Alharbi" id="202283660" dept="Software enginerring "/>
          <StudentCard name="Farah Hammad" id="202283670" dept="comp senice "/>
          
          
        </div>
      </main>
    </div>
  )
}

export default App
