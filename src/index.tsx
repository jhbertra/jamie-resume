import * as React from "react";
import * as ReactDom from "react-dom";
import { Font, PDFViewer, StyleSheet } from "@react-pdf/renderer";

import { Resume } from "./components"
import resumeData from "../resume-data.json";

const colorPrimary = "#2B2E34";
const colorSecondary = "#6F7175";
const colorAccent = "#3CBC75";

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    bullet: {
        lineHeight: 1.7
    },
    viewer: {
        border: "none",
        width: "100%",
        height: "100%"
    },
    page: {
        fontFamily: 'OpenSans',
        fontSize: 9.5,
        color: colorPrimary
    },
    contact: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    container: {
        marginHorizontal: "11%",
        marginVertical: "10%"
    },
    header: {
        color: colorAccent,
        textTransform: "uppercase"
    },
    h1: {
        fontSize: 20,
        letterSpacing: 1.2,
        marginBottom: 12
    },
    h2: {
        fontSize: 12,
        letterSpacing: 3,
        marginRight: 12,
        marginBottom: 2
    },
    h3: {
        fontSize: 10,
        letterSpacing: 0.6,
        marginTop: 8
    },
    h4: {
        color: colorSecondary,
        fontSize: 9,
        letterSpacing: 0.6
    },
    row: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: 8,
        marginBottom: 12
    },
    flexCenter: {
        alignItems: "center"
    },
    left: {
        width: "26%",
        marginRight: 16
    },
    right: {
        width: "74%"
    },
    divider: {
        borderTopColor: colorPrimary,
        borderTopStyle: "dashed",
        borderTopWidth: 0.75,
        flexGrow: 1
    },
    dividerRight: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});

Font.register({
    family: "OpenSans",
    src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-300.ttf",
    fontWeight: 300
});

ReactDom.render(
    <PDFViewer style={styles.viewer}>
        <Resume style={styles} model={resumeData} />
    </PDFViewer>,
    document.getElementById("root"));