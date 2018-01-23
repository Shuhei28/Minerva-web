export default async({
    apiHost,
    token,
    tokenType
}) => {

    const response = await fetch(
        apiHost + "/auth/tokens",
        {
            method : "DELETE",
            headers: {
                Authorization: tokenType + " " + token
            }
        }
    );

    if (!response.ok)
        throw response;

    return response
};
