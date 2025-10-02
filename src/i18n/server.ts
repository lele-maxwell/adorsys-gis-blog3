import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/server'; 
import resourcesToBackend from 'i18next-resources-to-backend';

export async function getTranslations(locale: string, ns: string = 'common') {
    const i18nInstance = createInstance();

    await i18nInstance
        // Removed .use(initReactI18next) from server-side initialization
        .use(resourcesToBackend((language: string, namespace: string) =>
            import(`../../public/i18n/${language}/${namespace}.json`)
        ))
        .init({
            lng: locale,
            ns,
            fallbackLng: 'en',
            defaultNS: 'common',
            supportedLngs: ['en', 'fr'],
            interpolation: {
                escapeValue: false,
            },
            // Removed react: { useSuspense: false } as it's for client-side React
        });

    return {
        i18n: i18nInstance,
        resources: {
            [locale]: {
                common: i18nInstance.getResourceBundle(locale, 'common') ?? {}
            }
        },
        t: i18nInstance.getFixedT(locale, ns),
    };
}