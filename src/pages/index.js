import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';
import Form from '../components/form';
import Todo from '../components/todo';

export default () => {
    const [status, setStatus] = useState('loading');

    const [todos, setTodos] = useState(null);

    return (
        <main>
            <h1 className={styles.heading}>JAM stack todos</h1>
            {todos ? (<p>t odos</p>) : (<p classsName={styles.loading}>loading ...</p>)}
        </main>
    )
}