import InputForm from "./InputForm";
function InputContainer(props)
{
    function betweenData(product)
{
    console.log("i am intermediate code")
    console.log(product);
    props.vishal(product);
}
    return(
        <>
        <InputForm vishalsingh={betweenData}/>
        </>
    )
}
export default InputContainer;