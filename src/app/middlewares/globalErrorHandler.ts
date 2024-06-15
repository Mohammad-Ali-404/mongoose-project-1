import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { TErrorSource } from "../interface/error";
import config from "../config";
import handleZodError from "../errors/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!";

  let errorSources: TErrorSource = [
    {
      path: "",
      message: "something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === "validationError") {
    console.log("ami mongoose validation error");
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.node_env === "development" ? err?.stack : null,
    // error: err,
  });
};
export default globalErrorHandler;
