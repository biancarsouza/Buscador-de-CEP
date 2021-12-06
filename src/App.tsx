import { DateInput } from './components/input';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <div className="App">

      <>
        <DateInput onChange={undefined} value={undefined} />
        <GlobalStyle />
      </>

    </div>
  );
}