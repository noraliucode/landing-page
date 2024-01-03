import React from "react";
import { Box } from "@mui/material";

const TypeformEmbed = () => {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        "& > div": {
          width: "70%", // Adjust this as needed for desktop layout
          height: "80%", // Adjust this as needed for the form's height
          maxWidth: "700px", // Maximum width for larger screens
          margin: "auto",
        },
      }}
    >
      <div data-tf-live="01HK4RVCP4RTHRVM66FFBN63NC"></div>
    </Box>
  );
};

export default TypeformEmbed;
