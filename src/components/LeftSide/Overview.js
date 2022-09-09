import * as React from "react";
import Grid from "@mui/material/Grid";
import { useSnapshot } from "valtio";
import state from "../../state";
import AppContext from "../../context/AppContext";


const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export function Columns() {
    const list = [];
    const snap = useSnapshot(state);
    for (var id = 0 ; id < 8 ; id = id + 1 ) {
        var column = cols[id];
        if (snap.columns.isShift[id] === false) continue;
        list.push(
            <Grid container>
                <Grid container>Column {column}</Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Do you wish to shift the column?</Grid>
                    <Grid item xs={6} className="textRight">{snap.columns.isShift[id] === true?'Yes':'No'}</Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Position shifted column</Grid>
                    <Grid item xs={6} className="textRight">{snap.columns.pos[id]}mm</Grid>
                </Grid>
            </Grid>
        )
    }
    return list;
}

export default function Overview() {

    const { setActiveStep, setSubStep,  } = React.useContext(AppContext);
    const snap = useSnapshot(state);
    const handleChange = (activeStep, subStep) => {
        setActiveStep(activeStep);
        setSubStep(subStep);
    }

    return (
        <Grid className="overview">
            <Grid container spacing={2}>
                <Grid><b>STRUCTURE</b></Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}><u>Dimensions</u></Grid>
                    <Grid item xs={6} className="edit" onClick={(e)=>{e.stopPropagation();handleChange(0, 0)}}><u>Edit</u></Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Side 1-3</Grid>
                    <Grid item xs={6}>{snap.length.width}mm</Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Side 2-4</Grid>
                    <Grid item xs={6}>{snap.length.height}mm</Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Passage height</Grid>
                    <Grid item xs={6}>{snap.length.depth}mm</Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}><u>Columns</u></Grid>
                    <Grid item xs={6} className="edit" onClick={(e)=>{e.stopPropagation();handleChange(0, 1)}}><u>Edit</u></Grid>
                </Grid>
                <Columns />
                <Grid><b>STYLING</b></Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}><u>Colors</u></Grid>
                    <Grid item xs={6} className="edit" onClick={(e)=>{e.stopPropagation();handleChange(1, 1)}}><u>Edit</u></Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Color structure and columns</Grid>
                    <Grid item xs={6}><span style={{ backgroundColor: snap.structure.color}}>{snap.structure.color}</span></Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Color type blades</Grid>
                    <Grid item xs={6}>{snap.isTexture?'Wooddesign':'Textured'}</Grid>
                </Grid>
                {snap.isTexture === false?
                    <Grid container spacing={3}>
                        <Grid item xs={6}>Color blades</Grid>
                        <Grid item xs={6}><span style={{ backgroundColor: snap.blades.color}}>{snap.blades.color}</span></Grid>
                    </Grid>:null
                }
                <Grid><b>SIDE INFILLS</b></Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}><u>Side infills</u></Grid>
                    <Grid item xs={6} className="edit" onClick={(e)=>{e.stopPropagation();handleChange(2, 0)}}><u>Edit</u></Grid>
                </Grid>
                <Grid><b>COMFORT</b></Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}><u>Lightning</u></Grid>
                    <Grid item xs={6} className="edit" onClick={(e)=>{e.stopPropagation();handleChange(3, 0)}}><u>Edit</u></Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}><u>Comfort & Design</u></Grid>
                    <Grid item xs={6} className="edit" onClick={(e)=>{e.stopPropagation();handleChange(3, 1)}}><u>Edit</u></Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}><u>Blade Rotation</u></Grid>
                    <Grid item xs={6} className="edit" onClick={(e)=>{e.stopPropagation();handleChange(3, 2)}}><u>Edit</u></Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>Blade Rotation</Grid>
                    <Grid item xs={6}>{snap.blades.rotation === false ? 'Indirect sunlight':'Direct sunlight'}</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
  