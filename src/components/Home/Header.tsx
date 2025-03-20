import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import SquchLogo from "../../../public/images/squch-logo.svg";
import ArrowIcon from "../../../public/images/arrow.svg";
import ModalLogin from "../common/core/LoginModal";
import OtpVerification from "../common/core/OtpVerification";
interface HeaderProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isActive, setIsActive }) => {
  const [showModalLogin, setModalLogin] = useState(false);
  const [showOtpVerification, setOtpVerification] = useState(false);

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="logo me-auto">
            <Link href="/">
              <Image alt="Squch Logo" src={SquchLogo} />
            </Link>
          </div>
          <nav className="header-right">
            <ul className="menu-navbar-nav m-0 list-unstyled d-flex align-items-center">
              <li className="nav-item">
                <Link href="/">Partner with us</Link>
              </li>
              <li className="nav-item">
                <Link href="/">Squch Corporate</Link>
              </li>
            </ul>
          </nav>

          <div className="user-auth">
            <ul className="list-unstyled m-0 d-flex align-items-center">
              <li className="nav-item">
                <Link href="" className="btn btn-primary btn-get-app">Get the App
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5971 1.07224C1.59898 1.53247 1.97358 1.90404 2.43381 1.9022L8.67149 1.87692L0.698487 9.9148C0.374362 10.2416 0.3765 10.7692 0.703262 11.0933C1.03002 11.4174 1.55764 11.4153 1.88176 11.0885L9.85476 3.05065L9.88004 9.28833C9.88191 9.74854 10.2565 10.1201 10.7167 10.1183C11.1769 10.1164 11.5485 9.74178 11.5467 9.28158L11.5133 1.03206C11.5124 0.811075 11.4237 0.599442 11.2668 0.443806C11.1099 0.28817 10.8976 0.201207 10.6766 0.20212L2.42704 0.235547C1.96683 0.2374 1.59522 0.612026 1.5971 1.07224Z" fill="#262626" />
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="" className="btn btn-primary" onClick={() => setModalLogin(true)} >Sign in</Link>
              </li>
            </ul>
          </div>
          <button className="btn mobile-nav mobile-toggle d-md-none" onClick={() => setIsActive(!isActive)}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
        </div>
      </div>

      <ModalLogin
        show={showModalLogin}
        setModalLogin={setModalLogin}
        setOtpVerification={setOtpVerification}
      />
      <OtpVerification show={showOtpVerification} handleClose={() => setOtpVerification(false)} />
      {/* <ModalSignupByEmail show={showModalSignin} handleClose={() => setModalSignin(false)}/>  */}

    </header>
  )
}




export default Header;
