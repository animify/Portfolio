import React from 'react';
import { Icon } from 'figicons';

interface IProps {
    title: string;
    description: string;
    titleIcon?: string;
    titleStyle?: React.CSSProperties;
    descriptionStyle?: React.CSSProperties;
}

export default function SectionHeader({
    title,
    titleIcon,
    titleStyle,
    description,
    descriptionStyle,
}: IProps) {
    return (
        <div className="flex flex-column">
            <h3 className="flex items-center" style={titleStyle}>
                {title}
                {titleIcon && (
                    <div className="flex ml2 pulse">
                        <Icon name={titleIcon} strokeWidth={0} fill="red" width={48} height={48} />
                    </div>
                )}
            </h3>
            <p className="mt6" style={descriptionStyle}>
                {description}
            </p>
        </div>
    );
}
