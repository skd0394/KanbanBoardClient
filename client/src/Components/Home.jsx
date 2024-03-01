import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Input } from "@mui/material";
import SingleBoard from "./SingleBoard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const Home = () => {
  const [boardName, setBoardName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [Boards, setBoards] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getData = async () => {
    try {
      let res = await axios
        .get("http://localhost:6005/blogs", {
          withCredentials: true,
        })
        .then((res) => setBoards(res.data.boards));
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Boards", Boards);

  const handleChange = (e) => {
    e.preventDefault();
    setBoardName(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("inside handleClick");
    try {
      let res = await axios.post(
        "http://localhost:6005/user/new-blog",
        { name: boardName },
        { withCredentials: true }
      );
      console.log(res);
      setBoardName("");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"grid"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h3">Recently Used Boards</Typography>
        <Box display={"flex"} justifyContent="center" gap={2}>
          {Boards.map((ele) => (
            <>
              <SingleBoard ele={ele} />
            </>
          ))}
        </Box>
        <Button onClick={handleOpen} variant={"contained"}>
          Create Board
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              marginBottom={"20px  "}
            >
              Create a new board
            </Typography>
            <Input
              placeholder="Enter The Board Name"
              onChange={handleChange}
              value={boardName}
              margin="10px"
            />
            <Button onClick={handleClick} variant="contained">
              Create
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Home;
