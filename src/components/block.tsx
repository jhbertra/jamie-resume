import * as React from "react";
import { View, Text } from "@react-pdf/renderer";

import { StyleSheet } from "../domain";

interface BlockProps {
    style: StyleSheet;
    header: string;
    subHeader: string;
    startDate: string;
    endDate?: string;
    location: string;
    details: string[];
}

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];

function formatDate(dateString?: string): string {
    var date = dateString
        ? new Date(dateString)
        : null;

    return date
        ? `${monthNames[date.getMonth()]} ${date.getFullYear()}`
        : "present";
}

export const Block: React.FunctionComponent<BlockProps> = props =>
    <View style={props.style.row}>
        <View style={props.style.left}>
            <Text style={[props.style.header, props.style.h4]}>
                {props.header}
            </Text>
            <Text>{props.subHeader}</Text>
            <Text>{formatDate(props.startDate)} - {formatDate(props.endDate)}</Text>
            <Text>{props.location}</Text>
        </View>
        <View style={props.style.right}>
            {props.details.map(deatil =>
                <Text style={props.style.bullet}>• {deatil}</Text>)}
        </View>
    </View>;