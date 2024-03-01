import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/action";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogOut = () => {
    dispatch(logOut());
    window.open("http://localhost:6005/logout", "_self");
  };

  return (
    <>
      <Box
        display={"grid"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"40px"}
        padding={"10%"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"50px"}
        >
          <Avatar
            src={user.avatar}
            alt={"profile"}
            sx={{ width: 56, height: 56 }}
          />
          <Box display={"grid"}>
            <Typography variant="h4">{user.name}</Typography>
            <Typography>{user.email}</Typography>
          </Box>
        </Box>
        <Button variant="contained" onClick={handleLogOut}>
          LogOut
        </Button>
      </Box>
    </>
  );
};

export default Profile;
