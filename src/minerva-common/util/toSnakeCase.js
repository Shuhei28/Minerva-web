export default x => 
    (
        x.charAt(0).toLowerCase() + x.slice(1)
    )
        .replace(/[A-Z]/g, s => "_" + s.charAt(0).toLowerCase())
