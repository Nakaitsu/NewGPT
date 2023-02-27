import './App.css';
import QuestionPage from './Components/QuestionPage/QuestionPage';

function App() {
  const question = 'Given an integer, N , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: N x i = result.'
  
  return (
    <>
      <QuestionPage question={question} />
    </>
  );
}

export default App;
