import toCamelCase from "minerva-common/util/toCamelCase"

export default async ({
    apiHost,
    token,
    tokenType
}) => {
    const response = await fetch(
        apiHost + "/api/test_tags",
        {
            method : "GET",
            headers: {
                "Authorization": tokenType + " " + token
            }
        }
    )

    if(!response.ok)
        throw response
    
    return await response.json()

}