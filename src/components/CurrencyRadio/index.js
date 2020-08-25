import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const CurrencyRadio = ({ onChange }) => {
  const [value, setValue] = React.useState('EUR');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Currency</FormLabel>
      <RadioGroup
        aria-label="currency"
        name="currency"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="EUR" control={<Radio />} label="Euro" />
        <FormControlLabel value="USD" control={<Radio />} label="Dollar" />
      </RadioGroup>
    </FormControl>
  );
};

CurrencyRadio.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CurrencyRadio;
