import React, {Component} from 'react';
import '../Home/style.css';
import './Work.css';
import '../App.css'
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer"

class Work extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/*header*/}
                <Header/>
                {/*body*/}
                <section className="Work_banner">
                </section>
                <section className="Work_body">

                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="left_list_w">
                            <ul>
                                <li>
                                    <span><i className="fas fa-history"> </i></span>
                                    <span><a href="#History">歴史</a></span>
                                </li>
                                <br/>
                                <li>
                                    <span ><i className="fas fa-edit"> </i></span>
                                    <span> <a href="#Skill">スキル</a></span>
                                </li>
                                <br/>
                                <li>
                                    <span><i className="fas fa-book"> </i></span>
                                    <span> <a href="#Products">製品</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <section className="History" id ="History">
                            <div className="body_w">
                                <h1>歴史</h1>
                                <div className="timeline_w">
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <h3>Relipa ソフトウェア会社</h3>
                                                <p>インターンシップ: Database, Java Basic</p>
                                            </div>

                                            <div className="time">
                                                <h4>2019年08月01日 <br/>2019年09月27日</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <h3>GetFly CRM　会社</h3>
                                                <p>インターンシップ: PHP - Laravel, ReactJS</p>
                                            </div>
                                            <div className="time">
                                                <h4>2019年12月15日<br/>
                                                ->>現在</h4>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className="Skill" id="Skill">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="body_w">
                                    <h1>スキル</h1>
                                    <div className="body_skill">
                                        <div className="body_skill_child">
                                            <div className="card">
                                                <div className="circle">
                                                    <div className="percent">
                                                        <svg>
                                                            <circle cx="70" cy="70" r="70"> </circle>
                                                            <circle cx="70" cy="70" r="70"> </circle>
                                                        </svg>
                                                        <div className="number">
                                                            <h2>60<span>%</span></h2>
                                                        </div>
                                                    </div>
                                                    <h2 className="text">HTML - CSS</h2>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="circle">
                                                    <div className="percent">
                                                        <svg>
                                                            <circle cx="70" cy="70" r="70"> </circle>
                                                            <circle cx="70" cy="70" r="70"> </circle>
                                                        </svg>
                                                        <div className="number">
                                                            <h2>50<span>%</span></h2>
                                                        </div>
                                                    </div>
                                                    <h2 className="text">PHP - Laravel</h2>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="circle">
                                                    <div className="percent">
                                                        <svg>
                                                            <circle cx="70" cy="70" r="70"> </circle>
                                                            <circle cx="70" cy="70" r="70"> </circle>
                                                        </svg>
                                                        <div className="number">
                                                            <h2>30<span>%</span></h2>
                                                        </div>
                                                    </div>
                                                    <h2 className="text">React JS</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*<section className="Products" id="Products">*/}
                        {/*    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">*/}
                        {/*        <div className="body_e">*/}
                        {/*            <h1>製品</h1>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                    </div>
                </section>
                {/*footer*/}
                <Footer/>
            </div>
        )
    }


}

export default Work;
