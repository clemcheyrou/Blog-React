import React, {useState} from "react";
import{useParams} from 'react-router-dom';

import fb from "./firebase";
const DB =fb.firestore()
const Blogslist = DB.collection('blogs');

const BlogView = () => {

	const {id} = useParams();
	const [blogs,SetBlogs]= useState([]);

	Blogslist.doc(id).get().then((snapshot) => {
		const data= snapshot.data();
		SetBlogs(data);
	});

	const body = blogs.Body;

	return (
		<div>
			<p>Title: {blogs.Title}</p>
			<div  dangerouslySetInnerHTML={{__html: body}} />
		</div>
	 );
};
 
export default BlogView;