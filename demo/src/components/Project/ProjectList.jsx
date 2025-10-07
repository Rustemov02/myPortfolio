import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import projectData from "./ProjectData";

export default function ProjectList() {
  const customStack = {
    bgcolor: "#2C2C6C",
    border: "solid #2C2C6C 1px",
    "&:hover": { bgcolor: "transparent", transition: "0.6s" },
    padding: 2,
    width: "320px",
    minWidth: "220px",
    height: "fit-content",
    borderRadius: 8,
    direction: "column",
    alignItems: "center",
    gap: 3,
    m: 1,
    "@media (max-width : 856px)": {
      width: "60%",
    },
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      width="90%"
      margin="auto"
      gap={2}
    >
      {projectData.map((item, index) => (
        <Stack
          key={index}
          sx={customStack}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration={item.duration}
        >
          <img
            src={item.image}
            style={{ width: "100%", height: "270px", borderRadius: "10px" }}
            alt="project"
          />

          <Typography
            fontSize={19}
            fontWeight={600}
            textAlign="start"
            width="100%"
            color="#FFFFFF"
            fontFamily="Poppins"
          >
            {item.title}
          </Typography>

          <Stack direction="row" width="100%" gap={2} py={1}>
            {item.link && (
              <Button
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener"
                size="medium"
                variant="outlined"
                sx={{ textTransform: "capitalize", fontSize: "18px" }}
              >
                Github
              </Button>
            )}
            {item.demo && (
              <Button
                component="a"
                href={item.demo}
                target="_blank"
                rel="noopener"
                size="medium"
                variant="contained"
                sx={{
                  color: "#1F1F38",
                  fontSize: "18px",
                  backgroundColor: "#4DB5FF",
                  textTransform: "capitalize",
                }}
              >
                Live Demo
              </Button>
            )}{" "}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
