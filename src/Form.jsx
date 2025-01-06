// FUNCTIONAL COMPONENT

import './App.css'
function Form() {
  return (
    <>
       <button>Click</button>

       <form>

       <label for="Name">Name</label>
       <input type="text"></input><br/><br/>
       <label for="Password">Password</label>
       <input type="password"></input><br/><br/>
       <label for="DOB">DOB</label>
       <input type="date"></input><br/><br/>
       <label>Gender</label>
       <input type="radio" name="Gender"></input>
       <label>Male</label>
       <input type="radio" name="Gender"></input>
       <label>Female</label>

       </form>
       

    </>
  )
}

export default Form









