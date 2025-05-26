import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    const groups = [
        "common"
    ];
    let locale = await requestLocale;
    const messages: Record<string, never> = {};
    // TODO add proper locale typing
    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as "en")) {
        locale = routing.defaultLocale;
    }
    for (const group of groups) {
        messages[group] = (
            await import(`../../public/locales/${locale}/${group}.json`)
        ).default as never;
    }

    return {
        messages,
    };
});
