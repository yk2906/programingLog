import React, { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker"
import ja from 'date-fns/locale/ja'
import "react-datepicker/dist/react-datepicker.css"
import TextField from '@material-ui/core/TextField';
registerLocale('ja', ja)

const Carender = () => {
    const initialDate = new Date()
    const [startDate, setStartDate] = useState(initialDate)
    const handleChange = (date) => {
      setStartDate(date)
    }
  
    return (
      <DatePicker
        locale="ja"
        selected={startDate}
        onChange={handleChange}
        customInput={
          <TextField id="outlined-basic" variant="outlined" />
        }
      />
    )
  }

export default Carender;