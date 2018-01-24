export default async ({
    apiHost,
    token,
    tokenType
}) => {
    const response = await fetch(
        apiHost + "/api/users",
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
