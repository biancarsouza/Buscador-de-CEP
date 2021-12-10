import { CEPInput } from './components/input';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <div className="App">

      <>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <CEPInput onChange={undefined} value={undefined} />
        <GlobalStyle />
      </>

    </div>
  );
}