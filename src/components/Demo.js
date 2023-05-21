export default function Demo(){
    return(
        <div className="container">
            <div className="w-100 d-flex align-items-center justfiy-content-between mt-5 w-75">
              <div>
              <p className="fw-bold text-demo-font-size ">
              Our Theme Are Just Ready To Use
              </p>
              </div>
              <div className="">
              <p className="text-demo-color fs-4">
              You will love all of the features in our Theme. 100% guaranteed satisfaction.
              </p>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-5">
              <div className="w-25 m-2">
                <button className="bg-white border border-0  rounded-pill p-4 w-100 text-primary-color fs-2 fw-bold">
                  Multipage Demo
                </button>
              </div>
              <div className="w-25 m-2">
                <button className="rounded-pill p-4 w-100 border border-0 fw-bold fs-2 bg-white">
                  One Page Demo
                </button>
              </div>
            </div>
        </div>
    )
}