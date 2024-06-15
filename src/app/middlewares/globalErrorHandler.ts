import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!";

  type TErrorSource = {
    path: string | number;
    message: string;
  }[];
  const errorSources: TErrorSource = [
    {
      path: "",
      message: "something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    statusCode = 400;
    message = "zod error";
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    // error: err,
  });
};
export default globalErrorHandler;
