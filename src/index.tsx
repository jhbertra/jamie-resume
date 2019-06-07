import * as React from "react";
import * as ReactDom from "react-dom";
import {
    PDFViewer,
    Document
} from "@react-pdf/renderer";

ReactDom.render(
    <PDFViewer><Document></Document></PDFViewer>,
    document.getElementById("root")
);