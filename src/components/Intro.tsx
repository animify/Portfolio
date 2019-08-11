import React from 'react';

interface IProps {
    title: string;
    description?: string;
}

export default function Intro({ title, description }: IProps) {
    return (
        <section className="container">
            <div className="intro w100">
                <h3>{title}</h3>
                {description && <p className="mt6">{description}</p>}
            </div>
        </section>
    );
}
