import React, { Component } from 'react';
import Builder from '../components/Builder/Buildder';
import IceCream from '../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state = {
        items: {
            chocolate: 45,
            lemon: 30,
            orange: 35,
            strawberry: 55,
            vanilla: 45,
        },
        scoops: [],
        totalPrice: 0,
    };

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => ({
            scoops: workingScoops,
            totalPrice: prevState.totalPrice + items[scoop],
        }));
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

        workingScoops.splice(scoopIndex, 1);
        this.setState((prevState) => ({
            scoops: workingScoops,
            totalPrice: prevState.totalPrice - items[scoop],
        }));
    };

    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        );
    }
}
