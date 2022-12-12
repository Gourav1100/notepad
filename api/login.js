import dotenv from "dotenv";
import clientPromise from "../modules/mongodb";

export default async function Handler(req, res) {
  //    important keys
  //    1. method
  //    2. body
  //    3. headers
  dotenv.config();
  if (!process.env.USERID || !process.env.PASSWORD) {
    return res.status(503).json({
      status: 503,
      success: false,
      message: "server unavailable!!",
    });
  }
  if (req.method !== "GET") {
    req.status(405).json({
      status: 405,
      success: false,
      message: "invalid request type!!",
    });
  }
  if (req.headers.token === null || req.headers.token === undefined || req.headers.token === "") {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "unauthorized access!!",
    });
  }
  const client = await clientPromise;
  const db = client.db("Notepad");
  const isValid =
    (await db
      .collection("tokens")
      .find({
        token: req.headers.token,
      })
      .toArray().length) === 1
      ? true
      : false;
  if (!isValid) {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "unauthorized access!!",
    });
  }
  const responseData = await db.collection(req.body.filterType).find(req.body.filterData).toArray;
  return res.status(200).json({
    status: 200,
    success: true,
    message: "successfully verified!!",
    data: responseData,
  });
}
