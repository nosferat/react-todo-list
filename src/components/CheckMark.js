import React from 'react'

export const CheckMark = ({title, checked, onChange}) => {

  const handleChange = React.useCallback(e => {
    if(typeof onChange === 'function') {
      onChange(e)
    }
  }, [onChange])

  return (
    <label className="checkmark">
      <input className="checkmark-input" type="checkbox" checked={checked} onChange={handleChange} />
      <div className="checkmark-icon"></div>
      <div className="checkmark-title">{title}</div>
    </label>
  )
}
