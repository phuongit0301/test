import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {fetchAllRisks} from '@Root/services/task/actions';

import useStyles from '@Root/utils/globalStyle';

const TaskPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllRisks({payload: {}}));
    }, []);

    return (
        <div className={`${classes.container} flex-column`}>
            <h1>Task Page</h1>
        </div>
    )
}

export default TaskPage;