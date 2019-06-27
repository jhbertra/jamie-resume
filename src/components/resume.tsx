import * as React from "react";
import { Document, Link, Page, View, Text } from "@react-pdf/renderer";

import { StyleSheet, ResumeModel } from "../domain";
import { Block } from "./block";
import { Divider } from "./divider";


interface ResumeProps {
    style: StyleSheet,
    model: ResumeModel
}

function renderLines(lines: string | string[]): React.ReactNode {
    return Array.isArray(lines)
        ? (<React.Fragment>
            {lines.map(line => <Text>{line}</Text>)}
          </React.Fragment>)
        : (<Text>{lines}</Text>);
}

export const Resume: React.FunctionComponent<ResumeProps> = ({style, model}) =>
    <Document>
        <Page size="A4" style={style.page}>
            <View style={style.container}>
                <View>
                    <View style={style.row}>
                        <View style={style.left}>
                            {Object
                                .keys(model.contact)
                                .map(method =>
                                    <React.Fragment>
                                        <Text style={[style.header, style.h3]}>{method}</Text>
                                        {renderLines(model.contact[method])}
                                    </React.Fragment>)}
                        </View>
                        <View style={style.right}>
                            <Text style={[style.header, style.h1]}>{model.name}</Text>
                            <Text>{model.summary}</Text>
                        </View>
                    </View>
                    <Divider style={style} title="Experience" />
                    {model.experience.map(experience =>
                        <Block
                            style={style}
                            header={experience.position}
                            subHeader={experience.employer}
                            startDate={experience.startDate}
                            endDate={experience.startDate}
                            details={experience.responsibilities} />)}
                    <Divider style={style} title="Education" />
                    {model.education.map(education =>
                        <Block
                            style={style}
                            header={education.institution}
                            subHeader={education.degree}
                            startDate={education.startDate}
                            endDate={education.startDate}
                            details={education.highlights} />)}
                </View>
            </View>
        </Page>
        <Page size="A4" style={style.page}>
            <View>
                <View style={style.container}>
                    <Divider style={style} title="Professional Skills" />
                    {model.skills.map(skill =>
                        <View style={style.row}>
                            <View style={style.left}>
                                <Text style={[style.header, style.h4]}>{skill.category}</Text>
                            </View>
                            <View style={style.right}>
                                <Text>{skill.details}</Text>
                            </View>
                        </View>)}
                    <Divider style={style} title="Community Engagement / Leadership" />
                    {model.communityEngagement.map(engagement =>
                        <Block
                            style={style}
                            header={engagement.role}
                            subHeader={engagement.organization}
                            startDate={engagement.startDate}
                            endDate={engagement.startDate}
                            details={engagement.responsibilities} />)}
                    
                </View>
            </View>
            <Text style={style.bottom}>
                This resume was generated from JSON using react-pdf. The source code is hosted <Link src={"https://github.com/jhbertra/jamie-resume"}>here</Link>.
            </Text>
        </Page>
    </Document>;