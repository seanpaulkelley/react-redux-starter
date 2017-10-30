import React from 'react';

// es6 destructuring { input and meta} taken from props
export default ({ input, label, meta: { error, touched } }) => {
  // ...input's event handlers get automatically passed along so it's not necessary to
  // explicitly state then with ...input ie. onBlur(input.Blur) etc
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
