import React from 'react';
import axios from 'axios';
import styles from './todo.module.css';

const Todo = ({todo}) => {
    return (
        <p className={`${styles.text} ${todo.completed && styles.completed}`}>
            {todo.text}
        </p>
    )
}

export default Todo;
