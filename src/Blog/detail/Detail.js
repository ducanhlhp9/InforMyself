import React, {useState, useEffect} from 'react';
import Header from "../../Layouts/Header";
import './blog_detail.css';
import blogPost from '../../data/blog.json';

const Detail = (props) => {

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText1: "",
        blogText2: "",
        blogText3: "",
        blogText4: "",
        blogText5: "",
        blogText6: "",
    });
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    const [slug, setSlug] = useState('');


    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug === slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if (post.blogImage === "") return null;
    return (
        <div>
            {/*header*/}
            <Header/>
            {/*body*/}
            <div className="sidenav">
                <img src={require('../blogPostImages/' + post.blogImage)} alt="Post Image"/>
                <div className="background_img">
                    <h3>{post.blogTitle}</h3>
                    <div className="posted_infor">
                        <h5>postedby: Hoang Duc Anh on {post.postedOn}</h5>
                    </div>
                </div>
                <div className="post-category">
                    <span>{post.blogCategory}</span>
                </div>

            </div>

            <section className="detail_body">
                <div className="site_inner">
                    <div className="site_content">
                        <div className="content_area">
                            <div className="entry_inner">
                                <div className="entry_header">
                                    {post.blogTitle}
                                </div>
                                <div className="entry_content">
                                    <p>{post.blogText1}</p><br/>
                                    <p>{post.blogText2}</p><br/>
                                    <p>{post.blogText3}</p><br/>
                                    <p>{post.blogText4}</p><br/>
                                    <p>{post.blogText5}</p><br/>
                                    <p>{post.blogText6}</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*footer*/}
            <section className="bottom_content_detail">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <a href="https://www.instagram.com/hoangduc.anh.1420/" >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <a href="https://twitter.com/HongcAn52449307">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <a href="https://www.linkedin.com/in/hoang-duc-anh-668872192/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                    <a href="https://www.facebook.com/hoangduc.anh.1420">
                        <i className="fab fa-facebook">
                        </i>
                    </a>
                </div>
            </section>
        </div>
    )
};


export default Detail;
