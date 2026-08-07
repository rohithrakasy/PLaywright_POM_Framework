class BaseApi{

    constructor(requestContext){
        this.requestContext = requestContext;
    }

    async get(url){
        return await this.requestContext.get(url);
    }

    async post(url,requestPayload){
        return await this.requestContext.post(url,{
            data: requestPayload
        });
    }

    async put(url,requestPayload){
        return await this.requestContext.put(url,{
            data:requestPayload
        });
    }

    async delete(url){
        return await this.requestContext.delete(url);
    }
}

export default BaseApi;