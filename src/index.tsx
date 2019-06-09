import * as React from "react";
import * as ReactDom from "react-dom";
import { Font, PDFViewer, StyleSheet } from "@react-pdf/renderer";

import { Resume } from "./components"


const styles = StyleSheet.create({
    viewer: {
        border: "none",
        width: "100%",
        height: "100%"
    },
    page: {
        fontFamily: 'OpenSans'
    },
    container: {
        marginHorizontal: "11%",
        marginVertical: "10%"
    },
    header: {
        color: "#3CBC75",
        textTransform: "uppercase"
    },
    h1: {
        fontSize: 24,
        letterSpacing: 1.2
    },
    h2: {
        fontSize: 14,
        letterSpacing: 3,
        marginRight: 16
    },
    h3: {
        fontSize: 12,
        letterSpacing: 0.6
    },
    h4: {
        color: "#6F7175",
        fontSize: 12,
        letterSpacing: 0.6
    },
    row: {
        backgroundColor: "green",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignContent: "stretch"
    },
    dividerRow: {
        backgroundColor: "yellow",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "stretch"
    },
    left: {
        backgroundColor: "blue",
        width: "33%",
        marginRight: 16
    },
    right: {
        backgroundColor: "red",
        width: "67%"
    },
    divider: {
        borderTopColor: "#2B2E34",
        borderTopStyle: "dashed",
        borderTopWidth: 0.75
    },
    dividerRight: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});


function main() {
    registerFonts();

    const App = () =>
        <PDFViewer style={styles.viewer}>
            <Resume style={styles} />
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