import React from 'react';

interface IProps {
    title: string;
    description?: string;
    avatar?: string;
}

export default function Intro({ title, description, avatar }: IProps) {
    return (
        <section className="container">
            <div className="intro w100">
                <h3>
                    {avatar && <img className="avatar gray20@border" src={avatar} />} {title}
                </h3>
                {description && <p className="mt6">{description}</p>}
            </div>
        </section>
    );
}
