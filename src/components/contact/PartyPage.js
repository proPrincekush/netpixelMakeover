import React,{useState} from 'react'
import BottomProgress from "./BottomProgress"
import Question from './Question'

function BridalPage({selectedParty,Back}) {

    const [msg, setmsg] = useState({
        noOfPartyPeople:0,
        aboutPartyPeople:""
    })
    
    const handleChange =(e)=>{
        setmsg({
            ...msg,
            [e.target.id]:e.target.value
        })
    }

   

    const handleSubmit =(e) => {
        e.preventDefault()
        selectedParty(msg,3)
    }

    return (
        <div  >
            <Question header={"Party: How many people need party make up?"} subheader={"Describe your requirements for party make up."} />
 
            {/* <div className="row my-3">
                <div className="col-md-12 text-center">
                    <h4>Party: How many people need party make up?</h4>
                    <p>Describe your requirements for party make up.</p>
                </div>
            </div> */}
           <form >
           <div className="row">
                <div className="col-md-12">
                <div className="form-group">
                    <label >How many people need party make up?</label>
                    <input value={msg.noOfPartyPeople} onChange={handleChange} className="form-control" id="noOfPartyPeople" required={true}/>
                </div>
                <div className="form-group">
                    <label >Describe the people who need make up</label>
                    <textarea value={msg.aboutPartyPeople} onChange={handleChange} className="form-control" id="aboutPartyPeople" rows="2" required={true}></textarea>
                </div>
                </div>
            </div>

            <div className="row mt-2 my-3">
                <div className="col-md-12 text-center">
                    <div id="continue" className="mb-3 " aria-disabled="false">
                        <button type="submit" onClick={handleSubmit} className="btn ">Continue</button>
                    </div>
                </div>
            </div>

           </form>
           
        {/* <div className="row mt-5">
            <div className="col-md-4 my-2">
                  <button onClick={()=>Back(1)} type="button" className="btn btn-primary">Back</button>
            </div>
            <div className="col-md-4 my-2">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="15" style={{width: "15%"}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p>progress 15%</p>
            </div>
            <div className="col-md-4"></div>
        </div> */}

        <BottomProgress Back={Back} backView={1} progress={"17%"} />
        </div>
    )
}

export default BridalPage
