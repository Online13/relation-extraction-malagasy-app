import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const entities = [
  {
    entity: "Organization (ORG)",
    description:
      "Name of a collective entity, such as a company, institution, government, group of people, or non-governmental organization.",
    example: "Banky Foiben'i Madagasikara",
  },
  {
    entity: "Location (LOC)",
    description:
      "Proper name designating a geographical place, such as a city, country, monument, specific region, or even a building name.",
    example: "Antananarivo, lapan'ny tanana",
  },
  {
    entity: "Person (PER)",
    description: "Proper name or pronoun referring to an individual.",
    example: "Rajoelina Andry, Andrianampoinimerina",
  },
  {
    entity: "Event (EVN)",
    description: "Specific occurrence or event mentioned in a sentence, such as a celebration, incident, or meeting.",
    example: "fetim-pirenena, krismasy",
  },
  {
    entity: "Date (DATE)",
    description: "Temporal reference in a sentence, including days and/or months and/or years and/or specific periods.",
    example: "14 Oktobra 1960, Janvier 2025",
  },
  {
    entity: "Title/Profession (JOB)",
    description: "Title, function, or profession associated with a person.",
    example: "Minisitra",
  },
  {
    entity: "Time (HOUR)",
    description: "Specific temporal reference to a time or moment of the day.",
    example: "amin'ny 8 ora maraina",
  },
  {
    entity: "Unspecified Entity (OTHER)",
    description: "Any other entity that doesn't fit into the previous categories but is relevant for analysis.",
    example: "Ny fiaraha-miasa",
  },
]

export function NERTypeTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Entity</TableHead>
            <TableHead className="w-[400px]">Description</TableHead>
            <TableHead>Example</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entities.map((item) => (
            <TableRow key={item.entity}>
              <TableCell className="font-medium">{item.entity}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell className="font-mono text-sm">{item.example}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

