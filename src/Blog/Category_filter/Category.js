import React, {useState, useEffect} from 'react';
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer"
import blogPost from '../../data/blog.json'
import './Category.css';
import {
    Link
} from "react-router-dom";
import blogCategory_data from "../../data/category";


const Category = (props) => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    const [categories, setCategories] = useState({
        blogCategory: "",
        id: "",
        category_image: ""
    });
    const [blogCategory, setblogCategory] = useState('');


    useEffect(() => {
        const blogCategory = props.match.params.blogCategory;
        const categories = blogCategory_data.data.find(categories => categories.blogCategory === blogCategory);
        setCategories(categories);
        setblogCategory(blogCategory)
    }, [categories, props.match.params.blogCategory]);
    if (categories.category_image === "") return null;
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
                        <div className="col-lg-12">
                            <div className="blog_categories_post">
                                <img src={require("../blogCategoryImages/" + categories.category_image)}
                                     alt="Post Image"/>
                                <div className="blog_ategories_details">
                                    <div className="blog_categories_text">
                                        <h5>{categories.blogCategory}</h5>
                                        <div className="blog_border_line"></div>
                                        <p>{categories.category_content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Blog_category">
                    {
                        posts.map(post => {
                            if (categories.blogCategory === post.blogCategory)
                                return (
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
                                         style={{marginTop: "100px"}}>
                                        <div className="post" id="post">
                                            <img src={require("./../blogPostImages/" + post.blogImage)}
                                                 alt="Post Image"/>
                                            <Link key={post.id} to={`/post/${post.slug}`} className="button view">
                                                詳しくは</Link>
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

export default Category;
