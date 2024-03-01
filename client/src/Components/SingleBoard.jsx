import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from "react-router-dom";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);


export default function SingleBoard({ele}) {

    const user=useSelector((state)=>state.user)

    const handleEdit=()=>{
        
    }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {ele.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            {user._id === ele.createdBy._id ? (
              <Box display={"flex"}>
                <Box display={"flex"}>
                  <Button variant="text" startIcon={<GroupAddIcon />}>
                    Invite
                  </Button>
                    <Button variant="text" startIcon={<EditIcon />} onClick={handleEdit}>
                      Edit
                    </Button>
                </Box>
                <Button variant="text">Open</Button>
              </Box>
            ) : (
              <Button variant="text">Open</Button>
            )}
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
