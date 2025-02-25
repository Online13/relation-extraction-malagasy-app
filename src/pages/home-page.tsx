import { useTransition } from "react";
import { Info, Text } from "lucide-react";
import { BenchmarkTable } from "@/components/benchmark-table";
import { ModelSelect } from "@/components/model-select";
import { NERTypeTable } from "@/components/ner-type-table";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { RelationTypeTable } from "@/components/relation-type-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import ToggleViewOutputButtonGroup from "@/components/toggle-view-output-button-group";

const DEFAULT_VALUE =
	`Tsy resy mihitsy nandritra ny lalao fito natrehana teny Mahamasina ny ekipam-pirenena Malagasy.
In-droa resiny ny Frantsay, ary raha ny fahitana azy dia mbola ho sarotsarotra ihany izany hoe handresy ny Malagasy izany satria efa tena avo lenta ny teknika sy ny traikefa ananantsika amin'ity tsipy kanetibe ity.
Tsara homarihana moa fa tsy mbola anisan'ireo taranja tafiditra amin'ny lalao olimpika ny tsipy kanetibe.
Ny be vazivazy moa dia mieritreritra fa rehefa tena resin'ny vazaha tsara isika, na ireo firenena madinika hafa, izay vao mety hampidirin'izy ireo ao anatin'ny fifaninanana olimpika ny tsipy kanetibe.
Ny tiana hahatongavana amin'izany rehetra izany dia ny hoe : mahavita azy ary tena mahavita zavatra tsara ny Malagasy, ary afaka mifampitana tsara amin'ireo firenena lehibe sy manankarena.
Ny mampalahelo anefa dia vitsy dia vitsy ny sehatra ahavitantsika izany, fa amin'ny ankapoaeny dia voafetsin'ny vahiny foana isika.
Firifiry ny firenena nitovy taminstika, 50 taona lasa izay, saingy ankehitriny efa tena matanjaka sy misongadina, tafiditra ao anatin'izany ireo firenena any Azia Atsimo Atsinanana, ny nosy Maorisy etsy akaiky kely etsy.
Tsy azo afantoka fotsiny any amin'ny hoe vintana na famaizana avy amin'Andriamanitra ny fahantrana mitombo isan-taona eto amin'ity firenena ity, fa ny tsirairay avy no tokony ho tonga saina, na mpitondra fanjakana io, na mpitondra fivavahana, na mpanao politika, na mpandraharaha, na mpiasam-panjakana, na mpiasa amin'ny sehatra tsy miankina, na olon-tsotra miaina an-drenivohitra sy any ambanivohitra, fa tena misy zavatra tsy mety eto.
Iaraha-manaiky fa manan-tsaina ny Malagasy, ary manankarena i Madagasikara, kanefa dia krizy no malaza eto.
Ny vahiny tsy maintsy mitady ny hevitra hahazoany tombontsoa eto, saingy manana tombony lavitra be mihoatra amin'izy ireo ny Malagasy, noho ny maha tompon'ny tany azy.
Efa mba maro karazana ihany izay fandaharan'asan'ny mpitondra nampihariny teto izay, telonjato mahery ny antoko politika eto, efa ho isaky ny elakela-trano ny sekoly, amin'ireo tanàn-dehibe, fa tsy mbola tafavoaka ihany isika ary tena mihemotra fa tsy mandroso.
Tsy hisy zava-banona eto raha mbola mandany andro amin'ny fifanenjehana ny Malagasy, ary mila mandini-tena tsara ihany koa ireo Malagasy mpamadika ny tanindrazana, sy ireo tia tena.
Ny tody anie tsy misy fa ny atao no miverina e !`.replace("\n", "");

export function HomePage() {
	const [isPending, startTransition] = useTransition();
	const handleExtract = () => {
		startTransition(async () => {
			await new Promise((resolve) => {
				setTimeout(resolve, 1000);
			});
		});
	};

	return (
		<div className="w-full h-full flex flex-col">
			<Header />
			<Separator />
			<ResizablePanelGroup direction="horizontal" className="w-full h-full">
				<ResizablePanel className="h-full">
					<div className="h-full flex flex-col">
						<div className="w-full h-16 flex justify-end items-center p-2 px-4 gap-2">
							<ModelSelect />
							<Tooltip>
								<TooltipTrigger asChild>
									<Button disabled={isPending} onClick={handleExtract}>
										Extraire
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>This features is not yet implemented</p>
								</TooltipContent>
							</Tooltip>
						</div>
						<Separator />
						<Textarea
							className="resize-none w-full h-full border-0 rounded-none"
							defaultValue={DEFAULT_VALUE}
						/>
					</div>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel className="h-full">
					<div className="h-full flex flex-col">
						<div className="w-full h-16 flex justify-end items-center p-2 px-4 gap-2">
							<ToggleViewOutputButtonGroup />
						</div>
						<Separator />
						<div className="flex h-full items-center justify-center">
							{isPending ? (
								<div className="grid gap-4">
									<Skeleton className="w-32 h-4" />
									<Skeleton className="w-40 h-4" />
								</div>
							) : (
								<span className="font-semibold">
									This features is not yet implemented
								</span>
							)}
						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
			<Separator />
			<Footer />
		</div>
	);
}

function Footer() {
	return (
		<footer className="w-full h-12 flex items-center justify-center px-9 bg-primary text-primary-foreground">
			<span>© This site was designed and developed by @Rayane</span>
		</footer>
	);
}

function Header() {
	return (
		<header className="w-full h-14 flex justify-between items-center px-8">
			<h1 className="scroll-m-20 text-xl font-semibold tracking-tight inline-flex items-center gap-2">
				<Text size={20} />
				RE Malagasy
			</h1>
			<div className="flex items-center gap-2">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" className="shrink-0">
							<Info size={24} />
							<span>Labels</span>
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[925px] w-full">
						<DialogHeader>
							<DialogTitle>Labels</DialogTitle>
							<DialogDescription>
								Labels used for RE and NER
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Tabs
								defaultValue="tab-1"
								orientation="vertical"
								className="w-full flex-row"
							>
								<TabsList className="flex-col rounded-none border-l bg-transparent p-0">
									<TabsTrigger
										value="tab-1"
										className="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
									>
										Named entities types
									</TabsTrigger>
									<TabsTrigger
										value="tab-2"
										className="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
									>
										Relation types
									</TabsTrigger>
								</TabsList>
								<div className="grow rounded-md border text-start max-h-96">
									<ScrollArea className="w-full h-full overflow-hidden">
										<TabsContent value="tab-1">
											<NERTypeTable />
										</TabsContent>
										<TabsContent value="tab-2">
											<div className="w-full h-full">
												<RelationTypeTable />
											</div>
										</TabsContent>
									</ScrollArea>
								</div>
							</Tabs>
						</div>
					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" className="shrink-0">
							<Info size={24} />
							<span>Performance</span>
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[825px] w-full">
						<DialogHeader>
							<DialogTitle>Benchmark</DialogTitle>
							<DialogDescription>
								Test on FewRel translated according to PURE architecture
								with different encoders
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<BenchmarkTable />
						</div>
					</DialogContent>
				</Dialog>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button>Exporter</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>This features is not yet implemented</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</header>
	);
}
