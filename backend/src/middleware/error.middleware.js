const errorMiddleware = (error, req, res, next) => {
  console.error(error);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: Object.values(error.errors).map(
        (validationError) => validationError.message
      ),
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

export default errorMiddleware;