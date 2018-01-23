export default async ({
    apiHost,
    token,
    tokenType
}) => 
 await (
      await fetch(
          apiHost + "/api/tests",
          {
              method : "GET",
              headers: {
                  "Authorization": tokenType + " " + token
              }
          }
      )
  )
      .json()
