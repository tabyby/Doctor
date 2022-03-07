import React from "react";
import './blog.css'

function BlogComponent(props) {
    return (
        <div>
            {/* <div>{props.blog.text}</div>
            <div>{props.blog.doctorId}</div>
            <div>{props.blog.createdAt}</div> */}
            <div id="container">
                <div class="product-details">
                    <h1>{props.blog.title}</h1>
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <p class="information">{props.blog.texte}</p>
                </div>
                <div class="product-image">
                    <img src={props.blog.img} alt="" />
                </div>
                <button onClick={props.handleDelete} >Delete Blog</button>
            </div>
            <br />
        </div>
    )
}
export default BlogComponent;
