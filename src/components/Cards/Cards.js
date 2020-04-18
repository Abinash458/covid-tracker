import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';
import Data from './data';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            {
                Data.map((item, i ) => 
                    <Grid key={i} item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom> {item.cardLabel} </Typography>
                            <Typography varient="h5"> 
                                <CountUp
                                    start={0}
                                    end={
                                        item.cardLabel === 'Infected' ? 
                                        confirmed.value : 
                                        item.cardLabel === "Recovered" ? 
                                        recovered.value : 
                                        deaths.value 
                                    }
                                    duration={2.5}
                                    separator= ","
                                />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2"> {item.LabelDescription} </Typography>
                        </CardContent>
                    </Grid>
                )
            }
            </Grid>
        </div>
    );
}

export default Cards;

