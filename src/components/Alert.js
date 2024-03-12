import React from 'react'


function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.status}</strong>:{props.alert.message}
      </div>
  )
}

export default Alert
