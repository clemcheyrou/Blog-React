import React, { useState, useEffect} from "react";
import{useParams} from 'react-router-dom';
import fb from "./firebase";
const DB =fb.firestore()
const Blogslist = DB.collection('blogs');

const BlogEdit = () => {

	const {id} = useParams();

	const[title, SetTitle] = useState("");
	const[body, SetBody] = useState("");

	useEffect((id)=> {
		Blogslist.doc(id).get().then((snapshot) => {
			const data= snapshot.data();
			SetTitle(data.Title);
			SetBody(data.Body);
		});
	}, []);

    const sub = (e) => {
        e.preventDefault();

        Blogslist.doc(id).update({
            Title: title,
            Body: body,
            last_Updated: fb.firestore.Timestamp.fromDate(new Date())
        })
        .then((docRef) => {
            alert("Data Successfully Updated");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

	return (
		<div>
        
		<form onSubmit={(event) => {sub(event)}}>    
            <input type="text" placeholder="Title"  value={title}
            onChange={(e)=>{SetTitle(e.target.value)}} required />

            <textarea  name="content" type="text" value={body}
            placeholder="write yoyr content here" 
            rows="10" cols="150" onChange={(e)=>{SetBody(e.target.value)}} required >
            </textarea>

            <button type="submit">Submit</button>
		</form>

		</div>
	 );
};

export default BlogEdit;