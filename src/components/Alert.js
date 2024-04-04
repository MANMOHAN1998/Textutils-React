import React from 'react'

export default function Alert(props) {

    const wordCamlecase = (word) => {
        let new_word = word.charAt(0).toUpperCase() + word.slice(1)
        return new_word
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{wordCamlecase(props.alert.type)}</strong>: {props.alert.message}
        {/* <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label='close'></button> */}
    </div>
  )
}
