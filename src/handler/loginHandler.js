export const verifyLoginCredentialsAndGetJWT = async(alias, password)=>{
    const response =  await fetch('http://localhost:5000/auth/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            alias, password
        })
    });
    const data = await response.json();
    return data;
}
