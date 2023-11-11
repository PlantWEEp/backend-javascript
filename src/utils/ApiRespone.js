class ApiRespnse{
    constructor(
        statusCode,data,message = "Succcess"
    )
    {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}