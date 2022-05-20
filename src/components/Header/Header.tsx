import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            Header
            <span className={styles.icon}>ICON</span>
        </div>
    )
};