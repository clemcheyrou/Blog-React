import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import fb from "./firebase";

const DB =fb.firestore()
const Blogs = DB.collection('blogs');

const Blogslist = () => {

	const [blogslist,SetBlogs]= useState([]);

	useEffect(()=>{
		const unsubscribe = Blogs.limit(100).onSnapshot(querySnapshot => {
			const data= querySnapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			}));
		SetBlogs(data);
		});

		return unsubscribe;
	}, []);

	const DeleteBlog = (id)=> {
        Blogs.doc(id).delete().then(() => {
            alert("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };
	
	return ( 
		<div>
        <h2 className="w-full text-center font-bold text-xl">All blogs List</h2>
            {blogslist.map(blog=> (
                <div key={blog.id}>
					<p>Title : {blog.Title}</p>
					<p>body: {blog.Body} </p>
					<Link to={"/show/"+blog.id}>View</Link>
					<Link to={"/Editblog/"+blog.id}>Edit</Link>
					<button 
                            onClick={()=> {DeleteBlog(blog.id)}} 
                        >delete</button>
				</div>          
            ))}
    </div>
    );	
};
 
export default Blogslist;