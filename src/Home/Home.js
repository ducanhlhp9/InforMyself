import React, {Component} from 'react';
import './style.css';
import '../App.css'
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer"

class Home extends Component {
    render() {
        return (
            <div>
                {/*header*/}
                <Header/>
                {/*body*/}
                <div className="box">
                    <div className="container">

                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 Home_content">
                            <span className="say-hi">HELLO</span>
                            <h2 className="my-name">
                                I'm <span>Hoang Duc Anh</span>
                            </h2>
                            <div className="details ">
                                <label className="labels">
                                    <p>大学</p>
                                    <p>職業</p>
                                    <p>年齢</p>
                                    <p>趣味</p>
                                </label>
                                <label className="information">
                                    <p>: ハノイ工科大学</p>
                                    <p>: 学生</p>
                                    <p>: 21 際</p>
                                    <p>: 私は他の人を笑わせるのが好きです。人が笑顔になるたびに、私はとても幸せで幸せだと感じますから。だから、私はコミュニティの活動に参加することを本当に楽しんでいます。私のお気に入りの引用は：笑いのない日は、無駄な一日であります。<br/>
                                        私は読書、音楽を聴く、ブログを書くのが好きです。毎日早起きして本の数ページを読むようにしています。読書は勉強や人生で多くのことを学ぶのに役立ちます。音楽を聴くと、心がリラックスし、一日のストレスを軽減できます。週末には時々、好きなものを書くのに時間を費やします。<br/>
                                        それに、私は歩くのが好きで、バイクに乗って遠くまで行き、新鮮な空気を吸います。 これは非常に快適です。
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/*footer*/}
                <Footer/>
            </div>
        )
    }
}

export default Home;
