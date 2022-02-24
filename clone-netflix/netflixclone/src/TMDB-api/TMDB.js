const API_key = "f33decaead45460b93c1ee9cb70f6c30";
const API_base = "https://api.themoviedb.org/3";

const movieFecth = async (endpoint) => {
    const request = await fetch(`${API_base}${endpoint}`);
    const requestJson = await request.json();
    return requestJson;
}

export default{
    getHomeList: async () => {
        return [
            {
                'simpleName': 'originals',
                'title' : 'Originais da Netflix',
                'items' : []
            },
            {
                'simpleName': 'trend',
                'title' : 'Em alta',
                'items' : []
            },
            {
                'simpleName': 'action',
                'title' : 'Ação',
                'items' : []
            },
            {
                'simpleName': 'comedia',
                'title' : 'Comédia',
                'items' : []
            },
            {
                'simpleName': 'documentaries',
                'title' : 'Documentários',
                'items' : []
            },
        ]
    }
}