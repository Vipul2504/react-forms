import { useState } from "react";


const Form = () => {

    const [fullName, setfullname] = useState({
        fname : "",
        lname : "",
    });
   

    const onsubmits = (event) => {
        event.preventDefault();
    }



   const inputevent = (event) =>{
        const value = event.target.value;
        const name = event.traget.name;

        setfullname((preValue)=>{
            if(name === "fanme"){
                return {
                    fname:value,
                    lname:preValue.lname
                }
            }else if(name === "lname"){
                return {
                    fname:preValue.fname,
                    lname:value
                }
            }
        })
   }

   

    return (
        <>
        <div className="maindiv">
            <form onSubmit = {onsubmits}>
            <div>
                <h1>
                    Hello {fullName.fname} {fullName.lname}
                </h1>
                <input type="text" placeholder="Enter your name" name="fname" value={fullName.fname} onChange={inputevent}/>
                <br/>
                <input type="text" placeholder="Enter your last name" value={fullName.lname} name="lname" onChange={inputevent}/>
                <button type="submit">Click me</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default Form;