import React from 'react';
import {Star} from "./Star";
import styles from "./stars.module.css"

export type StarsProps = {
    count: number
}

function* starsArrayGenerator(count: number) {
    let counter = count || 0;
    while(counter >= 1) {
        yield counter;
        --counter;
    }
}

export function Stars(props: StarsProps) {
    const {count} = props;
    return (
        count && (count >= 1 || count <= 5)
            ? <ul className={[styles["card-body-stars"], styles[".u-clearfix"]].join(" ")}>
                {Array.from(starsArrayGenerator(count)).map((key) => <Star key={key}></Star>)}
                </ul>
            : <div></div>
    );
}