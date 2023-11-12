class ApiError extends Error {
  constructor(
    statuscode,
    messsage = "somthing went worng :(",
    error = [],
    stack = ""
  ) {
    super(messsage);
    this.statusCode = statuscode;
    this.message = messsage;
    this.error = error;
    this.success = false;
    this.data = null

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
