import React,{Fragment} from 'react'

const FormCard = (props) => {
    return (
        <div className='formCard'>
            <span className='cardQuestion'>REGISTER NEW MEAL</span>
            <Fragment>
                {props.children}
            </Fragment>
        </div>
    )
}

export default FormCard
