export default function Header(){
    return(
        <header className="d-flex justify-content-between align-items-center mt-5 ">
            <img src="https://new.axilthemes.com/themes/splash/abstrak/assets/media/logo.svg"/>
            <ul className="d-flex justify-content-center align-items-center gap-5 ">
              <li>
                <a className="text-secondary font-weight-bold fs-6" href="#">
                  <b>Demo</b>
                </a>
              </li>
              <li>
                <a className="text-secondary text-lg" href="#">
                  <b>Features</b>
                </a>
              </li>
              <li>
                <a className="text-secondary fs-6" href="#">
                <b>Why Us</b>
                </a>
              </li>
              <li>
                <a className="text-secondary fs-6" href="#">
                <b>Documentation</b>
                </a>
              </li>
              <li>
                <a className="text-secondary fs-6" href="#">
                <b>Support Ticket</b>
                </a>
              </li>
              <li>
                <button className="p-3 rounded-pill border text-white bg-primary-color hover:bg-primary-brand-color ">
                  Buy Now
                </button>
              </li>
            </ul> 
        </header>
    )
}