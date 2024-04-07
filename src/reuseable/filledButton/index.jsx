 import style from "./index.module.css"
 const FilledButton = ({text,buttonColor,color})=>{
     return (
         <div>
             <button style={{background: buttonColor, color: color}} className={style.filledButton}>
                 {text}
             </button>
         </div>
    )
}
 export default FilledButton