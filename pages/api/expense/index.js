import { readAccountData } from "../../../utils/firebaseCRUD";

export default async (req, res) => {
  const { method } = req;

  // Create Bookmark
  if (method === "POST") {
    // req.body must have collection name, start date and end date.
    const { collection, start, end } = req.body;

    readAccountData(collection, start, end)
      .then((expenseData) => {
        return res.status(201).json({ expenseData });
      })
      .catch((err) => {
        console.log({ err });
        return res.status(400).json({ msg: "bad request", err });
      });
  }
};
