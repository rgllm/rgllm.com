import { McpAgent } from "agents/mcp"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"
import { ProfileData } from "./types"
import { getProfileData } from "./profile-loader"

export class RogerioMCP extends McpAgent {
	server = new McpServer({
		name: "Rogério Moreira",
		version: "0.1.0",
	})

	profileData: ProfileData

	constructor(ctx: DurableObjectState, env: unknown) {
		super(ctx, env)
		this.profileData = getProfileData()
	}


	async init() {

		// Profile information tools
		this.server.tool(
			"getIdentity",
			{},
			async () => ({
				content: [{ type: "text", text: JSON.stringify(this.profileData.identity, null, 2) }],
			})
		)

		// Experiene information tools
		this.server.tool(
			"getExperience",
			{},
			async () => ({
				content: [{ type: "text", text: JSON.stringify(this.profileData.experience, null, 2) }],
			})
		)

		// Education information tools
		this.server.tool(
			"getEducation",
			{},
			async () => ({
				content: [{ type: "text", text: JSON.stringify(this.profileData.education, null, 2) }],
			})
		)

		// Skills information tools
		this.server.tool(
			"getSkills",
			{},
			async () => ({
				content: [{ type: "text", text: JSON.stringify(this.profileData.skills, null, 2) }],
			})
		)

		// Side projects information tools
		this.server.tool(
			"getProjects",
			{},
			async () => ({
				content: [{ type: "text", text: JSON.stringify(this.profileData.projects, null, 2) }],
			})
		)

		// Search across CV functionality
		this.server.tool(
			"searchProfile",
			{ query: z.string() },
			async ({ query }) => {
				const results = this.searchProfileData(query.toLowerCase())
				return {
					content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
				}
			}
		)
	}

	// Helper method to search through the profile data
	searchProfileData(query: string) {
		const results: Record<string, unknown> = {}

		// Search in identity
		const identityMatches = Object.entries(this.profileData.identity).filter(
			([_, value]) => {
				if (typeof value === "string" && value.toLowerCase().includes(query)) {
					return true
				}
				return false
			}
		)
		if (identityMatches.length > 0) {
			results.identity = Object.fromEntries(identityMatches)
		}

		// Search in experience
		const experienceMatches = this.profileData.experience.filter((exp) => {
			return (
				exp.role.toLowerCase().includes(query) ||
				exp.company.toLowerCase().includes(query) ||
				exp.years.toLowerCase().includes(query) ||
				exp.highlights.some((h) => h.toLowerCase().includes(query))
			)
		})
		if (experienceMatches.length > 0) {
			results.experience = experienceMatches
		}

		// Search in skills
		const allSkills = Object.values(this.profileData.skills).flat()
		const skillMatches = allSkills.filter((skill) =>
			skill.toLowerCase().includes(query)
		)
		if (skillMatches.length > 0) {
			results.skills = skillMatches
		}

		// Search in projects
		const projectMatches = this.profileData.projects.filter(
			(proj) =>
				proj.name.toLowerCase().includes(query) ||
				proj.url.toLowerCase().includes(query)
		)
		if (projectMatches.length > 0) {
			results.projects = projectMatches
		}

		return results
	}


}
