import React, {Component} from 'react';


class Footer extends Component {

    render() {
        return (
            <div className="bottom_content">
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
            </div>

        )
    }
}

export default Footer;
