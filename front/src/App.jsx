import './App.css';
import { Routes, Route } from 'react-router-dom'
import QuestionPage from './Components/QuestionPage/QuestionPage';
import ExerciseList from './Pages/ExerciseList/ExerciseList';
import LoginPage from './Pages/Auth/LoginPage';
import SignUpPage from './Pages/Auth/SignUpPage';


function App() {
  const question = 'Given an integer, N , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: N x i = result.'
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/exercise" question={question} element={<QuestionPage />} />
      <Route path="/exerciseList" element={<ExerciseList />} />
    </Routes>
  );
}

export default App;