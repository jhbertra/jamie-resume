import * as React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

import { StyleSheet } from "../domain";
import { Divider } from "./divider";


interface ResumeProps {
    style: StyleSheet
}


const makeRow = (props: ResumeProps) => (left: JSX.Element) => (right: JSX.Element) =>
    <View style={props.style.row}>
        <View style={props.style.left}>
            {left}
        </View>
        <View style={props.style.right}>
            {right}
        </View>
    </View>;


export const Resume : React.FunctionComponent<ResumeProps> = props => (
    <Document>
        <Page size="A4" style={props.style.page}>
            <View style={props.style.container}>
                {makeRow(props)
                    (<Text>Left</Text>)
                    (<Text>Right</Text>)}
                <Divider style={props.style} title="Test" />
            </View>
        </Page>
    </Document>
);