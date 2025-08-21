import React, { useState, useRef, useEffect } from 'react';
import MagnifyIcon from '../atoms/MagnifyIcon'; // Assume this is an SVG icon component
import Button from 'src/components/atoms/Button/Button.tsx'; // Basic button atom
import Input from ''; // Basic input atom

// Props for the SearchBtn molecule
export interface SearchBtnProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
    inputAriaLabel?: string;
    className?: string;
}

const SearchBtn: React.FC<SearchBtnProps> = ({
    placeholder = 'Search...',
    onSearch,
    inputAriaLabel = 'Search input',
    className = '',
}) => {
    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (expanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [expanded]);

    const handleButtonClick = () => {
        setExpanded((prev) => !prev);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch(value);
        }
        if (e.key === 'Escape') {
            setExpanded(false);
            setValue('');
        }
    };

    const handleBlur = () => {
        setExpanded(false);
        setValue('');
    };

    return (
        <div
            className={`search-btn-molecule ${expanded ? 'expanded' : ''} ${className}`}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'width 0.3s',
                width: expanded ? 200 : 40,
                borderRadius: 20,
                background: '#f5f5f5',
                boxShadow: expanded ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                padding: 4,
                position: 'relative',
            }}
        >
            <Button
                aria-label="Open search"
                onClick={handleButtonClick}
                style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    outline: 'none',
                }}
                tabIndex={0}
            >
                <MagnifyIcon />
            </Button>
            {expanded && (
                // Input atom interface:
                // interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
                //   value: string;
                //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
                // }
                <Input
                    ref={inputRef}
                    value={value}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    aria-label={inputAriaLabel}
                    style={{
                        marginLeft: 8,
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        fontSize: 16,
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            )}
        </div>
    );
};

export default SearchBtn;