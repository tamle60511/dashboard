
import React, { useState, useEffect } from 'react';
import Icon from "../Icon";

type Theme = 'light' | 'dark';

type ThemeButtonProps = {
    className?: string;
    onThemeChange?: (theme: Theme) => void;
};

const ThemeButton: React.FC<ThemeButtonProps> = ({ 
    className = '',
    onThemeChange 
}) => {
    const getInitialTheme = (): Theme => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        return savedTheme || (prefersDark ? 'dark' : 'light');
    };

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    // Effect để update theme
    useEffect(() => {
        // Cập nhật theme vào localStorage
        localStorage.setItem('theme', theme);

        // Thêm/xóa class dark cho html element
        const htmlElement = document.documentElement;
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        // Gọi callback nếu có
        onThemeChange?.(theme);
    }, [theme, onThemeChange]);

    // Toggle theme
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div
            className={`
                group 
                flex 
                flex-col 
                gap-1 
                w-12 
                p-1.5 
                bg-b-surface2 
                rounded-full 
                cursor-pointer 
                transition-all 
                hover:shadow-depth 
                dark:bg-linear-to-b 
                dark:from-[#2A2A2A] 
                dark:to-[#202020] 
                ${className}
            `}
            onClick={toggleTheme}
        >
            {(['dark', 'light'] as Theme[]).map((currentTheme) => (
                <button
                    key={currentTheme}
                    className={`
                        w-9 
                        h-9 
                        rounded-full 
                        text-0 
                        fill-t-secondary 
                        transition-colors 
                        ${theme === currentTheme 
                            ? 'bg-b-surface1 fill-t-primary dark:bg-[#363636] dark:fill-t-primary' 
                            : 'dark:bg-transparent dark:fill-t-secondary'
                        }
                        group-hover:!fill-t-primary
                    `}
                >
                    <Icon
                        className="!size-4 fill-inherit"
                        name={currentTheme === 'dark' ? 'moon' : 'sun'}
                    />
                </button>
            ))}
        </div>
    );
};

export default ThemeButton;
