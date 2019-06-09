import * as React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import { Styles } from "../domain"


export interface ResumeProps {
    styles: Styles
}


export const Resume = (props: ResumeProps) => (
    <Document>
        <Page size="A4" style={props.styles.page}>
            <View style={props.styles.container}>
                <Text style={[props.styles.header, props.styles.h2]}>Test</Text>
            </View>
        </Page>
    </Document>
);