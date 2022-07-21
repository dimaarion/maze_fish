import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Matter, { Bodies } from "matter-js";
import Action from "./Action";
import Block from "./Block";
import Scena from './Scena';
export default class Body extends Scena {
    body = [];
    name;
    figure = 0;
    options = {
        animate:false,
        name:this.name,
        type:""
    }
    constructor(name) {
        super();
        this.name = name;
    }
    createRect(world) {
        this.body = this.objects(this.name)[0].map((x) =>
            this.figure === 0
                ? this.Bodies.rectangle(
                    x.x + x.width / 2,
                    x.y + x.height / 2,
                    x.width,
                    x.height,
                    { width: x.width, height: x.height }
                )
                : this.Bodies.circle(
                    this.procent(this.procentInv(this.scenaWidth(), x.x + x.width / 2)),
                    this.procent(this.procentInv(this.scenaHeight(), x.y + x.height / 2)),
                    this.procent(this.procentInv(this.scenaWidth(), x.width / 2))
                    //this.procent(this.procentInv(this.scenaHeight(), x.height))
                )
        );
        this.body.map((x) => this.World.add(world, x));
        return this.body;
    }

    sistems(entities){

    }


    isStatic(t) {
        this.body.map((x) => (x.isStatic = t));
    }


   

    draw() {
        <Block />
    }
}