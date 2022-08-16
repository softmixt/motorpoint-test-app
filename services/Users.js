export async function fetchUsers(id) {

    let requestAPIUrl = 'https://jsonplaceholder.typicode.com/users';

    if (id) {
        requestAPIUrl = `${requestAPIUrl}/${id}`;
    }

    const options = {
        headers: {
            Accept: 'application/json', 'Content-Type': 'application/json',
        }, method: 'GET',
    };

    const response = await fetch(requestAPIUrl, options);

    if (!response.ok) {

        // const responseCode = response.status;
        let responseText = response.statusText;

        //TODO: Reading the error message from the server
        // const serverResponsePromise = await response.text();
        // const serverResponseData = JSON.parse(serverResponsePromise);

        console.error(responseText)
    }
    return response.json();
}

export async function fetchSingleUsers(id) {
    return await fetchUsers(id);
}
