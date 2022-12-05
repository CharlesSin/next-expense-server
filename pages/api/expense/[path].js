import { createNewData, removeAccountData, updateAccountData } from "../../../utils/firebaseCRUD";

export default async (req, res) => {
  const { method } = req;
  const { path } = req.query;

  // Create Bookmark
  if (method === "POST") {
    if (path === "create") {
      // req.body must have collection name and data.
      // data must be Object.
      // Object item : date, item, pay and price.
      const { collection, data } = req.body;
      createNewData(collection, data)
        .then((msg) => {
          return res.status(200).json({ msg });
        })
        .catch((error) => {
          return res.status(403).json({ error });
        });
    }
    if (path === "update") {
      // req.body must have collection name, id and data.
      // data must be Object.
      // Object item : date, item, pay, price and timestamp.
      const { collection, id, data } = req.body;
      updateAccountData(collection, id, data)
        .then((msg) => {
          return res.status(200).json({ msg });
        })
        .catch((err) => {
          return res.status(403).json({ err });
        });
    }
    if (path === "delete") {
      // req.body must have collection name and id.
      const { collection, id } = req.body;
      removeAccountData(collection, id)
        .then((msg) => {
          return res.status(200).json({ msg });
        })
        .catch((err) => {
          return res.status(403).json({ err });
        });
    }
  }
};
