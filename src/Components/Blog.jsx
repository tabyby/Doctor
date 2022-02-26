import React from "react";
import moment from 'moment';
import BlogComponent from './BlogComponent';
import shortid from 'shortid';

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
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                 <div><input name='title' value={this.state.title} onChange={this.handleChange} /></div>   
                 <div><input name='img' value={this.state.img} onChange={this.handleChange} /></div>   
                 <div><textarea name='text' value={this.state.text} onChange={this.handleChange} /></div>  
                 <button onClick={this.handleSubmit} >Add Blog</button> 
                    {this.state.blogArr.map(blog=>{
                        return(
                            <table>
                                <BlogComponent key={blog.doctorId} blog={blog} />

                            </table>
                        )
                    })}
                </form>
            )
    }
}