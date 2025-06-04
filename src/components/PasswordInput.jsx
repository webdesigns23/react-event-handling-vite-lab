// Code PasswordInput Component Here
function handleChange() {
    console.log("Entering password...");
};

function PasswordInput() {
    return(
        <>
            <label htmlFor={"password"}>Password: </label>
            <input 
                type={"password"} 
                id={"password"} 
                name={"password"} 
                onChange={()=>handleChange()}
            />
        </>
    )
}

export default PasswordInput;