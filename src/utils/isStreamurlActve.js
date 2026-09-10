

export const isStreamUrlActive = async (url) =>{

    try{
        const response = await fetch(url)

        if (!response.ok){
            return "offline";
        }
            return "online"
    }   catch(err){
        throw new Error(`StreamURL Error: ${err.message}`)
    }

}