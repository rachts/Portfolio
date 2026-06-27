import React, { useState } from 'react';
import { IndexPage } from './pages/IndexPage';
import { LoadingScreen } from './components/ui/LoadingScreen';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      {loadingComplete && <IndexPage />}
    </>
  );
}

export default App;
