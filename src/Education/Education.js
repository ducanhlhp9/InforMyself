import React, {Component} from 'react';
import './Education.css'
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer"

class Education extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/*header*/}
                <Header/>
                {/*body*/}
                <section className="Education_banner">
                </section>
                <section className="Education_body">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="left_list">
                            <ul>
                                <li>
                                    <span><i className="fas fa-history"> </i></span>
                                    <span><a href="#History"> 歴史</a></span>
                                </li>
                                <br/>
                                <li>
                                    <span><i className="fas fa-language"> </i></span>
                                    <span> <a href="#Language"> 外国語</a></span>
                                </li>
                                <br/>
                                <li>
                                    <span><i className="fas fa-laptop"> </i></span>
                                    <span> <a href="#Programing"> プログラミング</a></span>
                                </li>
                                <br/>
                                <li>
                                    <span><i className="fas fa-book"> </i></span>
                                    <span> <a href="#project"> プロジェクト</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <section className="History" id="History">
                            <div className="body_e">
                                <h1>歴史</h1>
                                <div className="timeline">

                                    <ul>
                                        <li>
                                            <div className="content">
                                                <h3>Dao Su Tich 中等学校</h3>
                                                <p>ここでは、私は最初の独立した日を過ごしました。</p>
                                            </div>

                                            <div className="time">
                                                <h4> 2010年06月</h4>
                                            </div>
                                        </li>。
                                        <li>
                                            <div className="content">
                                                <h3> Le Hong Phong Nam Dinh 高校</h3>
                                                <p>若者の最も美しい時期<br/>思い出の多い場所。</p>
                                            </div>
                                            <div className="time">
                                                <h4>2014 年06月</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <h3>ハノイ工科大学</h3>
                                                <p>勉強、自分で練習、献身、現在、未来</p>
                                            </div>

                                            <div className="time">
                                                <h4>2017年08月</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className="Language" id="Language">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="body_e">
                                    <h1>外国語</h1>
                                    <div className="center">
                                        <div className="LanguageBox">
                                            <p>英語</p>
                                            <p>50%</p>
                                            <div className="level">
                                                <div className="lan_level" style={{width: "50%"}}></div>
                                            </div>
                                        </div>
                                        <div className="LanguageBox">
                                            <p>日本語</p>
                                            <p>50%</p>
                                            <div className="level">
                                                <div className="lan_level" style={{width: "50%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="Programing" id="Programing">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="body_e">
                                    <h1>プログラミング言語</h1>
                                    <div className="e_body_skill">
                                        <div className="e_body_skill_child">
                                            <div className="e_card">
                                                <div className="e_circle">
                                                    <div className="e_percent">
                                                        <svg>
                                                            <circle cx="70" cy="70" r="70"></circle>
                                                            <circle cx="70" cy="70" r="70"></circle>
                                                        </svg>
                                                        <div className="e_number">
                                                            <h2>60<span>%</span></h2>
                                                        </div>
                                                    </div>
                                                    <h2 className="e_text">Java</h2>
                                                </div>
                                            </div>

                                            <div className="e_card">
                                                <div className="e_circle">
                                                    <div className="e_percent">
                                                        <svg>
                                                            <circle cx="70" cy="70" r="70"></circle>
                                                            <circle cx="70" cy="70" r="70"></circle>
                                                        </svg>
                                                        <div className="e_number">
                                                            <h2>50<span>%</span></h2>
                                                        </div>
                                                    </div>
                                                    <h2 className="e_text">C Programing</h2>
                                                </div>
                                            </div>
                                            <div className="e_card">
                                                <div className="e_circle">
                                                    <div className="e_percent">
                                                        <svg>
                                                            <circle cx="70" cy="70" r="70"></circle>
                                                            <circle cx="70" cy="70" r="70"></circle>
                                                        </svg>
                                                        <div className="e_number">
                                                            <h2>30<span>%</span></h2>
                                                        </div>
                                                    </div>
                                                    <h2 className="e_text">Database</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="Project" id="project">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="body_e">
                                    <h1>プロジェクト</h1>
                                    <div className="project">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <img src="./dictionary.png" alt="Image"/>
                                            <h3>Project Dictionary</h3>
                                            <h4>C Programing</h4>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <img src="./bus.png" alt="Image"/>
                                            <h3>Project Find Bus way</h3>
                                            <h4>C Programing</h4>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <img src="./banhang.png" alt="Image"/>
                                            <h3>Project Database</h3>
                                            <h4>Database + PHP Laravel + HTML CSS</h4>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <img src="./flappybird.png" alt="Image"/>
                                            <h3>Project FalppyBird</h3>
                                            <h4>Java</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                {/*footer*/}
                <Footer/>
            </div>
        )
    }
}

export default Education;
