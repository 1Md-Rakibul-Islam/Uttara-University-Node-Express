/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";
import config from "../config";
import { ZodError, ZodIssue } from "zod";
import handleZodError from "../errors/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!";
  let errorSourses: TErrorSources = [
    {
      path: "",
      message: "Something went wrong!",
    },
  ];


  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSourses = simplifiedError?.errorSourses;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSourses,
    stack: config.NODE_ENV === "development" ? err.stack : null,
  });
};

export default globalErrorHandler;
