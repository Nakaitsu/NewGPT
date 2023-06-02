import './App.css';
import { Routes, Route } from 'react-router-dom'
import QuestionPage from './Components/QuestionPage/QuestionPage';
import ExerciseList from './Pages/ExerciseList/ExerciseList';

function App() {
  const question = 'Given an integer, N , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: N x i = result.'
  
  return (
    <Routes>
      <Route path="/exercise" question={question} element={<QuestionPage />} />
      <Route path="/exerciseList" element={<ExerciseList />} />
    </Routes>
  );
}

export default App;