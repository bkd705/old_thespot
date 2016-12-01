import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, placeholder, type, onChange, checkUserExists }) => {
  return (
    <div className={classnames("form-group", { 'has-error': error})}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        type={type}
        name={field}
        value={value}
        className="form-control"
        placeholder={placeholder}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  error: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
