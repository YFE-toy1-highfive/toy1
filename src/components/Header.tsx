// import React from 'react';
import '../scss/components/_header.scss';
import { Link } from 'react-router-dom';
const Header = (): JSX.Element => {
  return (
    <header className="header shadow">
      <Link to="/" className="header__logo">
        <span> HIGH FIVE 🖐</span>
      </Link>
      <div className="header__user">
        <div className="header__user-img"></div>
        <span className="header__user-name">김땡땡</span>
        <button className="header__user-login-btn btn">로그인</button>
      </div>
      <nav className="drop-down shadow">
        <ul>
          <li>
            <Link to="/">근태관리</Link>
          </li>
          <li>
            <Link to="/">마이페이지</Link>
          </li>
          <li>로그아웃</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
