import React, {useState, useEffect} from 'react';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer"
import blogPost from '../data/blog.json'
import blogCategory from '../data/category.json'
import './Blog.css';

import {
    Link
} from "react-router-dom";

const Blog = (props) => {

    const [posts, setPosts] = useState([]
    );


    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const categories = blogCategory.data;
        setCategories(categories);
    }, [categories]);
    return (
        <div>
            {/*header*/}
            <Header/>
            {/*body*/}
            <div>
                <section className="banner" id="banner">
                    <div className="content">
                        <br/><br/><br/><br/><br/><br/>
                        <h1>My Blog</h1>
                        <a href="#post">Start</a>
                    </div>
                </section>
                <section className="blog_categorie_area ">
                    <div className="row">

                        {
                            categories.map(category => {
                                return (
                                    <div className="col-lg-4">
                                        <Link key={category.id}
                                              to={`/blogCategory/${category.blogCategory}`}>
                                            <div className="categories_post">
                                                <img src={require("./blogCategoryImages/" + category.category_image)}
                                                     alt="Post Image"/>
                                                <div className="categories_details">
                                                    <div className="categories_text">
                                                        <h5>{category.blogCategory}</h5>
                                                        <div className="border_line"> </div>
                                                        <p>{category.category_content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="Blog">
                    {
                        posts.map(post => {
                            return (
                                <div className="col-xs-6 " style={{marginTop: "100px"}}>
                                    <div className="post" id="post">
                                        <img src={require("./blogPostImages/" + post.blogImage)} alt="Post Image"/>
                                        <Link key={post.id} to={`/post/${post.slug}`} className="button view">詳しく</Link>
                                        <div className="post-title">
                                            <h3>{post.blogTitle}</h3>
                                            <p>{post.content_seo}</p>
                                        </div>
                                        <div className="post-date">
                                            <span> </span>
                                            <span> </span>
                                            <span>{post.postedOn}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </section>
            </div>
            {/*footer*/}
            <Footer/>
        </div>
    )
};

export default Blog;
