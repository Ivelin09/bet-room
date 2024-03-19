import * as api from './api';

const endpoints = {
    login: '/auth/login',
    getArchives: '/archives/',
    addArchives: '/archives/add',
    removeArhive: '/archives/remove'
};

export const removeArchive = async (
    archiveId: string,
) => {
    return api.post(endpoints.removeArhive, { id: archiveId });
};

export const addArchive = async (
    date: string,
    match: string,
    tip: string,
    odd: number,
    result: boolean
) => {
    return api.post(endpoints.addArchives, { date, match, tip, odd, result });
};

export const loginUser = async (username: string, password: string) => {
    return api.post(endpoints.login, { username, password });
};

export const getAllArhives = async () => {
    return api.get(endpoints.getArchives);
};
