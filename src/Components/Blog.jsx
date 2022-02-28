import React from "react";
import moment from 'moment';
import BlogComponent from './BlogComponent';
import shortid from 'shortid';
import axios from "axios";

export default class Blog extends React.Component {
    constructor(){
        super();
        this.state={
            blogArr:[],
            text:'',
            title:'',
            img:'',
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/doctor/api/selectBlogs')
        .then(response=>{
            console.log(response.data);
            this.setState({
                blogArr:response.data
            })
        })
       
        }
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({
            [name] : value,
        })
    }
    addBlog = blog => {
        const newBlogs = [blog,...this.state.blogArr];
        this.setState({
            blogArr : newBlogs,
        })
    }
    handleSubmit = e=> {
        e.preventDefault()
        this.addBlog({
            text:this.state.text,
            img : this.state.img,
            createdAt : moment().format(),
            doctorId : shortid.generate(),
        });
        axios.post('http://localhost:3000/doctor/api/postBlogs',this.state);
        this.uploadImage();
    }
    uploadImage = files => {
        const formData = new FormData();
        formData.append("file",files[0]);
        formData.append("upload_preset", "wjrv25lx")
        axios.post('https://api.cloudinary.com/v1_1/dcpnqg5fy/image/upload',formData).then(response=>{
            console.log(response)
        })
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                 <div><input name='title' value={this.state.title} onChange={this.handleChange} /></div>   
                 <div><input name='img' value={this.state.img} onChange={this.handleChange} /></div> 
                 <input type="file" onChange={(event)=>{
                     this.uploadImage(event.target.files);
                 }} />  
                 <div><textarea name='text' value={this.state.text} onChange={this.handleChange} /></div>  
                 <button onClick={this.handleSubmit} >Add Blog</button> 
                    {this.state.blogArr.map(blog=>{
                        return(
                            <table>
                                <BlogComponent key={blog.texte} blog={blog} />

                            </table>
                        )
                    })}
                </form>
            )
    }
}