'use client'
import Image from "next/image";
import Link from 'next/link';
import Logoimg from "../../../public/images/squch-logo-sm.svg";


const GetAppsDownload = () => {
  return (
    <div className="top-header-sec d-md-block d-none">
        <div className="bg-purple">
          <div className="d-flex justify-content-between w-100 align-items-center px-md-4 py-3">
            <div className="left-box">
                <Image src={Logoimg} alt="Image" />
              <p className="mb-0">Best  offers just for you in the Squch App!</p>
            </div>
            <div className="right-box">
              <Link href='' className="btn btn-primary">GET APP</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default GetAppsDownload
