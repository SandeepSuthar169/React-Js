const getApi = (kind: string | number) => {
    if(typeof kind === "string"){
        return `get order ${kind}`
    } 
    return `post order: ${kind}`
}


// -------------------------------------------------

const serverAPI = (msg?: string) => {
    if(msg){
        return `Server Start ${msg}`
    }
    return `server default run on 300`
    // return `server default run on 300 ${msg}` // error
}

// -------------------------------------------------

const orderChoofe = (size: "small" | "medium" | "large" | number) => {
    if(size === "small"){
        return `small box paking`
    }
    if(size === "medium" || size === "large"){
        return `male extra choof`
    }

    return `chai order ${size}` 
}

// -------------------------------------------------  // 01:08:22

