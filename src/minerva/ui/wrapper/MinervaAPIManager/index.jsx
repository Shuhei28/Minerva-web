import React                       from "react"
import bind                        from "minerva-common/util/bind"
import * as testApi                from "minerva-common/api/test"
import * as testTagApi             from "minerva-common/api/test_tag"
import * as userApi                from "minerva-common/api/user"
import config                      from "minerva-common/config"


export default ({
    authenticationApi,
    render,
    ...props
}) => {
    const authenticationInformation = authenticationApi.read();
    
    return render({
        testApi: bind(
            testApi, {
                apiHost   : config["minerva_api_host"],
                token     : authenticationInformation && authenticationInformation.token,
                tokenType : authenticationInformation && authenticationInformation.tokenType
            }
        ),
        testTagApi: bind(
            testTagApi, {
                apiHost   : config["minerva_api_host"],
                token     : authenticationInformation && authenticationInformation.token,
                tokenType : authenticationInformation && authenticationInformation.tokenType
            }
        ),
        userApi: bind(
            userApi, {
                apiHost   : config["minerva_api_host"],
                token     : authenticationInformation && authenticationInformation.token,
                tokenType : authenticationInformation && authenticationInformation.tokenType,
                userId    : authenticationInformation && authenticationInformation.userId
            }
        ),
        authenticationApi,
        ...props
    })
}

