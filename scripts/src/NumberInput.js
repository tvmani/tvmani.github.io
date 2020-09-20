import React from "react";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";



function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix=""
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};



export default function NumberInput(props) {

  const { value, handleChange, callback } = props;

  const handleTab = (e, callback) => {
    const KEYCODE_TAB = 9;
    const KEYCODE_ENTER = 13;
    if (e.keyCode === KEYCODE_TAB || e.keyCode === KEYCODE_ENTER) {
      if (value.length >= 1) {
        callback(e)
      }
    }
  }    

  return (
    <React.Fragment>
      <TextField
        label=""
        value={value}
        autoFocus 
        onKeyDown={e => handleTab(e, callback)}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
    />
  </React.Fragment>);
}