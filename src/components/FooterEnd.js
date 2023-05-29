import {SiFacebook, SiInstagram} from 'react-icons/si'

export default function FooterEnd(){
    return(
        <div className="container d-flex justify-content-between">
          <div className="mt-5">
            <p className="footer-end-text fw-bold text-secondary">© 2022. All rights reserved by Axilthemes.</p>
          </div>
          <div className="mt-5 gap-5 d-flex">
            <SiFacebook size={30}/>
            <SiInstagram size={30}/>
          </div>
          <div className="d-flex gap-4 mt-5 mb-4">
            <p>More Themes</p>
            <p>|</p>
            <p>Privacy Policy</p>
          </div>
        </div>
    )
}