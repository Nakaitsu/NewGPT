import './App.css';

function App() {
  return (
    <>
      <div className="secoes">
        <a href="#" className='secoes-link active'>Questões</a>
        <a href="#" className='secoes-link'>Log</a>
        <a href="#" className='secoes-link'>Forum</a>
      </div>

      <div className="conteudo">
        <div className="instrucoes">
          <h2>Instruções</h2>
          <p className="info"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, in esse! Repellendus, perferendis nihil veritatis ad debitis quo sequi rem voluptatibus quisquam quam exercitationem enim nemo iste eos accusantium obcaecati?</span></p>
          <p className="info"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis id doloribus numquam voluptas. Quae reiciendis dolorum consequatur corrupti placeat velit. Sequi sapiente reprehenderit enim corporis consectetur similique fugiat ipsa.</span></p>
          <p className="info"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis atque molestiae deserunt dignissimos amet beatae nulla placeat molestias, expedita, mollitia eveniet officiis aliquid ea doloribus modi minus cumque dicta. Mollitia.</span></p>
        </div>
        <form className="codeEditor">
          <div className="opcoes">
            <select className='opcao' name="language" id="language">
              <option value="javascript">Javascript</option>
              <option value="c#">c#</option>
              <option value="python">python</option>
              <option value="pascal">pascal</option>
            </select>

            <div className="opcoes-list">
              <button className='opcao'>Expand</button>
              <button className='opcao'>Hint</button>
              <button className='opcao' id="btn-copy">Copy</button>
              <button className='opcao'>Reset</button>

              <button className='enviar opcao' id="btn-submit">SUBMIT</button>
            </div>
          </div>
          <div className="editor">
            <textarea name="code" id="code" cols="60" rows="30"></textarea>
          </div>
          <div className="resultado" id="resultado">
            Console:
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
