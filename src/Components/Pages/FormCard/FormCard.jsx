import React,{Fragment} from 'react'

const FormCard = (props) => {
    return (
        <div className='formCard'>
            <span className='cardQuestion'>REGISTER NEW MEAL</span>
            <Fragment>
                {props.children}
            </Fragment>
        <button id='backBtn' onClick={()=>{props.back()}}>X</button>
        <button id='nextBtn' onClick={()=>{props.next()}}>✔</button>
        </div>
    )
}

export default FormCard
