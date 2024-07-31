import React from "react";

export function InputUser({type, value, onChange, placeholder}) {
  return (
    <div className="mb-3">
      <input required placeholder={placeholder} type={type} value={value} onChange={onChange} className="form-control" />
    </div>
  );
}
