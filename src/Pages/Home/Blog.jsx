import  { useEffect, useState } from 'react';
import Blogs from './Blogs';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data);
        })

    },[])
    console.log(blogs);
    return (
        <div className='mt-4 mb-2'>
            <h2 className="text-3xl  text-center font-bold mb-4">Our Blog!!!!</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    blogs?.map(
                        blog=><Blogs
                        blog={blog}
                        key={blog.id}
                        ></Blogs>
                    )
                        
                    
                }
            </div>
        </div>
    );
};

export default Blog;