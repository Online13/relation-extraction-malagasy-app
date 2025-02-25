import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Fragment } from "react";

const relations = [
	{
		category: "Personal Relations (between individuals)",
		items: [
			{
				relation: "per-per:has_parent",
				description: "Parent-child relationship between two people.",
				example:
					"Andriamiharamanjaka no rain'i Andrianampoinimerina ary Ranavalonandriambelomasina no reniny.",
			},
			{
				relation: "per-per:married_to",
				description: "Marriage relationship between two people.",
				example:
					"Nanambady maro i Andrianampoinimerina ka isan' izany Rabodonimerina, Rasendrasoa, Rambolamasoandro ary i Miangaly.",
			},
			{
				relation: "per-per:sibling",
				description: "Sibling relationship between two people.",
				example:
					"Tamin' ireo zanany ampolony maro dia akaikin' ny fon' Andriambelomasina kokoa Andrianjafy zanany lahimatoa sy Ranavalonandriambelomasina zanany vavy matoa.",
			},
			{
				relation: "per-per:related_to/friend",
				description: "Friendship relationship between two people.",
			},
			{
				relation: "per-per:related_to/other",
				description: "Other unspecified relationship between two people.",
			},
			{
				relation: "per-per:related_to/coworker",
				description: "Colleague relationship between two people.",
			},
			{
				relation: "per-per:subordinate_of",
				description:
					"Subordination relationship (employee-employer) between two people.",
			},
		],
	},
	{
		category: "Relations between Individuals and Organizations",
		items: [
			{
				relation: "per-org:works_at",
				description: "A person works for an organization.",
			},
			{
				relation: "per-org:found",
				description: "A person founded an organization.",
			},
			{
				relation: "per-org:leads",
				description: "A person leads or manages an organization.",
			},
			{
				relation: "per-org:member_of",
				description: "A person is a member of an organization.",
			},
			{
				relation: "per-org:represents",
				description: "A person represents an organization.",
			},
			{
				relation: "per/org-*:create",
				description: "A person or organization created something.",
			},
		],
	},
	{
		category: "Relations between Individuals and Places",
		items: [
			{
				relation: "per-loc:was_at",
				description: "A person was at a given place.",
			},
			{
				relation: "per-loc:place_of_birth",
				description: "Place of birth of a person.",
			},
			{
				relation: "per-loc:place_of_death",
				description: "Place of death of a person.",
			},
			{
				relation: "per-loc:place_reside_in",
				description: "Place of residence of a person.",
			},
			{
				relation: "per-loc:works_at",
				description: "Workplace of a person.",
			},
			{
				relation: "per-eth/loc:ethnicity",
				description: "Ethnicity of a person.",
			},
			{
				relation: "per-?/loc:nationality",
				description: "Nationality of a person.",
			},
		],
	},
	{
		category: "Relations between Individuals and Events",
		items: [
			{
				relation: "per-evn:take_part_in",
				description: "A person participates in an event.",
			},
		],
	},
	{
		category: "Temporal Relations related to Individuals",
		items: [
			{
				relation: "per-date:date_of_birth",
				description: "Date of birth of a person.",
			},
			{
				relation: "per-date:date_of_death",
				description: "Date of death of a person.",
			},
		],
	},
	{
		category: "Professional Relations, Jobs, and Statuses",
		items: [
			{
				relation: "per-job:work_as",
				description: "Occupation or profession of a person.",
			},
			{
				relation: "per-*:status",
				description:
					"A person can have a status (different from their job)",
				example:
					"[…] ny kandida filoham-pirenena Jean Louis Robinson [...]",
			},
		],
	},
	{
		category: "Relations between Organizations",
		items: [
			{
				relation: "org-org:partnership",
				description: "Partnership between two organizations.",
			},
			{
				relation: "org-date:date_founded_in",
				description: "Date of foundation of an organization.",
			},
			{
				relation: "org-loc:locate_at",
				description: "An organization is located at a given place.",
			},
		],
	},
	{
		category: "Relations between Organizations and Events",
		items: [
			{
				relation: "org-evn:host",
				description: "An organization hosts an event.",
			},
			{
				relation: "org-evn:take_part_in",
				description: "An organization participates in an event.",
			},
		],
	},
	{
		category: "Relations between Places",
		items: [
			{
				relation: "loc-loc:contains",
				description: "A place is contained within another place.",
			},
		],
	},
	{
		category: "Relations between Events",
		items: [
			{
				relation: "evn-evn:part_of",
				description: "An event is part of another event.",
			},
			{
				relation: "evn-loc:take_place_on",
				description: "An event takes place at a given location.",
			},
			{
				relation: "evn-date:date_take_place_on",
				description: "Date when an event took place.",
			},
		],
	},
	{
		category: "General or Ambiguous Relations",
		items: [
			{
				relation: "unknown_relation",
				description:
					"The relation between entities exists but is not among the relations for this dataset.",
			},
			{
				relation: "no_relation",
				description: "There is no relation between the two entities.",
				example:
					"Tsy misy ifandraisany ny ala Maintirano sy ny saribakoly.",
			},
			{
				relation: "-:instance_of",
				description:
					"An entity is an example, definition, or instance of another entity or concept.",
				example:
					"Hamafisiko eto fa ny Ankolafy Ravalomanana, indrindra ny Tiako i Madagasikara dia tsy manana afa-tsy ny Prezidà Marc Ravalomanana ho kandidà tokana amin'ny fifidiana ho filoham-pirenena.",
			},
			{
				relation: "-:same_as",
				description:
					"The two entities are identical, synonymous, or acronyms.",
			},
		],
	},
];

export function RelationTypeTable() {
	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[200px]">Relation</TableHead>
						<TableHead className="w-[300px]">Description</TableHead>
						<TableHead>Example</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{relations.map((category, index) => (
						<Fragment key={`rt-${category.category}-${index}`}>
							<TableRow className="bg-muted/50">
								<TableCell colSpan={3} className="font-medium">
									{category.category}
								</TableCell>
							</TableRow>
							{category.items.map((item) => (
								<TableRow key={item.relation}>
									<TableCell className="font-medium">
										{item.relation}
									</TableCell>
									<TableCell>{item.description}</TableCell>
									<TableCell className="font-mono text-sm">
										{item.example || "-"}
									</TableCell>
								</TableRow>
							))}
						</Fragment>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
