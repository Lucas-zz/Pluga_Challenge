import api from './api';

export async function getAllTools() {
    const SEARCH_ALL_TOOLS_URL = '/ferramentas_search.json';

    const response = await api.get(SEARCH_ALL_TOOLS_URL);

    return response.data;
}