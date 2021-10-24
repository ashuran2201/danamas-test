import React from 'react'
import "./NormalForm.css";


function NormalForm() {
    return (
        <div classname="container">
          <form classname="form-container">
            <div classname="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Field Name" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="key" placeholder="Field Key" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="type" placeholder="Field Type" required />
            </div> 
            <div className="mb-3">
              <input type="text" className="form-control" id="drop" placeholder="Dropdown item(s)" />
            </div>
            <select className="form-select" aria-label="Default select example" required>
              <option selected>Field Validation</option>
              <option value={1}>Required</option>
              <option value={2}>Optional</option>
            </select>
            <br/>
            <select className="form-select" aria-label="Default select example">
              <option selected>Data Type</option>
              <option value={1}>String</option>
              <option value={2}>Integer</option>
              <option value={3}>Boolean</option>
            </select>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    )
}

export default NormalForm
