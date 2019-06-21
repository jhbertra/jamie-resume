import * as React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

import { StyleSheet, ResumeModel, SkillModel } from "../domain";
import { Divider } from "./divider";
import { Skill } from "./skill";


interface ResumeProps {
    style: StyleSheet,
    model: ResumeModel
}


const makeRow = (style: StyleSheet) => (left: React.ReactNode) => (right: React.ReactNode) =>
    <View style={style.row}>
        <View style={style.left}>
            {left}
        </View>
        <View style={style.right}>
            {right}
        </View>
    </View>;

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

function renderLines(lines: string | string[]): React.ReactNode {
    return Array.isArray(lines)
        ? (<React.Fragment>
            {lines.map(line => <Text>{line}</Text>)}
          </React.Fragment>)
        : (<Text>{lines}</Text>);
}

export const Resume: React.FunctionComponent<ResumeProps> = ({style, model}) => {
    const makeRowWithStyle = makeRow(style);
    const renderSkill = (skill: SkillModel) =>
        <Skill style={style} skill={skill.skill} proficiency={skill.proficiency} />;

    return <Document>
        <Page size="A4" style={style.page}>
            <View style={style.container}>

                {/* Header section */}
                {makeRowWithStyle
                    (Object
                        .keys(model.contact)
                        .map(method =>
                            <React.Fragment>
                                <Text style={[style.header, style.h3]}>{method}</Text>
                                {renderLines(model.contact[method])}
                            </React.Fragment>))
                    (<React.Fragment>
                        <Text style={[style.header, style.h1]}>
                            {model.name}
                        </Text>
                        <Text>{model.summary}</Text>
                    </React.Fragment>)}

                {/* Experience section */}
                <Divider style={style} title="Experience" />
                {model.experience.map(experience =>
                    makeRowWithStyle
                        (<React.Fragment>
                            <Text style={[style.header, style.h4]}>
                                {experience.position}
                            </Text>
                            <Text>{experience.employer}</Text>
                            <Text>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</Text>
                        </React.Fragment>)
                        (<React.Fragment>
                            {experience.responsibilities.map(responsibility =>
                                <Text>• {responsibility}</Text>)}
                        </React.Fragment>))}

                {/* Education section */}
                <Divider style={style} title="Education" />
                {model.education.map(education =>
                    makeRowWithStyle
                        (<React.Fragment>
                            <Text style={[style.header, style.h4]}>
                                {education.institution}
                            </Text>
                            <Text>{education.degree}</Text>
                            <Text>{formatDate(education.startDate)} - {formatDate(education.endDate)}</Text>
                        </React.Fragment>)
                        (<React.Fragment>
                            {education.highlights.map(highlight =>
                                <Text>• {highlight}</Text>)}
                        </React.Fragment>))}
                
                {/* Professional Skills section */}
                <Divider style={style} title="Professional Skills" />
                {makeRowWithStyle
                    (<View />)
                    (<View style={[style.flex, style.flexRow]}>
                        <View style={style.flexGrow1}>
                            {model.skills.slice(0, 4).map(renderSkill)}
                        </View>
                        <View style={style.flexGrow1}>
                            {model.skills.slice(4, 8).map(renderSkill)}
                        </View>
                    </View>)}
            </View>
        </Page>
    </Document>;
};