export default async ({
    apiHost,
    email,
    password
}) => {

    const response = await fetch(
        apiHost + "/api/auth/tokens", {
            method : "GET",
            headers: {
                Authorization: "Basic " + window.btoa(email + ":" + password)
            }
        }
    );

    if (!response.ok)
        throw response;

    let x = await response.json();

    return {
        tokenType : x["token_type"],
        token     : x["access_token"],
        userId    : x["user_id"]
    }
};

