

export const submitForm = async (formData) => {
    const request = await fetch('https://www.toptal.com/developers/postbin/1660471761878-0474270137492', {
        method: 'POST', 
        mode: 'no-cors', 
        cache: 'no-cache',  
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin':'**'
        },
        body: JSON.stringify(formData) 
    });



    return await request;
}


