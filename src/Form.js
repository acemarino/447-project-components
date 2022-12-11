import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import React, { useState, useRef } from "react";

export function Form({ onSubmit }) {
  const [panelDimention, setPanelDimention] = useState({
    panelWidth: "",
    panelHeight: "",
  });

  const [roofDimention, setRoofDimention] = useState({
    roofWidth: "",
    roofHeight: "",
  });

  const [spacingDimention, setSpacingDimention] = useState({
    columnSpacing: "",
    rowSpacing: "",
    edgeSpacing: "",
  });
  // Handle submit
  function handleSubmit(event) {
    event.preventDefault();

    // return the updated values to Create
    onSubmit(panelDimention);
  }

  return (
    <>
  <div>
      <form>
        <fieldset>
            <legend>Data goes here</legend>
            
            <label >Panel Type:</label>
            <select>
                <option name="choice1" value="Panel1" onclick="color(this.value)">Panel1</option>
                <option name="choice2" value="Panel2" onclick="color(this.value)">Panel2</option>
            </select><br></br>
            <label >Apple Type:</label>
            <select>
                <option name="choice1" value="Gala" onclick="color(this.value)">Gala</option>
                <option name="choice2" value="Fuji" onclick="color(this.value)">Fuji</option>
            </select><br></br>
        </fieldset>
    </form>

    </div>
      <Paper style={{ padding: 16, margin: 16 }}>
        <Grid container spacing={1}>

          <Grid item xs={6} sm={6}>
            <TextField
              name="panelWidth"
              label="Panel Width"
              value={panelDimention.panelWidth}
              onChange={(event) =>
                setPanelDimention({
                  ...panelDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name="panelHeight"
              label="Panel Height"
              value={panelDimention.panelHeight}
              onChange={(event) =>
                setPanelDimention({
                  ...panelDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              name="roofWidth"
              label="Roof Width"
              value={roofDimention.roofWidth}
              onChange={(event) =>
                setRoofDimention({
                  ...roofDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="roofHight"
              label="Roof Hight"
              value={roofDimention.roofHeight}
              onChange={(event) =>
                setRoofDimention({
                  ...roofDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>

            <Grid item xs={6} sm={6}>
            <TextField
              name="columnSpacing"
              label="Column Spacing"
              value={spacingDimention.columnSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="rowSpacing"
              label="Row Spacing"
              value={spacingDimention.rowSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="edgeSpacing"
              label="Edge Spacing"
              value={spacingDimention.edgeSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>



          </Grid>
        </Grid>
      </Paper>
      {/* 
error={Boolean(errors.value2)}
  helperText={errors.value2} */}
    </>
  );
}
