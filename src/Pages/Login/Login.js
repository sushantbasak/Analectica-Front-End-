import React ,{useState} from 'react';
import classes from './Login.module.css';

export default function Login() {
    const [formData,formUpdate] = useState({email : "", password : ""});
    const [error,errorChange] = useState([]);

    const handleValidation = () => {
        let validform = true;
        let errors = [];
        
        //Email
        if(!formData["email"]){
            validform = false;
            errors.push("Email must not be empty")
         }
   
         else if(typeof formData["email"] !== "undefined"){
            let lastAtPos = formData["email"].lastIndexOf('@');
            let lastDotPos = formData["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formData["email"].indexOf('@@') == -1 && lastDotPos > 2 && (formData["email"].length - lastDotPos) > 2)) {
               validform = false;
               errors.push("Not a valid email")
             }
        }  

         //Password
         if(!formData["password"]){
            validform = false;
            errors.push("Password cannot be empty");
         }
         else if(formData["password"].length < 6){
             validform = false;
             errors.push("Invalid Password length");
         }
        
        errorChange(errors)
        
        return validform;
    }

    const handleSubmit = (event) => {
        console.log("fs")
        event.preventDefault();
       let p= handleValidation();
        if(p){
            alert("Form submitted successfully");
        }
        else{
            let count=0;

            alert(
                "Errors are as follows \n"+ 
                error.map(data => {
                    count++;
                    return (count + " " + data + "\n") ;
                })
            )
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        formUpdate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className={classes.big}>
            <form className={classes.Container} onSubmit={handleSubmit}>
                {/* <div>{formData.email}</div> */}
                <input 
                type="email"
                name="email"
                value={formData.email} 
                onChange={handleChange}
                placeholder="Email" 
                className={classes.input} 
                // required
                />

                <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password" 
                className={classes.input} 
                // required
                />

                <button  
                type="submit"
                className={classes.input}>
                    LogIn
                </button>

                <button  
                className={classes.input}>
                    SignUp
                </button>
            </form>
        </div>
    )
}
