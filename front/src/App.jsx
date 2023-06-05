import './App.css';
import { Routes, Route } from 'react-router-dom';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import ExerciseList from './Pages/ExerciseList/ExerciseList';
import LoginPage from './Pages/Auth/LoginPage';
import SignUpPage from './Pages/Auth/SignUpPage';

function App() {
  const question =`
  Crie um programa que leia o nome de um vendedor, o salário fixo dele e o valor total das vendas feitas por ele no mês (em dinheiro). Considerando que esse vendedor recebe 15% sobre todas as vendas, escreva o salário final (total) desse vendedor no final do mês, com duas casas decimais.
  
  Não esqueça de imprimir uma quebra de linha após o resultado, caso contrário você receberá um "Erro de Apresentação".
  
  Não esqueça dos espaços em branco.
  
  Entrada
  O arquivo de entrada contém um texto (primeiro nome do funcionário) e dois valores de dupla precisão, que são o salário do vendedor e o valor total vendido por ele.
  
  Saída
  Imprima o salário total do vendedor, de acordo com o exemplo dado.
  
  INPUT JOAO 500.00 1230.30 OUTPUT TOTAL = R$ 684.54
PEDRO 700.00 0.00 TOTAL = R$ 700.00
MANGOJATA 1700.00 1230.50 TOTAL = R$ 1884.58
  `;

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/exercise"  element={<QuestionPage question={question}/>}  />
      <Route path="/exerciseList" element={<ExerciseList />} />
    </Routes>
  );
}

export default App;
