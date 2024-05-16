import { cookies } from 'next/headers';
import { Auth } from '@/interfaces/user.interfas';

interface SetCookies {
    name: string;
    value: string;
    options?: {
        expires?: number;
        path?: string;
    };
}

export async function setCookiesAuth(values: Auth) {
    setCookies([
        {
            name: 'token',
            value: JSON.stringify(values.token),
        },
        {
            name: 'user',
            value: JSON.stringify(values.user),
        },
    ]);
}

export async function removeCookiesAuth() {
    removeCookies(['token', 'user']);
}

export async function setCookies(values: SetCookies[]) {
    values.forEach((value) => {
        cookies().set(value.name, value.value, {
            expires: value.options?.expires,
            path: value.options?.path,
        });
    });
}

export async function getCookies(name: string) {
    if (!cookies().get(name)) return null;
    const value = cookies().get(name)?.value;
    if (!value) return null;
    return value;
}

export async function removeCookies(name: string[]) {
    name.forEach((cookie) => {
        cookies().delete(cookie);
    });
}