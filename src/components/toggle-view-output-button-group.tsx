import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	AlignCenterIcon,
	AlignLeftIcon,
} from "lucide-react";
import { useState } from "react";

export default function ToggleViewOutputButtonGroup() {
	const [value, setValue] = useState<string>("center");

	return (
		<ToggleGroup
			className="divide-background inline-flex divide-x border border-border"
			type="single"
			value={value}
			onValueChange={(value) => {
				if (value) setValue(value);
			}}
		>
			<ToggleGroupItem
				className="hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
				aria-label="Align Left"
				value="left"
			>
				<AlignLeftIcon size={16} aria-hidden="true" />
				<span>RDF</span>
			</ToggleGroupItem>
			<ToggleGroupItem
				className="hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
				aria-label="Align Center"
				value="center"
			>
				<AlignCenterIcon size={16} aria-hidden="true" />
        <span>Graph</span>
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
