import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  table: {
    
    maxWidth: 550,
  },
  tableCell: {
    fontSize: "12px",
  },
  accordionSummary: {
    //backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary,
  },
  accordionDetails: {
    display: "flex",
    justifyContent: "center",
    color: "white"
  },
}));

const EnsembleTable = () => {
  const classes = useStyles();

  return (
    <Accordion style={{ marginBottom: "20px", marginTop: "10px", borderRadius:"10px", boxShadow:"5px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.accordionSummary}
      >
        <Typography variant="h5" sx={{ mr: 2 }}>
          Ensemble Summary
        </Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordionDetails}>
        <TableContainer component={Paper} style={{bgcolor:'white'}}>
          <Table className={classes.table} aria-label="ensemble table">
            <TableHead>
              <TableRow>
                <TableCell><b>Ensemble</b></TableCell>
                <TableCell align="right"><b># of District Plans</b></TableCell>
                <TableCell align="right"><b># of Incumbents</b></TableCell>
                <TableCell align="right"><b>Incumbents Predicted to Win</b></TableCell>
                <TableCell align="right"><b>Avg. Geographic Variation in Incumbent Districts</b>
                  
                </TableCell>
                <TableCell align="right"><b> Population Variation in Incumbent Districts</b>
                 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ensemble 1
                </TableCell>
                <TableCell align="right">50</TableCell>
                <TableCell align="right">6</TableCell>
                <TableCell align="right">4</TableCell>
                <TableCell align="right">2.3%</TableCell>
                <TableCell align="right">1.2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ensemble 2
                </TableCell>
                <TableCell align="right">100</TableCell>
                <TableCell align="right">7</TableCell>
                <TableCell align="right">5</TableCell>
                <TableCell align="right">1.7%</TableCell>
                <TableCell align="right">0.8%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ensemble 3
                </TableCell>
                <TableCell align="right">75</TableCell>
                <TableCell align="right">5</TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">3.1%</TableCell>
                <TableCell align="right">1.5%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default EnsembleTable;