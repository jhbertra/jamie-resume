export interface StyleSheet {
    bMargin8: any
    bullet: any
    container: any
    divider: any
    dividerRight: any
    flex: any
    flexCenter: any
    flexGrow1: any
    flexGrow7: any
    flexRow: any
    fullWidth: any
    h1: any
    h2: any
    h3: any
    h4: any
    header: any
    left: any
    page: any
    right: any
    rMargin8: any
    row: any
    textUpper: any
}

export interface ExperienceModel {
    position: string
    employer: string
    startDate: string
    endDate?: string
    responsibilities: string[]
}

export interface EducationModel {
    institution: string
    degree: string
    startDate: string
    endDate?: string
    highlights: string[]
}

export interface SkillModel {
    skill: string
    proficiency: number
}

export interface ResumeModel {
    contact: {[method: string]: string | string[]}
    education: EducationModel[]
    experience: ExperienceModel[]
    name: string
    skills: SkillModel[]
    summary: string
}