export interface StyleSheet {
    container: any
    divider: any
    dividerRight: any
    flexCenter: any
    h1: any
    h2: any
    h3: any
    h4: any
    header: any
    left: any
    page: any
    right: any
    row: any
}

export interface ExperienceModel {
    position: string
    employer: string
    startDate: Date
    endDate?: Date
    responsibilities: string[]
}

export interface EducationModel {
    institution: string
    degree: string
    startDate: Date
    endDate?: Date
    highlights: string[]
}

export interface ResumeModel {
    contact: {[method: string]: string | string[]}
    education: EducationModel[]
    experience: ExperienceModel[]
    name: string
    summary: string
}