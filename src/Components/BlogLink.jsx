import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
export default class BlogLink extends React.Component{
    constructor(){
        super();
        this.state={
            blogs: []
        }
    }
    componentDidMount() {
        axios
          .get("http://localhost:3000/doctor/api/selectBlogs")
          .then((response) => {
            console.log(response.data);
            this.setState({
              blogs: response.data,
            });
          });
      }
    render(){
        return(
            <div>
                      <div className="parent">
        <Sidebar />
   
            <div>
             {this.state.blogs.map((blog) => {
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
          </div>
          <div >
       
          </div>
        </div>
        )
    }
}