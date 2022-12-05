import fs from "fs";

// Read local json file system.
const readLocalJsonFile = (fileName, path, Unicode) => {
  // read JSON object from file
  // fs.readFile(`${path}/${fileName}`, `${Unicode}`, (err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  // parse JSON object
  //   const user = JSON.parse(data.toString());

  // print JSON object
  // console.log(user);
  // });
  try {
    const data = fs.readFileSync(`${path}/${fileName}`, Unicode);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// Method Example.
// readLocalJsonFile("Hello.json", "./", "utf-8");

// Write json file into to local file system.
const writeLocalJsonFile = (path, name, jsonObj) => {
  // convert JSON object to string
  const objStr = JSON.stringify(jsonObj);

  // write JSON string to a file
  const fileName = `${name}_${new Date().toISOString().slice(0, 10)}_${Math.floor(Math.random() * 10000)}.json`;
  fs.writeFile(`./backupdata/${fileName}`, objStr, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
  // return fileName then save to firebase log.
  return fileName;
};

// Method Example.
// writeLocalJsonFile("save as file name", accountObj);

export default { readLocalJsonFile, writeLocalJsonFile };
