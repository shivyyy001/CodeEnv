import jwt from "jsonwebtoken";
const JWT_SECRET = "CodeEnvJWT";

export const fetchuser = (request, response, next) => {
  // get user from the jwt token and add id to request object

  const token = request.header("auth-token");
  if (!token) {
    response
      .status(401)
      .json({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    request.user = data.user;
    next();
  } catch (error) {
    response
      .status(401)
      .json({ error: "Please authenticate using a valid token" });
  }
};
