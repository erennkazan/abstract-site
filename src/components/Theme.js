import { ImUserTie } from 'react-icons/im'
import { BsSearch } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa'
import { GrDocumentText } from 'react-icons/gr'
import { FaUsers } from 'react-icons/fa'


export default function Theme(){
    return(
        <div className="theme-bg-color pb-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100 py-5">
            <h3 className="text-hero-font-size w-50">Why Buy Theme From Us?</h3>
            <p className="w-25 theme-text-size">Every Theme is built with such efforts that they are ready to meet all of our client's expectations.</p>
            </div>
            <div className="mt-3 mb-5">
              <div className="d-flex gap-3">
                <div className="bg-white rounded-4 p-4 border">
                  <div className="d-flex  align-items-center gap-3">
                  <ImUserTie size={40}/>
                  <h3>A Complete Product For Your Business</h3>
                  </div>
                  <p className="theme-text-size mt-4">We build Themes that are rich in content and have a good user interface to deliver a premium user experience for your customers.</p>
                </div>
                <div className="bg-white rounded-4 p-4 border">
                  <div className="d-flex align-items-center gap-3">
                  <BsSearch size={30}/>
                  <h3>SEO & <br/>SMM Friendly</h3>
                  </div>
                  <p className="theme-text-size mt-4">Our Theme is SEO and SMM friendly which aligns with your digital marketing strategies to bring more organic traffic to your website.</p>
                </div>
                <div className="bg-white rounded-4 p-4 border">
                  <div className="d-flex align-items-center gap-3">
                  <FaCode size={30}/>
                  <h3>Well Organized <br/>Codes</h3>
                  </div>
                  <p className="theme-text-size mt-4">The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.</p>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
            <div className="bg-white rounded-4 p-4 border">
                  <div className="d-flex align-items-center gap-3">
                  <GrDocumentText size={30}/>
                  <h3>Online Documentation</h3>
                  </div>
                  <p className="theme-text-size mt-4">The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.</p>
                </div>
                <div className="bg-white rounded-4 p-4 border">
                  <div className="d-flex align-items-center gap-3">
                  <FaUsers size={30}/>
                  <h3>Submit A Support Ticket</h3>
                  </div>
                  <p className="theme-text-size mt-4">The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.</p>
                </div>
                <div className="bg-white rounded-4 p-4 border">
                  <div className="d-flex align-items-center gap-3">
                  <FaCode size={30}/>
                  <h3>About</h3>
                  </div>
                  <p className="theme-text-size mt-4">The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.</p>
                </div>
              </div>
          </div>
        </div>
    )
}