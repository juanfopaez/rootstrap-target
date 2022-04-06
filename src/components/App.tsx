import React from 'react';

import useSession from 'hooks/useSession';

function App() {
  const { authenticated } = useSession();

  return <div className="App">Rootstrap Target By Juan Forero</div>;
}

export default App;
