import React , {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

import fb from "./firebase";
const DB =fb.firestore()
const Blogslist = DB.collection('blogs');

const BlogEdit = () =>
{
    const { id } = useParams();

    const [title , SetTitle] = useState("");
	const [body , SetBody] = useState("");

    useEffect( ()=> {
        if (id) {
            Blogslist.doc(id).get().then((snapshot) => {
                const data = snapshot.data();
                SetTitle(data.Title);
                SetBody(data.Body);
            });
        }   
    },[id]);
        
    const submit =(e)=> {
        e.preventDefault();
        Blogslist.doc(id).update({
            Title: title,
            Body: body
        })
        .then((docRef)=> {
            alert("data successfully submit")
        })
        .catch((error) => {
            console.error("error:", error);
        });
    }
    return(
        <div>
            
            <form onSubmit={(event) => {submit(event)}}>    
            <input type="text" placeholder="Title" value={title}
            onChange={(e)=>{SetTitle(e.target.value)}} required />

            <Editor 
             textareaName="content"
             initialValue="write your content here" 
             onEditorChange={(newText)=>{SetBody(newText)}} 
             init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            />

            <button type="submit">Submit</button>
        </form>
        </div>
    );
};
export default BlogEdit;