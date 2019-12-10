export const fetchBookData = async payload => {
    try {
        console.log("payload: ", payload);
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
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
};

export const fetchPaperData = async payload => {
    try {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: payload
        };
        const response = await fetch("", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchRecomData = async payload => {
    try {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: payload
        };
        const response = await fetch("", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchFavorData = async payload => {
    try {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: payload
        };
        const response = await fetch("", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const addFavorData = async payload => {
    try {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: payload
        };
        const response = await fetch("", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchLogin = async payload => {
    try {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: payload
        };
        const response = await fetch("", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchSign = async payload => {
    try {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: payload
        };
        const response = await fetch("", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
