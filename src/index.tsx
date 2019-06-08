import * as React from "react";
import * as ReactDom from "react-dom";
import {
    Document,
    Font,
    Page,
    PDFViewer,
    StyleSheet
} from "@react-pdf/renderer";


function main() {
    registerFonts();

    const styles = StyleSheet.create({
        viewer: {
            border: "none",
            width: "100%",
            height: "100%"
        },
        page: {
            fontFamily: 'OpenSans'
        }
    });

    ReactDom.render(
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                </Page>
            </Document>
        </PDFViewer>,
        document.getElementById("root"));
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