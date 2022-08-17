import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import { BsFillCheckCircleFill, BsPencilSquare, BsTrash } from "react-icons/bs";
import CustomInput from "./CustomInput";
import Slider from "@mui/material/Slider";
import { useSnapshot } from 'valtio';
import state from '../state';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function asciiDif(a,b) {
  return a.charCodeAt(0) - b.charCodeAt(0);
}

export default function Columns() {
  const snap = useSnapshot(state);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const containerRef = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [posColumn, setPosColumn] = useState(180);

  const minPos = snap.columns.minPos;
  const maxPos = snap.columns.maxPos;

  const handleChange = (column) => {
    setSelectedColumn(column);
    state.columns.editingColumn = column;
    state.columns.editing = true;
  };

  const validationVal = (min, max, val) => {
    if (min > val || val > max) return false;
    else return true;
  };

  const handleValChange = (event) => {
    let _val = Number(event.target.value);
    if (_val > maxPos ) _val = maxPos;
    const dif = asciiDif(selectedColumn, 'A');
    setPosColumn(_val);
    state.columns.pos[dif] = _val;
  };

  const handlePlusChange = () => {
    if (validationVal(minPos, maxPos, posColumn + 1)) {
      setPosColumn(posColumn + 1);
    }
  };

  const handleMinusChange = (type) => {
    if (validationVal(minPos, maxPos, posColumn - 1)) {
      setPosColumn(posColumn - 1);
    }
  };

  const handleSliderChange = (event, newVal) => {
    setPosColumn(newVal);
    const dif = asciiDif(selectedColumn, 'A');
    state.columns.pos[dif] = newVal;
  };

  const handleColumn = (column) => {
    const dif = asciiDif(selectedColumn, 'A');
    if (column === "No") {
      state.columns.isShift[dif] = false;
      state.columns.pos[dif]= 0;
    }
    else {
      state.columns.isShift[dif] = true;
      state.columns.pos[dif] = posColumn;
    }
  }

  return (
    <div className="mt-5 content-main">

      <div className={`selectedColumn ${snap.columns.editing ? 'show-column': 'hide-column'}`}>
        <div>
          <h3>Column {selectedColumn}</h3>
          Do you wish to shift the column?
        </div>

        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(event, val)=>setValue(val)} aria-label="basic tabs example">
          <Tab onClick={(e) => {e.preventDefault(); e.stopPropagation();handleColumn("No")}} label="No" {...a11yProps(0)} />
          <Tab onClick={(e) => {e.preventDefault(); e.stopPropagation();handleColumn("Yes")}} label="Yes" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="pt-5">
        <p>Position shifted column</p>
        <CustomInput
            val={posColumn}
            handleValChange={handleValChange}
            handlePlusChange={handlePlusChange}
            handleMinusChange={handleMinusChange}
          />

          <div className="d-flex align-items-center mt-3">
            <div>{minPos}</div>
            <Slider
              size="small"
              color="primary"
              value={posColumn}
              onChange={handleSliderChange}
              className="mx-1"
              min={minPos}
              max={maxPos}
            />
            <div>{maxPos}</div>
          </div>


      </div>

      </TabPanel>
    </Box>
      </div>    


    <Box className={`column-box ${snap.columns.editing ? 'hide-column': 'show-column'}`} ref={containerRef}>
      <h5>Base Columns</h5>
      <Stack spacing={2} className="mt-3 mb-5 base-columns">
        <Item className="base-column" onClick={(ev) => {ev.preventDefault(); ev.stopPropagation(); handleChange('A')}}><BsFillCheckCircleFill />Column A <b>{<BsTrash className="trash"/>}<BsPencilSquare /></b></Item>
        <Item className="base-column" onClick={(ev) => {ev.preventDefault(); ev.stopPropagation(); handleChange('B')}}><BsFillCheckCircleFill />Column B <b>{<BsTrash className="trash"/>}<BsPencilSquare /></b></Item>
        <Item className="base-column" onClick={(ev) => {ev.preventDefault(); ev.stopPropagation(); handleChange('C')}}><BsFillCheckCircleFill />Column C <b>{<BsTrash className="trash"/>}<BsPencilSquare /></b></Item>
        <Item className="base-column" onClick={(ev) => {ev.preventDefault(); ev.stopPropagation(); handleChange('D')}}><BsFillCheckCircleFill />Column D <b>{<BsTrash className="trash"/>}<BsPencilSquare /></b></Item>
      </Stack>
      <h5>Extra Columns</h5>
        <Button
          variant="contained"
          color="success"
          size="medium"
          className="mt-3 add-column-btn"
        >
          Add extra column
        </Button>
      </Box>
    </div>
  );
}