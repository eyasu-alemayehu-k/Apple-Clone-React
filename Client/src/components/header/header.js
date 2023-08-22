import React from "react";
import HeaderLink from "./headerLink/headerLink";

function Header() {
  return (
      <header>
        <div className="__container">
          <nav className="_nav">
            <ul className="_nav-list _nav-list-mobile">
              <li className="_nav-item">
                <div className="mobile-menu">
                  <span className="line line-top"></span>
                  <span className="line line-bottom"></span>
                </div>
              </li>
              <li className="_nav-item">
                {/* <a href="#" className="_nav-link _nav-link-apple"></a> */}
                <HeaderLink linkUrl="/" iconClassName="_nav-link-apple" />
              </li>
              <li className="_nav-item">
                {/* <a href="#" className="_nav-link _nav-link-bag"></a> */}
                <HeaderLink linkUrl="/" iconClassName="_nav-link-bag" />
              </li>
            </ul>
            <ul className="_nav-list _nav-list-large">
              <li className="_nav-item _nav-item-hidden">
                {/* <a href="#" className="_nav-link _nav-link-apple"></a> */}
                <HeaderLink linkUrl="/" iconClassName="_nav-link-apple" />
              </li>
              <li><HeaderLink linkUrl="/store" linkName="Store" /></li>
              <li><HeaderLink linkUrl="/mac" linkName="Mac" /></li>
              <li><HeaderLink linkUrl="/iPad" linkName="iPad" /></li>
              <li><HeaderLink linkUrl="/iPhone" linkName="iPhone" /></li>
              <li><HeaderLink linkUrl="/watch" linkName="Watch" /></li>
              <li><HeaderLink linkUrl="/airPods" linkName="AirPods" /></li>
              <li><HeaderLink linkUrl="/tv" linkName="TV & Home" /></li>
              <li> <HeaderLink linkUrl="/entertainment" linkName="Entertainment" /></li>
              <li><HeaderLink linkUrl="/accessories" linkName="Accessories" /></li>
              <li className="_nav-item">
                {/* <a href="#" className="_nav-link _nav-link-search"></a> */}
                <HeaderLink linkUrl="/" iconClassName="_nav-link-search" />
              </li>
              <li className="_nav-item _nav-item-hidden">
                {/* <a href="#" className="_nav-link _nav-link-bag"></a> */}
                <HeaderLink linkUrl="/" iconClassName="_nav-link-bag" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default Header;
