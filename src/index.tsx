import * as React from "react";
import * as ReactDom from "react-dom";
import { Font, PDFViewer, StyleSheet } from "@react-pdf/renderer";

import { Resume } from "./components"


const colorPrimary = "#2B2E34";
const colorSecondary = "#6F7175";
const colorAccent = "#3CBC75";


const styles = StyleSheet.create({
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
        marginBottom: 18
    },
    h2: {
        fontSize: 13,
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
        fontSize: 10,
        letterSpacing: 0.6
    },
    row: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: 12
    },
    flexCenter: {
        alignItems: "center"
    },
    left: {
        width: "27%",
        marginRight: 16
    },
    right: {
        width: "73%"
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


function main() {
    registerFonts();

    const model = {
        contact: {
            "github": "https://github.com/jhbertra",
            "phone": "1 (403) 923 - 8142",
            "email": "jhbertra@gmail.com"
        },
        name: "Jamie Bertram",
        summary: "A pretty cool guy"
    };

    const App = () =>
        <PDFViewer style={styles.viewer}>
            <Resume style={styles} model={model} />
        </PDFViewer>;

    ReactDom.render(<App />, document.getElementById("root"));
}


function registerFonts() {
    const fontsRoot = "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts";
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-300.ttf`,
        fontWeight: 300
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-300italic.ttf`,
        fontStyle: "italic",
        fontWeight: 300
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-regular.ttf`
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-italic.ttf`,
        fontStyle: "italic"
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-600.ttf`,
        fontWeight: 600
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-600italic.ttf`,
        fontStyle: "italic",
        fontWeight: 600
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-700.ttf`,
        fontWeight: 700
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-700italic.ttf`,
        fontStyle: "italic",
        fontWeight: 700
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-800.ttf`,
        fontWeight: 800
    });
    Font.register({
        family: "OpenSans",
        src: `${fontsRoot}/open-sans-800italic.ttf`,
        fontStyle: "italic",
        fontWeight: 800
    });
}

main();