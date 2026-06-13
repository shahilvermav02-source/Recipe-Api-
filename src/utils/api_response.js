class ApiResponse{
    consturctor(statusCode,data,message)
    {
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.sucess=statusCode>=200 && statusCode<300; 
    }
}
export { ApiResponse};