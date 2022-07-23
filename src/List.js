import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Items from "./Items";

const List = () => {
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [showItem, setShowItem] = useState(false);

  const listAHandler = (event) => {
    console.log(event.target.value);
    setInputA(event.target.value);
  };
  const listBHandler = (event) => {
    setInputB(event.target.value);
  };

  const listAButtonHandler = () => {
    setListA((item) => [...item, inputA]);
    setInputA("");
  };
  const listBButtonHandler = () => {
    setListB((item) => [...item, inputB]);
    setInputB("");
  };
  const computeHandler = () => {
    setShowItem(true);
  };
  return (
    <div>
      <Container>
        <Box className="box" sx={{ bgcolor: "#cfe8fc" }}>
          <h1>List Items</h1>
          <div className="inputList">
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="List A"
                onChange={(event) => listAHandler(event)}
                variant="outlined"
                value={inputA}
              />
              <Button
                className="button"
                variant="contained"
                onClick={listAButtonHandler}
              >
                Add
              </Button>
            </div>
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="List B"
                onChange={(event) => listBHandler(event)}
                variant="outlined"
                value={inputB}
              />
              <Button
                className="button"
                variant="contained"
                onClick={listBButtonHandler}
              >
                Add
              </Button>
            </div>
          </div>
          <div className="list">
            <div>
              <h3>List A</h3>
              {listA.length > 0 && (
                <Card sx={{ minWidth: 275 }}>
                  {listA.map((item, index) => {
                    return (
                      <Typography
                        key={index}
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item}
                      </Typography>
                    );
                  })}
                </Card>
              )}
            </div>
            <div>
              <h3>List B</h3>
              {listB.length > 0 && (
                <Card sx={{ minWidth: 275 }}>
                  {listB.map((item, index) => {
                    return (
                      <Typography
                        key={index}
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item}
                      </Typography>
                    );
                  })}
                </Card>
              )}
            </div>
          </div>
          <Button
            className="computeButton"
            variant="contained"
            onClick={computeHandler}
          >
            Compute
          </Button>
          {showItem && <Items listA={listA} listB={listB} />}
        </Box>
      </Container>
    </div>
  );
};

export default List;
