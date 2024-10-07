import jwt, { decode } from "jsonwebtoken";

const auth = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedeData;

    if (token && isCustomAuth) {
      decodedeData = jwt.verify(token, "test");

      req.userId = decodedeData?.id;
    } else {
      decodedeData = jwt.decode(token);

      req.userId = decodedeData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
