import { useTheme } from 'next-themes';
import { IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react';

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggle = () => {
        if (theme == 'light') {
            setTheme('dark')
        }
        if (theme == 'dark') {
            setTheme('light')
        }
    }

    return (
        <div>
            {theme == 'light' ? (
                <IconButton
                    aria-label='themeChangerLight'
                    icon={<MoonIcon />}
                    onClick={toggle}
                />
            ) : (
                <IconButton
                    aria-label='themeChangerDark'
                    icon={<SunIcon />}
                    onClick={toggle}
                />
            )
            }
        </div>
    )
}