import  { useState, useEffect } from 'react';
import PostItem from './components/PostItem.jsx';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  async function fetchData () { {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };
}

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
     {loading && <h1>Loading...</h1>}
    {error && <h1>{error}</h1>}

    <div >
      <h1>React Pagination App</h1>

      <div id="btn-holder">
        <button onClick={handlePrevPage} disabled={page === 1} id='prev'>Previous</button>
        <span> Page {page} </span>
        <button onClick={handleNextPage} id='next'>Next</button>
      </div>

      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}

      
    </div>
    </>
   
  );
};

export default App;
