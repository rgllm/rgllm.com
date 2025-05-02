export interface Identity {
	name: string
	location: string
	email: string
	phone: string
	website: string
	github: string
	linkedin: string
	languages: Record<string, string>
}

export interface ExperienceItem {
	role: string
	company: string
	years: string
	highlights: Array<string>
}

export interface Education {
	institution: string
	location: string
	degrees: Array<{
		title: string
		specializations?: Array<string>
	}>
}

export interface Project {
	name: string
	url: string
}

export interface Publication {
	title: string
	url: string
}

export interface Skills {
	languages: Array<string>
	frontend: Array<string>
	backend: Array<string>
	infra: Array<string>
	testing: Array<string>
	practices: Array<string>
}

export interface Meta {
	experience_years: string
	preferences: Array<string>
	mentorship: Array<string>
	process: Array<string>
	culture: Array<string>
}

export interface ProfileData {
	identity: Identity
	experience: Array<ExperienceItem>
	education: Education
	skills: Skills
	meta: Meta
	projects: Array<Project>
	publications: Array<Publication>
}
