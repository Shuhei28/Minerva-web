export default location => {
    if(location.search === "") return;
    const variables = location.search.split("?")[1].split("&");
    const obj = {};
    variables.forEach((v, i) => {
        const variable = v.split("=");
        obj[variable[0]] = Number(variable[1]);
    });
    return obj;
}