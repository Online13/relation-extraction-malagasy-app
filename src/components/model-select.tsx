import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function ModelSelect() {
	return (
		<Select defaultValue="bert-base-uncased">
			<SelectTrigger className="max-w-3xs">
				<SelectValue placeholder="Select a model" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>PURE - BERT-based</SelectLabel>
					<SelectItem value="bert-base-uncased">
						bert-base-uncased
					</SelectItem>
					<SelectItem value="bert-base-multilingual-uncased">
						bert-base-multilingual-uncased
					</SelectItem>
					<SelectItem value="microsoft/mdeberta-v3-base">
						microsoft/mdeberta-v3-base
					</SelectItem>
					<SelectItem value="FacebookAI/xlm-roberta-base">
						FacebookAI/xlm-roberta-base
					</SelectItem>
					<SelectItem value="xlm-roberta-large">
						xlm-roberta-large
					</SelectItem>
					<SelectLabel>PURE - T5-based</SelectLabel>
					<SelectItem value="google-t5/t5-small">
						google-t5/t5-small
					</SelectItem>
					<SelectItem value="google-t5/t5-base">
						google-t5/t5-base
					</SelectItem>
					<SelectItem value="google-t5/t5-large">
						google-t5/t5-large
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
