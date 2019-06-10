import * as React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

import { StyleSheet, ResumeModel } from "../domain";
import { Divider } from "./divider";


interface ResumeProps {
    style: StyleSheet,
    model: ResumeModel
}


const makeRow = (props: ResumeProps) => (left: React.ReactNode) => (right: React.ReactNode) =>
    <View style={props.style.row}>
        <View style={props.style.left}>
            {left}
        </View>
        <View style={props.style.right}>
            {right}
        </View>
    </View>;


export const Resume: React.FunctionComponent<ResumeProps> = props => (
    <Document>
        <Page size="A4" style={props.style.page}>
            <View style={props.style.container}>
                {makeRow(props)
                    (Object
                        .keys(props.model.contact)
                        .map(method =>
                            <React.Fragment>
                                <Text style={[props.style.header, props.style.h3]}>{method}</Text>
                                <Text>{props.model.contact[method]}</Text>
                            </React.Fragment>)
                    )
                    (<React.Fragment>
                        <Text style={[props.style.header, props.style.h1]}>
                            {props.model.name}
                        </Text>
                        <Text>{props.model.summary}</Text>
                    </React.Fragment>)}
                <Divider style={props.style} title="Experience" />
                <Divider style={props.style} title="Education" />
                <Divider style={props.style} title="Professional Skills" />
            </View>
        </Page>
    </Document>
);