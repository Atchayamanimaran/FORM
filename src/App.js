import './App.css';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import EmployeeFeedbackForm from   './components/EmployeeFeedbackForm';
import { Route, BrowserRouter as Router, Link, Navigate, Routes } from 'react-router-dom';
function App() {
  return ( 
  <div>
    <Router>
      <div className="App">
        <Link to="/student">Student Registration</Link>
        <Link to="/employee">Employee Feedback</Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/student" />} />
          <Route path="/student" element={<StudentRegistrationForm   />} /> 
          <Route path="/employee" element={<EmployeeFeedbackForm />} />
          </Routes>
          </Router>
  </div>
  );
}

export default App;