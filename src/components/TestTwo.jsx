


const TestTwo =({id}) => {


return (
    <>

<div className="offcanvas offcanvas-bottom h-100" tabIndex="-1" id={`project${id}Info`} aria-labelledby={`project${id}Label`}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id={`project${id}Label`}>Offcanvas</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div>
              {id}
              </div>

            </div>
          </div>
  </>

  )


}



export default TestTwo