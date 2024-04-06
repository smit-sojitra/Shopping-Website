import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts,setPosts] = useState([]);
  const[loading,setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      console.log(data);
      // throw new Error('Something went wrong');
    }
    catch(e){
      alert(e.message);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( ()=>{
    fetchData();
  },[]);

  return (
    <div className='mb-5'>
      {
        loading ?
        <Spinner/> :
        posts.length === 0 ?
        <div className='flex justify-center h-screen'>
          <p>No Data found</p>
        </div> :
        <div className='grid xs:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {
            posts.map( (post) => (
              <Product key={post.id} post={post}/>
              ) )
          }
        </div>
      }
    </div>
  )
}

export default Home