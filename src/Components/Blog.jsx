import React from "react";
import axios from "axios";
import "./contact.css";
import BlogComponent from "./BlogComponent";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      blogArr: [],
      texte: "",
      img: "",
      delete: 0,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/doctor/api/selectBlogs")
      .then((response) => {
        console.log(response.data);
        this.setState({
          blogArr: response.data,
        });
      });
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  addBlog = (blog) => {
    let newBlog = [blog, ...this.state.blogArr];
    this.setState({
      blogArr: newBlog,
    });
  };

  uploadImg = (files) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "whnlss8f");
    axios
      .post("https://api.cloudinary.com/v1_1/dcpnqg5fy/image/upload", formData)
      .then((response) => {
        console.log(response.data.secure_url);
        this.setState(
          {
            img: response.data.secure_url,
          },
          () => {
            console.log(this.state);
          }
        );
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addBlog({
      title: this.state.title,
      texte: this.state.texte,
      img: this.state.img,
    });
    axios.post("http://localhost:3000/doctor/api/postBlogs", this.state);
    console.log(this.state);
    this.componentDidMount();
    this.setState({
      texte :"",
      title:"",
      img : "",
    })
  };

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/doctor/api/deleteBlog/${id}`)
      .then((response) => {
        console.log(response.data);
        this.componentDidMount();
        this.setState({
          blogArr: this.state.blogArr.filter((blog) => blog.id !== id),
        });
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="parent">
        <Sidebar />
        <div className="div1 center">
          <div id="contact-form" className="form" >
            <form onSubmit={this.handleSubmit} >
            <br />
            <br />
            <br />
            <br />
            <h1>Post Blogs</h1>
            <br />
            <h5>Share with us medical informations.</h5>
            <br />
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Content</label>
              <textarea
                className="form-control"
                rows="15"
                name="texte"
                value={this.state.texte}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <label htmlFor="message">Content</label>
            <br />
            <div className="form-group btn btn-primary btn-sm float-left">
              <input
                onChange={(e) => {
                  this.uploadImg(e.target.files);
                }}
                type="file"
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
       
          </form>
             {this.state.blogArr.map((blog) => {
              console.log(blog.id_blog);
              return (
                <BlogComponent
                  handleDelete={() => this.handleDelete(blog.id_blog)}
                  blog={blog}
                  key={blog.texte}
                />
              );
            })}
          </div>
          <div >
       
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
