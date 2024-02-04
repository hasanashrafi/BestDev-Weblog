import { gql, useQuery } from '@apollo/client';
import './App.css';




const QUERY = gql`
query{
  authors{name}
}

`





function App() {
const {loading,data} = useQuery(QUERY)
console.log(data);
  return (
    <div>
      <h2>BesT DeV || Blog</h2>
    {data.authors.map((author)=><p>نویسنده: {author.name}</p>)}
    </div>
  );
}

export default App;
