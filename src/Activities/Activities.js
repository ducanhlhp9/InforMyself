import React, {Component} from 'react';
import '../Home/style.css';
import './Activities.css';
import '../App.css';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer"
import Slideshow from "./slideshow/Slideshow";
import './slideshow/slideshow.css'
import img1 from '../Front_end/images/slide/school1.png';
import img2 from '../Front_end/images/slide/school2.png';
import img3 from '../Front_end/images/slide/school3.png';
import img4 from '../Front_end/images/slide/school4.png';
import img5 from '../Front_end/images/slide/vol1.png';
import img6 from '../Front_end/images/slide/vol2.png';
import img7 from '../Front_end/images/slide/vol3.png';

const collection1 = [
    {src: img1, caption: "Cổng Tori"},
    {src: img2, caption: "Câu lạc bộ của tôi"},
    {src: img3, caption: "Chào khóa mới k63"},
    {src: img4, caption: "Oshougatsu 2019"},

];
const collection2 = [
    {src: img5, caption: "Đội của tôi"},
    {src: img6, caption: "Chụp với bạn Đội trưởng"},
    {src: img7, caption: "Thuyết trình, giáo dục trẻ em"},
];

class Activities extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {/*header*/}
                <Header/>
                {/*body*/}
                <section className="Act_banner">
                </section>
                <section className="Act_body">

                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <div className="left_list_a">
                            <ul>
                                <li>
                                    <span><i className="fas fa-school"> </i></span>
                                    <span> <a href="#School">大学</a></span>
                                </li>
                                <br/>
                                <li>
                                    <span><i className="fas fa-water"> </i></span>
                                    <span> <a href="#Volunteer">ボランティア</a></span>
                                </li>
                                <br/>
                                <li>
                                    <span><i className="fas fa-smile"> </i></span>
                                    <span> <a href="#Experience">経験</a></span>
                                </li>
                                <br/>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <section className="School" id="School">
                            <div className="body_act">
                                <h1>大学</h1>
                                <div className="box_text">
                                    <label className="title">
                                        <p>役割 </p>
                                        <p>活動</p>
                                        <p>経験 </p>
                                    </label>
                                    <label className="main_text">
                                        <p>: Hedspi Nichibuクラブの船長</p>
                                        <p>: 工科大学のお正月お祭り２０１９</p>
                                        {/*<p>: Qua hoạt động trên có thể tích lũy cho bản thân mình nhiều kinh nghệm quý*/}
                                        {/*    báu,nhận ra nhiều*/}
                                        {/*    thiếu sót của bản thân, tự tin hơn, hiểu biết sâu hơn về văn hóa Nhật, quen*/}
                                        {/*    được nhiều các công ty tài trợ,*/}
                                        {/*    quen biết được nhiều anh chị khoa trên và đặc biệt là xây dựng được môi*/}
                                        {/*    trường hoạt động CLB cho các thành viên*/}
                                        {/*    trong CLB Hedspi Nichibu. Thật tuyệt vời nếu được sang làm việc ở Nhật và có*/}
                                        {/*    các anh chị khóa trên trong CLB*/}
                                        {/*    đón mình và có những người bạn tốt thời sinh viên để cuộc sống vui vẻ và*/}
                                        {/*    không còn cảm giác xa nhà </p>*/}
                                        <p>自分への自信<br/>
                                            管理経験<br/>
                                            他の人の話を聞くことを学びました。<br/>
                                            多くの先輩と知り合います。 日本の経験とITスキルを学びました。
                                        </p>
                                    </label>
                                </div>
                                <div className="App">
                                    <Slideshow
                                        input={collection1}
                                        ratio={`3:2`}
                                        mode={`automatic`}
                                        timeout={`3000`}
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="Volunteer" id="Volunteer">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="body_act">
                                    <h1>ボランティア</h1>
                                    <div className="box_text">
                                        <label className="title">
                                            <p>役割 </p>
                                            <p>活動</p>
                                            <p>経験 </p>
                                        </label>
                                        <label className="main_text">
                                            <p>: Ha Nam Ninhクラブの副隊長</p>
                                            <p>:　ボランティアの活動</p>
                                            <p>: 喜びと幸福。<br/>
                                                私と親しい友人がいます。<br/>
                                                他の人に幸せをもたらします。</p>
                                        </label>
                                    </div>
                                    <div className="App">
                                        <Slideshow
                                            input={collection2}
                                            ratio={`3:2`}
                                            mode={`automatic`}
                                            timeout={`3000`}
                                        />

                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="Experience" id="Experience">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="body_act">
                                    <h1>経験</h1>
                                    <div className="center_e">
                                        <div className="Experience_box">
                                            <p>幸せな</p>
                                            <p>100%</p>
                                            <div className="level_e">
                                                <div className="e_level" style={{width: "100%"}}></div>
                                            </div>
                                        </div>
                                        <div className="Experience_box">
                                            <p>チームワーク</p>
                                            <p>80%</p>
                                            <div className="level_e">
                                                <div className="e_level" style={{width: "80%"}}></div>
                                            </div>
                                        </div>
                                        <div className="Experience_box">
                                            <p>マネージャー</p>
                                            <p>70%</p>
                                            <div className="level_e">
                                                <div className="e_level" style={{width: "50%"}}></div>
                                            </div>
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

export default Activities;
