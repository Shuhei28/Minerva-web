export default async ({
    apiHost,
    token,
    tokenType,
    userId
}) => {
    const response = await fetch(
        apiHost + "/api/users/" + userId,
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
