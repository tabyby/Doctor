import React from "react";

function BlogComponent(props) {
    return(
        <div>
            <div>{props.blog.title}</div>
            <img src={props.blog.img} />
            <div>{props.blog.text}</div>
            <div>{props.blog.doctorId}</div>
            <div>{props.blog.createdAt}</div>
        </div>
    )
}   
export default BlogComponent;
