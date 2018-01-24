import toURIQuery from "minerva-common/api/encoding/toURIQuery"

export default async ({
    apiHost,
    token,
    tokenType,
    query
}) => {
    const response = await fetch(
        apiHost + "/api/tests" + (
            query ? "?" + toURIQuery(query)
          :         ""
        ),
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
