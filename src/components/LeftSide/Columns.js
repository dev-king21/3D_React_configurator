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
import state from '../../state';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import AppContext from "../../context/AppContext";

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

function isExtra(column) {
  if (column === 'E') return true;
  if (column === 'F') return true;
  if (column === 'G') return true;
  if (column === 'H') return true;
  return false;
}

export function Column(props) {
  const id = asciiDif(props.column, 'A');
  const snap = useSnapshot(state);
  const { modelID } =
  React.useContext(AppContext);

  const extra = snap[modelID].columns.added[4] || snap[modelID].columns.added[5] || snap[modelID].columns.added[6] || snap[modelID].columns.added[7];
  if (extra === true && id < 4) {
    return (
      <Item 
      className="base-column">
      <BsFillCheckCircleFill />Column {props.column}</Item>  
    )
  }
  return snap[modelID].columns.added[id] === true?(
    <Item 
    className="base-column"
    onClick={(ev) => {ev.preventDefault(); ev.stopPropagation(); props.handleChange(props.column); props.setValue(0);}}>
    <BsFillCheckCircleFill />Column {props.column} <b>{snap[modelID].columns.removable[id]?
    <BsTrash className="trash"  onClick={(e)=>{e.preventDefault(); e.stopPropagation(); props.handleDelete(props.column)}}/>:null}
    <BsPencilSquare/></b></Item>
  ):null;
}

export default function Columns() {
  const snap = useSnapshot(state);
  const containerRef = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const [posColumn, setPosColumn] = useState(400);
  const { modelID } =
    React.useContext(AppContext);

  const minPos = snap[modelID].columns.minPos;
  const maxPos = isExtra(snap[modelID].columns.editingColumn)?(snap[modelID].columns.editingColumn === 'E' || snap[modelID].columns.editingColumn === 'G' ? snap[modelID].length.width - minPos:snap[modelID].length.height - minPos) :snap[modelID].columns.maxPos;

  const handleChange = (column) => {
    state[modelID].columns.editingColumn = column;
    state[modelID].columns.editing = true;
  };

  const validationVal = (min, max, val) => {
    if (min > val || val > max) return false;
    else return true;
  };

  const handleValChange = (event) => {
    handleColumn(snap[modelID].columns.editingColumn);
    let _val = Number(event.target.value);
    if (_val > maxPos ) _val = maxPos;
    const dif = asciiDif(snap[modelID].columns.editingColumn, 'A');
    setPosColumn(_val);
    state[modelID].columns.pos[dif] = _val;
  };

  const handlePlusChange = () => {
    handleColumn(snap[modelID].columns.editingColumn);
    if (validationVal(minPos, maxPos, posColumn + 1)) {
      setPosColumn(posColumn + 1);
    }
  };

  const handleMinusChange = (type) => {
    handleColumn(snap[modelID].columns.editingColumn);
    if (validationVal(minPos, maxPos, posColumn - 1)) {
      setPosColumn(posColumn - 1);
    }
  };

  const handleSliderChange = (event, newVal) => {
    setPosColumn(newVal);
    handleColumn(snap[modelID].columns.editingColumn);
    const dif = asciiDif(snap[modelID].columns.editingColumn, 'A');
    state[modelID].columns.pos[dif] = newVal;
  };

  const handleColumn = (column) => {
    const dif = asciiDif(snap[modelID].columns.editingColumn, 'A');
    if (column === "No") {
      state[modelID].columns.isShift[dif] = false;
      state[modelID].columns.pos[dif]= 0;
    }
    else {
      state[modelID].columns.isShift[dif] = true;
      state[modelID].columns.pos[dif] = posColumn;
      if (dif > 3) {
        state[modelID].columns.isShift[0] = false;
        state[modelID].columns.isShift[1] = false;
        state[modelID].columns.isShift[2] = false;
        state[modelID].columns.isShift[3] = false;
        state[modelID].columns.pos[0] = false;
        state[modelID].columns.pos[1] = false;
        state[modelID].columns.pos[2] = false;
        state[modelID].columns.pos[3] = false;
      }
    }
  }

  const handleAdd = () => {
    if (snap[modelID].columns.adding === true) {
      state[modelID].columns.adding = false;
    }
    else {
      state[modelID].columns.adding = true;
    }
  }

  const handleDelete = (column) => {
    const id = asciiDif(column, 'A');
    state[modelID].columns.added[id] = false;
    state[modelID].columns.isShift[id] = false;
    state[modelID].columns.pos[id] = 0;
  }

  return (
    <div className="mt-5 content-main">

      <div className={`selectedColumn ${snap[modelID].columns.editing ? 'show-column': 'hide-column'}`}>
          <div>
          <h3>Column {snap[modelID].columns.editingColumn}</h3>
          Do you wish to shift the column
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


    <Box className={`column-box ${snap[modelID].columns.editing ? 'hide-column': 'show-column'}`} ref={containerRef}>
      <h5>Base Columns</h5>
      <Stack spacing={2} className="mt-3 mb-5 base-columns">
        <Column column={'A'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
        <Column column={'B'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
        <Column column={'C'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
        <Column column={'D'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
      </Stack>
      <h5>Extra Columns</h5>

      <Stack spacing={2} className="mt-3 mb-5 base-columns">
        <Column column={'E'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
        <Column column={'F'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
        <Column column={'G'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
        <Column column={'H'} handleChange={handleChange} handleDelete={handleDelete} setValue={setValue}/>
      </Stack>


        <Button
          variant="contained"
          color={snap[modelID].columns.adding === false ? "success":"warning"}
          size="medium"
          className="mt-3 add-column-btn"
          onClick={(e)=>{e.stopPropagation();handleAdd()}}
        >
          {snap[modelID].columns.adding === false?'Add extra column':'Cancel'}
        </Button>
      </Box>
    </div>
  );
}