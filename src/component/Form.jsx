import { useState } from "react";
import "./form.css"


function Form() {
    const [user, setUser] = useState(); // store 
    const [err, setErr] = useState()

    function handleChange(e) {
        if (e.target.name == 'name') {
            if (e.target.value.length < 6) {
                setErr({ ...err, name: "Name Must be more than 6 charachters" })
            }
            else {
                setErr({ ...err, name: "" })
                setUser({ ...user, name: e.target.value })
            }
        }
        else if (e.target.name == 'age'){
            if (e.target.value < 18) {
                setErr({ ...err, age: "Age Must be +18" })
            }
            else {
                setErr({ ...err, age: "" })
                setUser({ ...user, age: e.target.value })
            }
        }
        else if (e.target.name == 'email'){
            var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            if(e.target.value.match(validRegex)){
                setErr({ ...err, email: "" })
                setUser({ ...user, email: e.target.value })
            }
            else{
                setErr({ ...err, email: "Invalid email address!" })
            }
        }
        else if (e.target.name == 'pass'){
            if(e.target.value.length < 8){
                setErr({ ...err, pass: "Invalid Password less than 8 Characters !" })
            }
            else{
                setErr({ ...err, pass: "" })
                setUser({ ...user, pass: e.target.value })
            }
        }
        else if (e.target.name == 'pass2'){
            if(e.target.value===user.pass){
                setErr({ ...err, pass2: "" })
            }
            else if(e.target.value.length==user.pass.length){
                setErr({ ...err, pass2: "Password dosn't match" })
            }
        }
    }

    function save() {
        if (err.name == "" && err.age == "" && err.email=="" && err.pass=="") {
            console.log(user); // or send data to backend
        }
    }
    return (
        <>
        <h1>Sign Up</h1>
        <div className="form-gaber">
            <label htmlFor="name">Username: </label>
            <input className={err?.name && 'err'} type="text" name="name" onChange={handleChange} placeholder='enter name' />
            <br />
            {err?.name && <small style={{ color: 'red' }}>{err?.name}</small>}
            <br />
            <label htmlFor="Age">Age: </label>
            <input className={err?.age && 'err'} type="text" name='age' onChange={handleChange} placeholder='enter age' />
            <br />
            {err?.age && <small style={{ color: 'red' }}>{err?.age}</small>}
            <br />
            <label htmlFor="Email">Email: </label>

            <input className={err?.email && 'err'} type="text" name='email' onChange={handleChange} placeholder='enter email' />
            <br />
            {err?.email && <small style={{ color: 'red' }}>{err?.email}</small>}
            <br />
            <label htmlFor="Pass">Password: </label>

            <input className={err?.pass && 'err'} type="password" name='pass' onChange={handleChange} placeholder='Enter your Password' />
            <br />
            {err?.pass && <small style={{ color: 'red' }}>{err?.pass}</small>}
            <br />
            <label htmlFor="Pass2">Repeat Password: </label>
            <input className={err?.pass2 && 'err'} type="password" name='pass2' onChange={handleChange} placeholder='Confirme your Password' />
            <br />
            {err?.pass2 && <small style={{ color: 'red' }}>{err?.pass2}</small>}
            <br />

            <button disabled={err?.name || err?.age || err?.email || err?.pass || err?.pass2 && true } onClick={save}>Sign Up</button>
        </div>
        </>
    )
}

export default Form