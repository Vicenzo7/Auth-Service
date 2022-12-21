const express = require("express");

const { PORT } = require("./config/serverConfig");
const prepareAndStartServer = () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

prepareAndStartServer();
