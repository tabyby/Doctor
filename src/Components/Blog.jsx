import React from "react";
import axios from "axios";
import BlogComponent from "./BlogComponent";
export default class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      title:"",
      blogArr : [],
      texte:"",
      img :"",
      createdAt : "",

    }
  }
  componentDidMount(){
    axios.get('http://localhost:3000/doctor/api/selectBlogs')
    .then(response=>{
      console.log(response.data)
      this.setState({
        blogArr : response.data,
      })
    })
  };
  handleChange = e => {
    const {name,value} = e.target;
    this.setState({
      [name] :value,
    })
  }
  addBlog = blog => {
    let newBlog = [blog,...this.state.blogArr];
    this.setState({
      blogArr : newBlog,
    })
  };

  uploadImg = files => {
    let formData = new FormData;
    formData.append("file",files[0]);
    formData.append('upload_preset',"whnlss8f");
    axios.post("https://api.cloudinary.com/v1_1/dcpnqg5fy/image/upload",formData)
    .then(response=>{
      console.log(response.data.secure_url);
      this.setState({
        img : response.data.secure_url,
      },()=>{
        console.log(this.state)
      })
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addBlog({
      title : this.state.title,
      texte : this.state.texte,
      img : this.state.img,

    })
    axios.post('http://localhost:3000/doctor/api/postBlogs',this.state);
    console.log(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <div><input name="title" value={this.state.title} onChange={this.handleChange} /></div>
        <div><textarea name="texte" value={this.state.texte} onChange={this.handleChange} /></div>
        <div><input  onChange={(e)=>{
          this.uploadImg(e.target.files)
        }}  type="file"/></div>
        <button type="submit" onClick={this.handleSubmit} >add blog</button>
        <div>{this.state.blogArr.map(blog=>{
          return(
            <BlogComponent blog={blog} key={blog.texte} />
          )
        })}</div>
      </form>
    )
  }
}