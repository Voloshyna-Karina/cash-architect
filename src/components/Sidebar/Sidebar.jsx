import React, {forwardRef, useState} from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';

const Sidebar = forwardRef(({...props}, ref) => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { id: 'home', iconName: 'home', sidebarTitle: 'Главная', mainTitle: 'Добро пожаловать' },
        { id: 'about', iconName: 'info', sidebarTitle: 'О нас', mainTitle: 'О компании' },
        { id: 'services', iconName: 'services', sidebarTitle: 'Услуги', mainTitle: 'Наши услуги' },
        { id: 'contact', iconName: 'contact', sidebarTitle: 'Контакты', mainTitle: 'Свяжитесь с нами' },
    ];

    return (
        <div className="sidebar" ref={ref}>
            <div className="sidebar-content">
                <h2>Меню</h2>
                <ul>
                    {steps && steps.map((step, index) => (
                        <li
                            key={step.id || index}
                            className={index === activeStep ? 'active' : ''}
                        >
                            <a
                                href={`#${step.id || index}`}
                                onClick={() => onChange(index)} /
                            >
                                {step.sidebarTitle}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            iconName: PropTypes.string.isRequired,
            sidebarTitle: PropTypes.string.isRequired,
            mainTitle: PropTypes.string.isRequired,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
    ).isRequired,
    activeStep: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default Sidebar;