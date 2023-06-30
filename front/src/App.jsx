import './App.css';
import { Routes, Route } from 'react-router-dom';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import ExerciseList from './Pages/ExerciseList/ExerciseList';
import LoginPage from './Pages/Auth/LoginPage';
import SignUpPage from './Pages/Auth/SignUpPage';
import ExerciseManagment from './Pages/ExerciseManagment/ExerciseManagment';
import Exercise from './Pages/Exercise/Exercise';
import { useEffect, useState } from 'react';
import UserService from './Services/UserService';

function App() {
  const [user, setUser] = useState(null)

  // mount effect
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('userToken')

      if(token) {
        const loggedUser = UserService.getUser()

        setUser(loggedUser ? loggedUser : null)
      }

    }

    loadUser()
  }, [])

  useEffect(() => {

  }, [user])
  
  return (
    <Routes>
      <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* {user && user.role == 2 && ( */}
          <Route path="/managment" element={<ExerciseManagment />} />
        {/* )} */}

        {/* {user && user.role == 2 && ( */}
          <>
            <Route path="/exercise/:id"  element={<Exercise />} />
            <Route path="/" element={<ExerciseList />} />
          </>
        {/* )} */}
        
      </>

      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} /> */}
      {/* <Route path="/exercise/:id"  element={<QuestionPage question={question}/>}  /> */}
      {/* <Route path="/exercise/:id"  element={<Exercise />} />
      <Route path="/" element={<ExerciseList />} />
      <Route path="/managment" element={<ExerciseManagment />} /> */} */}
    </Routes>
  );
}

export default App;
