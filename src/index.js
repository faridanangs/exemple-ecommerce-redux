import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

function DisplayMessage({ message }) {
  return (
    <div className="message">
      {message}
    </div>
  );
}

function RootComponent() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowMessage(window.innerWidth < 1024); // Ubah angka 1024 sesuai kebutuhan Anda
    }

    handleResize(); // Panggil sekali saat komponen dipasang
    window.addEventListener('resize', handleResize); // Panggil saat ukuran layar berubah

    return () => {
      window.removeEventListener('resize', handleResize); // Hapus event listener saat komponen dilepas
    };
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        {showMessage ? <DisplayMessage message="Website ini hanya dapat diakses pada layar laptop atau lebih besar." /> : <App/>}
      </Provider>
    </React.StrictMode>
  );
}

root.render(<RootComponent />);
