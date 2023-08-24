import styles from "./app.module.css";

import { useState } from "react";
import ColorForm from "./components/ColorForm";

export default function App() {
  const [colorList, setColorList] = useState([]);
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("");
  const [formError, setFormError]= useState('')
  
  const handleColorSubmit = (event) => {
    event.preventDefault();
    
    
    if(colorName.length < 3){
      setFormError("A sua cor precisa ter no mínimo 3 dígitos")
      setColorName('')
      return;
    }
    
    if(colorHex.length < 6){
      setFormError("A cor Hexadecimal precisa ter no mínimo 6 dígitos")
      setColorHex('')
      return;
    }
    
    const newColor = { nome: colorName, cor: colorHex };
    setColorList((OldColorList) => [...OldColorList, newColor]);
    
    setColorName('')
    setColorHex('')
    setFormError('')
    
    console.log(newColor)
  };

  return (
    <>
      <section className={styles.formSection} onSubmit={handleColorSubmit}>
        <h1>ADICIONAR COR FAVORITA</h1>

        <form>
          <div className={styles.inputs}>
            <div>
              <label>Nome</label>
              <input
                type="text"
                onChange={(event) => setColorName(event.target.value)}
                value={colorName}
                required
              />
            </div>

            <div>
              <label>Cor</label>
              <input
                type="text"
                placeholder="Não esqueça do # antes da cor"
                onChange={(event) => setColorHex(event.target.value)}
                value={colorHex}
              />
            </div>

            <div>
              <label>Não sabe o hexadecimal? Não tem problema, escolha sua cor aqui</label>
              <input
                type="color"
                onChange={(event) => setColorHex(event.target.value)}
                value={colorHex}
              />
            </div>
          </div>

          <button>Adicionar</button>
          
          <span className={styles.error}>{`${formError}`}</span>

        </form>
      </section>

      <section className={styles.corFavorita}>
        <h1>CORES FAVORITAS</h1>

        <div className={styles.cards}>

          
              {colorList && (
                colorList.map((item, index) => {
                  return (
                    <ColorForm
                      key={index}
                      nome={item.nome} 
                      cor={item.cor}
                    />
                  )
                })
              )}

        </div>
      </section>
    </>
  );
}
