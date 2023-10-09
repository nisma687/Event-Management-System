

const Blogs = (blog) => {
    
    console.log(blog.blog);
    return (
        <div className="card w-85 bg-base-100 shadow-xl">

        <figure><img src={blog.blog.img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{blog.blog.title}</h2>
          <p className="text-semibold text-blue-600 italic">Title:{blog.blog.title}</p>
          <p className="text-xl font-normal">{blog.blog.description}</p>
          
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    );
};

export default Blogs;