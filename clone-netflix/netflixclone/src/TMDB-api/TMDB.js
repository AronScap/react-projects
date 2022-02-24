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
                'items' : await movieFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_key}`)
            },
            {
                'simpleName': 'trend',
                'title' : 'Recomendados para Você',
                'items' : await movieFecth(`/trending/all/week?language=pt-BR&api_key=${API_key}`)
            },
            {
                'simpleName': 'toprated',
                'title' : 'Em Alta',
                'items' : await movieFecth(`/movie/top_rated?language=pt-BR&api_key=${API_key}`)
            },
            {
                'simpleName': 'action',
                'title' : 'Ação',
                'items' : await movieFecth(`/discover/movie?with_genres=28language=pt-BR&api_key=${API_key}`)
            },
            {
                'simpleName': 'comedia',
                'title' : 'Comédia',
                'items' : await movieFecth(`/discover/movie?with_genres=35language=pt-BR&api_key=${API_key}`)
            },
            {
                'simpleName': 'documentaries',
                'title' : 'Documentários',
                'items' : await movieFecth(`/discover/movie?with_genres=99language=pt-BR&api_key=${API_key}`)
            },
        ]
    }
}