import React, { useEffect, useRef } from "react";
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


const NumberInput = React.forwardRef((props, ref) => {

  const { value, handleChange, callback, autoFocus } = props;
  let textInput = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      textInput.current.focus();
    }, 100);
  })

  const handleTab = (e, callback) => {
    const KEYCODE_TAB = 9;
    const KEYCODE_ENTER = 13;
    if (e.keyCode === KEYCODE_TAB || e.keyCode === KEYCODE_ENTER) {
      if (value.length >= 1) {
        callback(e)
      }
    }
  }
  
  const submit = (e) => {
    handleChange(e)
  }

  return (
    <React.Fragment>
      <TextField
        label=""
        value={value}
        autoFocus={autoFocus}
        onKeyDown={(e) => handleTab(e, callback)}
        inputRef={textInput}
        onChange={submit}
        name="numberformat"
        size="medium"
        id="formatted-numberformat-input"
        inputProps={{}}
        InputProps={{
          inputComponent: NumberFormatCustom,
          style: { fontSize: "30px" },
        }}
      />
    </React.Fragment>
  );
})

export default NumberInput