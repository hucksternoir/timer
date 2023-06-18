import { useState, useEffect } from "react";
import { Spacer, Container } from "./style";

function App() {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [milisegundos, setMilisegundos] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const iniciar = () => {
    const id = setInterval(() => {
      setMilisegundos((ms) => ms + 1);
    }, 1);
    setIntervalId(id);
  };

  const parar = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setMilisegundos(0);
  };

  useEffect(() => {
    if (milisegundos == 100) {
      setSegundos((s) => s + 1);
      setMilisegundos(0);
    }

    if (segundos === 60) {
      setMinutos((m) => m + 1);
      setSegundos(0);
    }

    if (minutos == 60) {
      setHoras((hr) => hr + 1);
      setMinutos(0);
    }

    const visibilidadeTitulo = () => {
      if (document.visibilityState == "visible") {
        document.title = `(${horas}:${minutos}:${segundos})`;
      }

      document.addEventListener("visibilitychange", visibilidadeTitulo);

      return () => {
        document.removeEventListener("visibilitychange", visibilidadeTitulo);
      };
    };
  }, [milisegundos, segundos, minutos, horas]);

  return (
    <>
      <Spacer margin="30vh" />
      <Container>
        <p>
          <span id="minute">{horas.toString().padStart(2, "0")}</span>:
          <span id="minute">{minutos.toString().padStart(2, "0")}</span>:
          <span id="second">{segundos.toString().padStart(2, "0")}</span>:
          <span id="milisecond">
            {milisegundos.toString().padStart(2, "0")}
          </span>
        </p>
      </Container>
      <Spacer />
      <Container className="buttons">
        <button type="button" className="start" onClick={iniciar}>
          start
        </button>
        <button type="button" className="stop" onClick={parar}>
          stop
        </button>
        <button type="button" className="reset" onClick={reset}>
          reset
        </button>
      </Container>
    </>
  );
}

export default App;
