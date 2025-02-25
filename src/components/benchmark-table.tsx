import { Fragment } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const models = [
	{
		section: "Pipeline-based approaches",
		subsection: "BERT-based",
		models: [
			{
				name: "BERT base",
				subname: "(bert-base-uncased)",
				params: "110M",
				f1: "0.735",
				recall: "0.739",
				precision: "0.746",
				accuracy: "0.740",
			},
			{
				name: "BERT multi",
				subname: "(bert-base-multilingual-uncased)",
				params: "168M",
				f1: "0.807",
				recall: "0.811",
				precision: "0.813",
				accuracy: "0.811",
			},
			{
				name: "Deberta multi",
				subname: "(microsoft/mdeberta-v3-base)",
				params: "278M",
				f1: "0.824",
				recall: "0.827",
				precision: "0.835",
				accuracy: "0.828",
			},
			{
				name: "Roberta multi",
				subname: "(FacebookAI/xlm-roberta-base)",
				params: "279M",
				f1: "0.769",
				recall: "0.776",
				precision: "0.776",
				accuracy: "0.776",
			},
			{
				name: "Roberta large multi",
				subname: "(xlm-roberta-large)",
				params: "561M",
				f1: "0.833",
				recall: "0.835",
				precision: "0.839",
				accuracy: "0.838",
			},
		],
	},
	{
		section: "T5-based",
		models: [
			{
				name: "T5-small",
				subname: "(google-t5/t5-small)",
				params: "65.5M",
				f1: "0.689",
				recall: "0.693",
				precision: "0.705",
				accuracy: "0.693",
			},
			{
				name: "T5-base",
				subname: "(google-t5/t5-base)",
				params: "223M",
				f1: "0.679",
				recall: "0.687",
				precision: "0.697",
				accuracy: "0.684",
			},
			{
				name: "T5-large",
				subname: "(google-t5/t5-large)",
				params: "738M",
				f1: "0.728",
				recall: "0.734",
				precision: "0.742",
				accuracy: "0.736",
			},
		],
	},
];

export function BenchmarkTable() {
	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[300px]">Modèle de base</TableHead>
						<TableHead>Params</TableHead>
						<TableHead>F1</TableHead>
						<TableHead>Recall</TableHead>
						<TableHead>Précision</TableHead>
						<TableHead>Accuracy</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{models.map((section, index) => (
						<Fragment key={`${section.section}-${index}`}>
							<TableRow className="bg-muted/50">
								<TableCell colSpan={6} className="font-semibold w-full">
									{section.section}
								</TableCell>
							</TableRow>
							{section.subsection && (
								<TableRow className="bg-muted/30">
									<TableCell
										colSpan={6}
										className="w-full font-medium"
									>
										{section.subsection}
									</TableCell>
								</TableRow>
							)}
							{section.models.map((model, jndex) => (
								<TableRow
									key={`s-${section.section}-${model.name}-${jndex}-${index}`}
								>
									<TableCell className="font-medium">
										{model.name}
										<br />
										<span className="text-sm text-muted-foreground">
											{model.subname}
										</span>
									</TableCell>
									<TableCell>{model.params}</TableCell>
									<TableCell>{model.f1}</TableCell>
									<TableCell>{model.recall}</TableCell>
									<TableCell>{model.precision}</TableCell>
									<TableCell>{model.accuracy}</TableCell>
								</TableRow>
							))}
						</Fragment>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
