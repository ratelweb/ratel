export const fetchBookData = async payload => {
    try {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        };
        const response = await fetch("http://localhost:8000/api/books/", config);
        const data = await response.json();
        console.log("Data: ", data);
        return data;
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
            body: JSON.stringify(payload)
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
            body: JSON.stringify(payload)
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
            body: JSON.stringify(payload)
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
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        };
        const response = await fetch("", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
