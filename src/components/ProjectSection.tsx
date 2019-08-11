import React from 'react';
import classNames from 'classnames';

interface IProps {
    title: string;
    className?: string;
}

export default function ProjectSection({ title, className }: IProps) {
    const classes = classNames('split', className);

    return (
        <div className={classes}>
            <span>{title}</span>

            <hr />
        </div>
    );
}
