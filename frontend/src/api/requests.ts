import * as api from './api';

const endpoints = {
    login: '/auth/login',
    getArchives: '/archives/get',
    addArchives: '/archives/add',
    removeArhive: '/archives/remove',
    sendMail: '/support/mail',
};

export const removeArchive = async (archiveId: string) => {
    return api.post(endpoints.removeArhive, { id: archiveId });
};

export const addArchive = async (
    date: string,
    match: string,
    tip: string,
    odd: number,
    result: 'win' | 'lose' | string
) => {
    return api.post(endpoints.addArchives, { date, match, tip, odd, result });
};

export const loginUser = async (username: string, password: string) => {
    return api.post(endpoints.login, { username, password });
};

export const getAllArchives = async () => {
    return api.get(endpoints.getArchives);
};

export const sendMail = async (
    name: string,
    email: string,
    message: string
) => {
    return api.post(endpoints.sendMail, { name, email, message });
};
