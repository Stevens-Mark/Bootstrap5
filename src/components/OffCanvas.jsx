
const OffCanvas = ( { projects }  ) => {

  return (
    <>
      {projects.map((proj) => 
        <div key={proj.id} className="offcanvas offcanvas-bottom h-100" tabIndex="-1" id={`project${proj.id}Info`} aria-labelledby={`project${proj.id}Label`}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id={`project${proj.id}Label`}>Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <div className="text-dark">
                {proj.description}
            </div>

          </div>
        </div>
      )}

    </>
  )
}

export default OffCanvas