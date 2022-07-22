export default function handler(req, res) {
  // Get data submitted in request's body.
  const { name, phoneNumber, email, message } = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log(req.body);
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!name || !phoneNumber || !email || !message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "First or last name not found" });
  }

  // Found the name.
  // Sends a HTTP success code
  // res.status(200).json({ data: `${name} ${phoneNumber} ${email} ${message}` });
  res.status(200).send("ajajajsjj");
}
