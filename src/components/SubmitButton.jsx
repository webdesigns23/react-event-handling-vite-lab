// Code SubmitButton Component Here
function handleMouseEnter() {
    console.log('Mouse Entering')
};

function handleMouseLeave() {
    console.log('Mouse Exiting')
};

function SubmitButton() {
    return(
        <>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Submit Password</button>
        </>
    )
}

export default SubmitButton;