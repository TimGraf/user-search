const TOKEN = process.env.REACT_APP_API_KEY
const SEARCH_URL = new URL('https://api.github.com/search/users');
const AUTH_HEADER = `token ${TOKEN}`;

const searchUsers = async (search, page, pageSize) => {
    let data = {};

    try {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_HEADER
            }
        };
        const params = { q: search, page: (page + 1), per_page: pageSize }
        SEARCH_URL.search = new URLSearchParams(params).toString();
        const response = await fetch(SEARCH_URL, config);

        if (response.ok) {
            data = await response.json();
        }
    } catch(error) {
        console.log(error);
    }

    return data;
};

const getUserInfo = async (userUrl) => {
    let data = {};

    try {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_HEADER
            }
        };
        const response = await fetch(userUrl, config);
        
        if (response.ok) {
            data = await response.json();
        }
    } catch(error) {
        console.log(error);
    }

    return data;
};

export default { searchUsers, getUserInfo };