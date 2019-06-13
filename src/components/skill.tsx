import * as React from "react";
import { Canvas, View, Text } from "@react-pdf/renderer";

import { StyleSheet } from "../domain";


interface SkillProps {
    style: StyleSheet,
    skill: String,
    proficiency: number
}


export const Skill: React.FunctionComponent<SkillProps> = ({ style, skill, proficiency }) =>
{
    const paintBullet = (minProficiency: number) => (painter: any) =>
        painter
            .circle(5, 5, 5)
            .fillOpacity(1)
            .fill(proficiency >= minProficiency ? "#3CBC75" : "#6F7175");

    return (
        <View style={[style.flex, style.flexRow, style.flexCenter, style.rMargin8, style.bMargin8]}>
            <Text style={[style.textUpper, style.flexGrow7]}>{skill}</Text>
            <Canvas debug={false} paint={paintBullet(1)} style={[style.bullet]} />
            <Canvas debug={false} paint={paintBullet(2)} style={[style.bullet]} />
            <Canvas debug={false} paint={paintBullet(3)} style={[style.bullet]} />
            <Canvas debug={false} paint={paintBullet(4)} style={[style.bullet]} />
            <Canvas debug={false} paint={paintBullet(5)} style={[style.bullet]} />
        </View>);
};