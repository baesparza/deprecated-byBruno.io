import { useEffect, useState } from "react";

const Themes = ['light', 'dark'] as const;

type ThemeTypes = typeof Themes[number];


export const useTheme = () => {

    const [currTheme, setTheme] = useState<ThemeTypes>(localStorage.theme ?? 'dark');

    /// select the new and old theme from the themes, using the current theme
    const [t1, t2] = Themes;
    const newTheme = currTheme === t1 ? t2 : t1;
    const oldTheme = currTheme;

    /**
     * toggler for themes
     */
    const toggleTheme = () => {
        setTheme(newTheme);

        /// save into local storage
        if (!!localStorage)
            localStorage.theme = newTheme;
    };

    useEffect(() => {

        const root = window.document.documentElement;
        root.classList.remove(oldTheme);
        root.classList.add(newTheme);
    }, [currTheme]);

    return { toggleTheme, theme: newTheme };
}