export const fetchBookData = async payload => {
    console.log("payload: ", payload);
    try {
        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload.payload)
        };
        const response = await fetch("http://localhost:8000/api/book/", config);
        const data = await response.json();
        console.log("Data: ", data);
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};

export const fetchPaperData = async payload => {
    try {
        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload.payload)
        };
        const response = await fetch("http://localhost:8000/api/paper/", config);
        const data = await response.json();
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};

export const fetchRecomData = async payload => {
    try {
        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload.payload)
        };
        const response = await fetch("http://localhost:8000/api/recommend/", config);
        const data = await response.json();
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};

export const fetchFavorData = async payload => {
    console.log("payload, ", payload);
    try {
        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload.payload)
        };
        const response = await fetch("http://localhost:8000/api/favors/", config);
        const data = await response.json();
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};

export const addFavorData = async payload => {
    console.log("payload: ", payload);
    try {
        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload.payload)
        };
        const response = await fetch("http://localhost:8000/api/favor/", config);
        const data = await response.json();
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};

export const fetchLogin = async payload => {
    try {
        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        };
        const response = await fetch("http://localhost:8000/api/login/", config);
        const data = await response.json();
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};

export const fetchSign = async payload => {
    console.log("payload: ", payload);
    try {
        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        };
        console.log("config: ", config);
        const response = await fetch("http://localhost:8000/api/sign/", config);
        const data = await response.json();
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};
