import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSource } from "../interface/error";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!";

  let errorSources: TErrorSource = [
    {
      path: "",
      message: "something went wrong",
    },
  ];

  const handleZodError = (err: ZodError) => {
    const errorSources = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });
    statusCode = 400;

    return {
      statusCode,
      message: "error validation",
      errorSources,
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
    message = "zod error";
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.node_env === "development" ? err?.stack : null,
    // error: err,
  });
};
export default globalErrorHandler;
