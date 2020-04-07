import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({
                    scrolled: true
                })
            } else {
                this.setState({scrolled: false})
            }
        })
    }

    render() {
        return (

            <div className={this.state.scrolled ? 'top-title scrolled' : 'top-title'}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <NavLink className="name"  to="/">Canhの情報</NavLink>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 block">
                    <ul>
                        <li>
                            <NavLink className="main-nav"  to="/">インタビュー</NavLink>
                        </li>
                        <li>
                            <NavLink className="main-nav" activeClassName="main-nav-active" to="/education">学習</NavLink>
                        </li>
                        <li>
                            <NavLink className="main-nav" activeClassName="main-nav-active" to="/work">職業</NavLink>
                        </li>
                        <li>
                            <NavLink className="main-nav" activeClassName="main-nav-active" to="/Activities">課外活動</NavLink>
                        </li>
                        <li>
                            <NavLink className="main-nav" activeClassName="main-nav-active" to="/blog">ブロック</NavLink>
                        </li>
                    </ul>
                </div>

            </div>

        )
    }
}

export default Header;
