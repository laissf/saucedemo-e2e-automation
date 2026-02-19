export function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export async function waitFor(selector, page, timeout = 5000) {
    try {
        await page.waitForSelector(selector, { timeout });
    } catch (error) {
        console.error(`Element with selector "${selector}" not found within ${timeout}ms`);
        throw error;
    }
}