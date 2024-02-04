import { gql, useQuery } from '@apollo/client';
import './App.css';
import Header from './components/layout/Header';

// const QUERY = gql`
// query{
//   posts{content}
  
// }

// `


function App() {
  // const { loading, data } = useQuery(QUERY)
  // console.log(data);
  return (
    <div>
    <Header/>
    </div>
  );
}

export default App;
