import SearchIcon from "@mui/icons-material/Search";
import {
  CircularProgress,
  IconButton,
  Input,
  Stack,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { createRef } from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "10px",
  // textAlign: "center",
  color: "white",
  backgroundColor: "#151617",
  margin: "auto",
  maxWidth: "580px",
}));

const Content = ({
  user,
  id,
  viewCount,
  broadcasterType,
  pfp,
  description,
  createdAt,
  handleUserChange,
}) => {
  let textInput = createRef();
  const [inputError, setInputError] = useState(false);
  const [show, setShow] = useState(false);
  const onClick = (event) => {
    if (textInput.current.value === "") {
      event.preventDefault();
      setInputError(true);
      toast.error("Enter a twitch channel name!");
    } else {
      setShow(true);
      setInputError(false);
      handleUserChange(textInput.current.value);
      setTimeout(() => {
        console.log(description);
      }, 2000);
    }
  };

  const onFormSubmitted = (event) => {
    if (textInput.current.value === "") {
      event.preventDefault();
      setInputError(true);
      toast.error("Enter a twitch channel name!");
    } else {
      setShow(true);
      setInputError(false);
      handleUserChange(textInput.current.value);
      event.preventDefault();
    }
  };
  const AwesomeBox = () => {
    if (show)
      return (
        <Box>
          <Stack
            spacing={1}
            sx={{
              placeContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Item>
              <Typography
                sx={{
                  fontFamily: "Undertale",
                }}
              >
                user: {!user ? <CircularProgress /> : `${user}`}
              </Typography>
            </Item>
            <Item>
              <p>channel id: {!id ? <CircularProgress /> : `${id}`}</p>
            </Item>
            <Item>
              <p>
                broadcaster type:
                {!broadcasterType ? <CircularProgress /> : `${broadcasterType}`}
              </p>
            </Item>
            <Item>
              <p>
                profile picture:
                {!pfp ? (
                  <CircularProgress />
                ) : (
                  <img
                    src={pfp}
                    width="70"
                    heigh="70"
                    alt="pfp"
                    style={{ verticalAlign: "middle", marginLeft: "10px" }}
                  ></img>
                )}
              </p>
            </Item>
            <Item>
              <p>
                description:{" "}
                {!description ? <CircularProgress /> : `${description}`}
              </p>
            </Item>
            <Item>
              <p>
                created at:{" "}
                {!createdAt ? (
                  <CircularProgress />
                ) : (
                  `${createdAt.replace("T", ", ").replace("Z", " ")}`
                )}
              </p>
            </Item>
            <Item>
              <p>
                view count: {!viewCount ? <CircularProgress /> : `${viewCount}`}
              </p>
            </Item>
          </Stack>
        </Box>
      );
    return <center></center>;
  };
  return (
    <main>
      <form onSubmit={onFormSubmitted}>
        <label htmlFor="input">Enter twitch channel name: </label>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              width: "1000px",
              border: "1px solid #713200",
              background: "#410000",
              color: "white",
            },
          }}
        />
        <Input
          sx={{ color: "white", fontFamily: "Undertale", alignItems: "center" }}
          inputRef={textInput}
          id="input"
          error={inputError ? true : false}
          autoComplete="off"
        />

        <IconButton aria-label="search" onClick={onClick} size="large">
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
        <AwesomeBox />
      </form>
    </main>
  );
};

export default Content;
