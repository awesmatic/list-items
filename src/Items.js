import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const Items = ({ listA, listB }) => {
  const sameItems = listA.filter((element) => listB.includes(element));
  const differentItems = listA
    .filter((element) => !listB.includes(element))
    .concat(listB.filter((x) => !listA.includes(x)));
  return (
    <div className="items">
      <div>
        <h3>List A items</h3>
        <Card>
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
      </div>
      <div>
        <h3>List B items</h3>
        <Card>
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
      </div>
      <div>
        <h3>Common items</h3>
        <Card>
          {sameItems.map((item, index) => {
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
      </div>
      <div>
        <h3>Different items</h3>
        <Card>
          {differentItems.map((item, index) => {
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
      </div>
    </div>
  );
};

export default Items;
