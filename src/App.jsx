import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Auth } from './pages/auth/index';
import { ExpenseTracker } from './pages/expense-tracker/index';

function App() {
  return (
    <>
      <Router>
        <Routes>        
          {/* exact-to go to the exact page */}
          <Route path='/' exact  element={<Auth />} />
          <Route path="/expense-tracker" exact element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
