import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';
import { withSnackbar } from 'notistack';

const baseUrl = process.env.API_URL;
import { EventEmitter } from './events';
const animatedComponents = makeAnimated();

export class StageSelect extends React.Component {

  constructor (props) {
    super(props);
    const { rowData } = props;
  }
  
  handleChange = selectedValue => {
    // const { selectedOption } = this.state
    try{
      const { rowData } = this.props
      const { label } =  selectedValue;
      axios.post(`${baseUrl}students/assign_feedback_work`, { 
          whoAssign: rowData['loggedInUser'].user_name,
          toAssign: label,
          student_stage: rowData['toStage'],
          studentId: rowData['studentId']
      })
      .then(() => {
        this.props.enqueueSnackbar(`successfully Assigned work for ${label}`,{ variant: 'success' });
        EventEmitter.dispatch("transitionsChange", {selectedValue: selectedValue, rowData: rowData});
      })
      // this.state.selectedOption = selectedValue;
      EventEmitter.dispatch("transitionsChange", {selectedValue: selectedValue, rowData: rowData});
    } catch(e) {
      this.props.enqueueSnackbar(e, { variant: 'error' });
    }
  }

  render = () => {
    const { allUserOptions, rowData } = this.props;
    let selectedValue = { value: null, label: null };
    
    if (rowData['feedback']) {
      selectedValue = { value: rowData['feedback']['toAssign'], label: rowData['feedback']['toAssign'] };
    }

    return <Select
        className={"filterSelectStage"}
        // defaultValue={selectedValue}
        value={selectedValue}
        onChange={this.handleChange}
        options={allUserOptions}
        // placeholder={"Select "+this.props.filter.name+" ..."}
        isClearable={false}
        components={animatedComponents}
        closeMenuOnSelect={true}
    />
  }
}

export default withSnackbar(StageSelect);