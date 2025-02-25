import React from 'react'
export default function Admission() {
  return (
    <div className="container shadow bg-body rounded pt-3 pb-3" style={{"width":"80%"}}>
        <h5 className="d-flex justify-content-start ps-2 mt-1 my-2">-- Admission Details --</h5>
        <hr className="mt-0 mb-4"/>
        <form className="row g-4 ps-5 pe-5 pt-3 d-flex flex-column">
            <div className="row mb-2">
                <label htmlFor="inputAdmissonBoard" className="col-sm-3 col-form-control d-flex justify-content-end">Admission Board</label>
                <div className="col-sm-7">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select</option>  
                    <option value="1">JOSAA</option>
                    <option value="2">Department</option>
                </select>
                </div>
            </div>

            <div className="row mb-2">
                <label htmlFor="inputDepartment" className="col-sm-3 col-form-control d-flex justify-content-end">Department</label>
                <div className="col-sm-7">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select Department</option>  
                    <option value="1">Computer Science and Engineering</option>
                    <option value="2">Electrical Engineering</option>
                    <option value="3">Mechanical Engineering</option>
                    <option value="4">Civil Engineering</option>
                    <option value="5">Mechanical Engineering</option>
                </select>
                </div>
            </div>

            <div className="row mb-2">
                <label htmlFor="inputDegree" className="col-sm-3 col-form-control d-flex justify-content-end">Degree</label>
                <div className="col-sm-7">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select Degree</option>  
                    <option value="1">B.Tech</option>
                    <option value="2">M.Tech</option>
                    <option value="3">Ph.D</option>
                    <option value="4">MS (Research)</option>
                    <option value="5">MS.c</option>
                </select>
                </div>
            </div>

            <div className="row mb-2">
                <label htmlFor="inputAdvrollnum" className="col-sm-3 col-form-control d-flex justify-content-end">JEE Adv Roll Number</label>
                <div className="col-sm-7">
                    <input type="text" className="form-control  form-control-sm" id="inputAdvrollnum" placeholder="Your Adv Rollnumber"/>
                </div>
            </div>

            <div className="row mb-1">
                <label htmlFor="inputRank" className="col-sm-3 col-form-label d-flex justify-content-end">JEE Adv Rank</label>
                <div className="col-sm-7">
                    <input type="number" className="form-control  form-control-sm" id="inputRank" placeholder="Your Rank"/>
                </div>
            </div>

            <div className="row mb-2">
                <label htmlFor="inputAdvyear" className="col-sm-3 col-form-control d-flex justify-content-end">JEE Adv Year</label>
                <div className="col-sm-7">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select Year</option>  
                    <option value="1">2015-16</option>
                    <option value="2">2016-17</option>
                    <option value="3">2017-18</option>
                    <option value="4">2019-20</option>
                    <option value="5">2021-22</option>
                    <option value="6">2022-23</option>
                </select>
                </div>
            </div>

            <div className="row mb-2">
                <label htmlFor="inputAdmitCategory" className="col-sm-3 col-form-control d-flex justify-content-end">Admit Category</label>
                <div className="col-sm-7">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select Category</option>  
                    <option value="1">EWS</option>
                    <option value="2">General</option>
                    <option value="3">OBC-NCL</option>
                    <option value="4">ST</option>
                    <option value="5">SC</option>
                </select>
                </div>
            </div>

            <div className="row mb-2">
                <label htmlFor="inputCategory" className="col-sm-3 col-form-control d-flex justify-content-end">Category</label>
                <div className="col-sm-7">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Select Category</option>  
                    <option value="1">EWS</option>
                    <option value="2">General</option>
                    <option value="3">OBC-NCL</option>
                    <option value="4">ST</option>
                    <option value="5">SC</option>
                </select>
                </div>
            </div>
            
            <div className="row mb-2">
                <label htmlFor="inputMainrollnum" className="col-sm-3 col-form-control d-flex justify-content-end">JEE Mains Roll Number</label>
                <div className="col-sm-7">
                    <input type="text" className="form-control  form-control-sm" id="inputAdvrollnum" placeholder="Your JEE Mains Rollnumber"/>
                </div>
            </div>
        </form>
    </div>
  )
}
