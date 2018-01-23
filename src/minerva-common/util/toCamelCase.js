export default x => 
    (
        x.charAt(0).toLowerCase() + x.slice(1)
    )
        .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
