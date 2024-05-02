import "./Input.css"

export default function Input(props) {

   return (
       <>
           <label id="labelInput" htmlFor="">{props.title}</label>
           <input type="text" name="" id="inputForm" placeholder={props.input}/>
           
       </>
   )
}