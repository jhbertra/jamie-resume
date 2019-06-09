import * as React from "react";
import { View, Text } from "@react-pdf/renderer";

import { StyleSheet } from "../domain";


interface DividerProps {
    style: StyleSheet,
    title: String
}


export const Divider: React.FunctionComponent<DividerProps> = props =>
    <View style={props.style.dividerRow}>
        <View style={[props.style.left]}>
            <View style={props.style.divider} />
        </View>
        <View style={[props.style.right, props.style.dividerRight]}>
            <Text style={[props.style.header, props.style.h2]}>{props.title}</Text>
            <View style={props.style.divider} />
        </View>
    </View>