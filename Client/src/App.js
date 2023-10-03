import { useState } from 'react';
import { Card } from './components/Card';
import { SearchBar } from './components/SearchBar'

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="relative w-11/12  mx-auto flex flex-col gap-5 py-4">
      <SearchBar setSearch={setSearch}/>
      <Card search={search}/>
      
    </div>
  );
}

export default App;
