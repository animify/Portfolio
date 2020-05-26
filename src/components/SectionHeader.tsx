import React from 'react';
import { Icon } from 'figicons';

interface IProps {
    title: string;
    description?: string;
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
        <div className="sectionheader flex flex-column">
            <h3 className="flex items-center" style={titleStyle}>
                {title}
                {titleIcon && (
                    <div className="flex ml3 pulse">
                        <Icon name={titleIcon} strokeWidth={0} fill="red" width={60} height={60} />
                    </div>
                )}
            </h3>
           {description && <p className="mt6" style={descriptionStyle}>
                {description}
            </p>}
        </div>
    );
}
