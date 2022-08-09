import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box className="column-box">
      <h5>Base Columns</h5>
      <Stack spacing={2} className="mt-3 mb-5">
        <Item className="base-column">Column A</Item>
        <Item className="base-column">Column B</Item>
        <Item className="base-column">Column C</Item>
        <Item className="base-column">Column D</Item>
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
  );
}