export interface StyleSheet {
    bottom: any;
    bullet: any;
    contact: any;
    container: any;
    divider: any;
    dividerRight: any;
    flexCenter: any;
    h1: any;
    h2: any;
    h3: any;
    h4: any;
    header: any;
    left: any;
    page: any;
    right: any;
    row: any;
}

export interface ExperienceModel {
    position: string;
    employer: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
}

export interface EducationModel {
    institution: string;
    degree: string;
    startDate: string;
    endDate?: string;
    highlights: string[];
}

export interface SkillModel {
    category: string;
    details: string;
}

export interface CommunityEngagementModel {
    organization: string;
    role: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
}

export interface ResumeModel {
    contact: {[method: string]: string};
    communityEngagement: CommunityEngagementModel[];
    education: EducationModel[];
    experience: ExperienceModel[];
    name: string;
    skills: SkillModel[];
}