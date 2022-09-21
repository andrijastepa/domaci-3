import React from 'react'

export default function Input({ label, value, onChange, readOnly }) {
  return (
    <div className="form-group">
      <label className="col-form-label">{label}</label>
      <input
        readOnly={readOnly}
        className='form-control'
        required
        onChange={e => {
          if (onChange && !readOnly) {
            onChange(e.currentTarget.value);
          }
        }}
        value={value}
      />
    </div>
  )
}
