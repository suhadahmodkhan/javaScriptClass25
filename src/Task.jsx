function Task(props) {
    console.log(props)
    // let task = ""
    // if(props.isDone === true){
    //      task= "finish"
    // }
    // else {
    //     task = "active"
    // }
    return (
        <>
        {/*  ternary operation (?) */}
        {/* <h1> {props.name}: {props.isDone === true ? "finish" : "active"} </h1>  */}
        {/* <h1> {props.name}: {props.isDone === "true" && "finish" } </h1>  */}
        {/* <h1> {props.name}: {props.isDone !== "true" && "work" } </h1>  */}
        <h1> {props.name}: {props.isDone === "true" || "work" } </h1> 
    
        </>
    )

    // if(props.isDone === "true"){
    //    return   <h1> {props.name}: finished </h1>
        

    // }
    // else {
    //     return   <h1> {props.name}: work </h1> 
    // }
}
export default Task