function handleErrors(response) {
    if (!response.ok) {
        if (response.status == 400) {
            return response.json().then(data => {
                console.error(data.data.errors);
                throw Error(JSON.stringify(data.data.errors));
            });
        } else if (response.status === 401) {
            // location.href = "/";
            // sessionStorage.clear();
        }
        else throw Error(response.statusText);
    }
    return response;
}
const NREST_POST = function (requestURL, data, callback) {
    // console.log(data);
    const body = data;
    return fetch(requestURL, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then(handleErrors)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error(JSON.stringify(error)));
};
const NREST_READ = function (requestURL, callback) {
    // console.log(data);
    return fetch(requestURL, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
    })
        .then(handleErrors)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error(JSON.stringify(error)));
};
const NREST_DELETE = function (requestURL, callback) {
    // console.log(data);
    return fetch(requestURL, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
    })
        .then(handleErrors)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error(JSON.stringify(error)));
};
const NREST_PUT = function (requestURL, callback) {
    // console.log(data);
    return fetch(requestURL, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
    })
        .then(handleErrors)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error(JSON.stringify(error)));
};
export default options => {
    var baseurl = "";

    var fetchCreate, fetchRead, fetchUpdate, fetchDelete;
    fetchCreate = NREST_POST;
    fetchRead = NREST_READ;
    fetchUpdate = NREST_PUT;
    fetchDelete = NREST_DELETE;
    return {
        collection(collName) {
            return {
                create(data, callback) {
                    return fetchCreate(`${baseurl}/${collName}`, data, callback);
                },
                read() {
                    return fetchRead(`${collName}`);
                },
                readone(id) {
                    return fetchRead(`${baseurl}/${collName}/${id}`);
                },
                update(data, callback) {
                    return fetchUpdate(`${baseurl}/${collName}`, data, callback);
                },
                delete(data) {
                    //return fetchDelete(`${baseurl}/${collName}/${id}`); @Vijay Sir
                    return fetchDelete(`${baseurl}/${collName}`, data);
                }
            };
        }
    };
};