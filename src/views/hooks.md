
Los hooks en ReactJS son funciones que te permiten "engancharte" al estado y al ciclo de vida de React desde componentes funcionales. Antes de los hooks, estas funcionalidades solo estaban disponibles en componentes de clase. Ahora puedes hacer casi todo desde componentes funcionales usando hooks.


Permite agregar estado a un componente funcional.

```js
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
      Contador: {contador}
    </button>
  );
}
```


Ejecuta efectos secundarios (peticiones, suscripciones, etc.) en el componente.

```js
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

    fetch('/api/data')
      .then(res => res.json())
      .then(setData);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Se ejecuta solo una vez al montar

  return <pre>{JSON.stringify(data)}</pre>;
}
```


Permite acceder a un contexto sin necesidad de usar un <Consumer>.

```js
const TemaContext = React.createContext('claro');

function Boton() {
  const tema = useContext(TemaContext);
  return <button className={tema}>Botón</button>;
}
```