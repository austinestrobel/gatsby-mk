import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #34495E;
    }
    &:hover fieldset {
      border-color: #41ABC7;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

export default StyledTextField;

