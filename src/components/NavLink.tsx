import React from 'react';
import { LinkProps, Link } from 'react-router-dom';

export default function NavLink(props: LinkProps) {
    const { children, to, ...linkProps } = props;

    if (!children) return null;

    if ((to as string).startsWith('/')) {
        return (
            <Link to={to} {...linkProps}>
                {children}
            </Link>
        );
    }

    return (
        <a
            href={to as string}
            target={(to as string).startsWith('mailto') ? undefined : 'blank'}
            rel="noopener noreferrer"
            {...linkProps}
        >
            {children}
        </a>
    );
}
