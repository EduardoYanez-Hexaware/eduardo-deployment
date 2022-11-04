const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../src/App.tsx");

fs.readFile(filePath, "UTF8", (error, data) => {
  const newData = data.replace(
    "Eduardo Yañez Mejía",
    "Eduardo Yañez Mejía --update"
  );
  fs.writeFileSync(filePath, newData);
});
