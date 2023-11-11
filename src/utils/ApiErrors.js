class ApiError extends Error {
  constructor(
    statuscode,
    messsage = "somthing went worng :(",
    error = [],
    statck = ""
  ) {
    super(messsage);
    this.statusCode = statuscode;
    this.message = messsage;
    this.error = error;
    this.success = false;
    this.data = null

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
