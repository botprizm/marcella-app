import { Link } from "wouter";

interface Incident {
	id: number;
	created: string;
	updated: string;
	category: string;
	description: string;
	registeredBy: string;
	assignedTo: string;
	division: string;
	vehicle: string;
}

const incidents: Incident[] = [
	{
		id: 1,
		created: "2021-09-01",
		updated: "2021-09-01",
		category: "Avåkning",
		description: "Avåkning på väg 1",
		registeredBy: "Kalle",
		assignedTo: "Pelle",
		division: "E35",
		vehicle: "5054",
	},
	{
		id: 2,
		created: "2021-09-02",
		updated: "2021-09-02",
		category: "Krock",
		description: "Krock på väg 2",
		registeredBy: "Lisa",
		assignedTo: "Anna",
		division: "E40",
		vehicle: "5076",
	},
	{
		id: 3,
		created: "2021-09-03",
		updated: "2021-09-03",
		category: "Stopp",
		description: "Stopp på väg 3",
		registeredBy: "Olle",
		assignedTo: "Nisse",
		division: "E45",
		vehicle: "5098",
	},
	{
		id: 4,
		created: "2021-09-04",
		updated: "2021-09-04",
		category: "Dikeskörning",
		description: "Dikeskörning på väg 4",
		registeredBy: "Eva",
		assignedTo: "Lars",
		division: "E50",
		vehicle: "5112",
	},
	{
		id: 5,
		created: "2021-09-05",
		updated: "2021-09-05",
		category: "Punktering",
		description: "Punktering på väg 5",
		registeredBy: "Fredrik",
		assignedTo: "Mikael",
		division: "E55",
		vehicle: "5134",
	},
	{
		id: 6,
		created: "2021-09-06",
		updated: "2021-09-06",
		category: "Motorstopp",
		description: "Motorstopp på väg 6",
		registeredBy: "Greta",
		assignedTo: "Stefan",
		division: "E60",
		vehicle: "5156",
	},
	{
		id: 7,
		created: "2021-09-07",
		updated: "2021-09-07",
		category: "Trafikolycka",
		description: "Trafikolycka på väg 7",
		registeredBy: "Helena",
		assignedTo: "Tommy",
		division: "E65",
		vehicle: "5178",
	},
	{
		id: 8,
		created: "2021-09-08",
		updated: "2021-09-08",
		category: "Viltolycka",
		description: "Viltolycka på väg 8",
		registeredBy: "Ivar",
		assignedTo: "Urban",
		division: "E70",
		vehicle: "5190",
	},
	{
		id: 9,
		created: "2021-09-09",
		updated: "2021-09-09",
		category: "Omkörning",
		description: "Omkörning på väg 9",
		registeredBy: "Jenny",
		assignedTo: "Veronica",
		division: "E75",
		vehicle: "5212",
	},
	{
		id: 10,
		created: "2021-09-10",
		updated: "2021-09-10",
		category: "Avåkning",
		description: "Avåkning på väg 10",
		registeredBy: "Karl",
		assignedTo: "William",
		division: "E80",
		vehicle: "5234",
	},
	{
		id: 11,
		created: "2021-09-11",
		updated: "2021-09-11",
		category: "Krock",
		description: "Krock på väg 11",
		registeredBy: "Lina",
		assignedTo: "Xander",
		division: "E85",
		vehicle: "5256",
	},
	{
		id: 12,
		created: "2021-09-12",
		updated: "2021-09-12",
		category: "Stopp",
		description: "Stopp på väg 12",
		registeredBy: "Martin",
		assignedTo: "Ylva",
		division: "E90",
		vehicle: "5278",
	},
	{
		id: 13,
		created: "2021-09-13",
		updated: "2021-09-13",
		category: "Dikeskörning",
		description: "Dikeskörning på väg 13",
		registeredBy: "Nina",
		assignedTo: "Zacharias",
		division: "E95",
		vehicle: "5290",
	},
	{
		id: 14,
		created: "2021-09-14",
		updated: "2021-09-14",
		category: "Punktering",
		description: "Punktering på väg 14",
		registeredBy: "Oscar",
		assignedTo: "Åsa",
		division: "E100",
		vehicle: "5312",
	},
	{
		id: 15,
		created: "2021-09-15",
		updated: "2021-09-15",
		category: "Motorstopp",
		description: "Motorstopp på väg 15",
		registeredBy: "Petra",
		assignedTo: "Ärling",
		division: "E105",
		vehicle: "5334",
	},
	{
		id: 16,
		created: "2021-09-16",
		updated: "2021-09-16",
		category: "Trafikolycka",
		description: "Trafikolycka på väg 16",
		registeredBy: "Quentin",
		assignedTo: "Örjan",
		division: "E110",
		vehicle: "5356",
	},
	{
		id: 17,
		created: "2021-09-17",
		updated: "2021-09-17",
		category: "Viltolycka",
		description: "Viltolycka på väg 17",
		registeredBy: "Rasmus",
		assignedTo: "Anna",
		division: "E115",
		vehicle: "5378",
	},
	{
		id: 18,
		created: "2021-09-18",
		updated: "2021-09-18",
		category: "Omkörning",
		description: "Omkörning på väg 18",
		registeredBy: "Sofia",
		assignedTo: "Bertil",
		division: "E120",
		vehicle: "5390",
	},
	{
		id: 19,
		created: "2021-09-19",
		updated: "2021-09-19",
		category: "Avåkning",
		description: "Avåkning på väg 19",
		registeredBy: "Tomas",
		assignedTo: "Cecilia",
		division: "E125",
		vehicle: "5412",
	},
	{
		id: 20,
		created: "2021-09-20",
		updated: "2021-09-20",
		category: "Krock",
		description: "Krock på väg 20",
		registeredBy: "Ulrika",
		assignedTo: "David",
		division: "E130",
		vehicle: "5434",
	},
	{
		id: 21,
		created: "2021-09-21",
		updated: "2021-09-21",
		category: "Stopp",
		description: "Stopp på väg 21",
		registeredBy: "Viktor",
		assignedTo: "Erika",
		division: "E135",
		vehicle: "5456",
	},
	{
		id: 22,
		created: "2021-09-22",
		updated: "2021-09-22",
		category: "Dikeskörning",
		description: "Dikeskörning på väg 22",
		registeredBy: "Wiktoria",
		assignedTo: "Filip",
		division: "E140",
		vehicle: "5478",
	},
	{
		id: 23,
		created: "2021-09-23",
		updated: "2021-09-23",
		category: "Punktering",
		description: "Punktering på väg 23",
		registeredBy: "Xenia",
		assignedTo: "Gustav",
		division: "E145",
		vehicle: "5490",
	},
	{
		id: 24,
		created: "2021-09-24",
		updated: "2021-09-24",
		category: "Motorstopp",
		description: "Motorstopp på väg 24",
		registeredBy: "Yngve",
		assignedTo: "Hanna",
		division: "E150",
		vehicle: "5512",
	},
	{
		id: 25,
		created: "2021-09-25",
		updated: "2021-09-25",
		category: "Trafikolycka",
		description: "Trafikolycka på väg 25",
		registeredBy: "Zara",
		assignedTo: "Ivar",
		division: "E155",
		vehicle: "5534",
	},
	{
		id: 26,
		created: "2021-09-26",
		updated: "2021-09-26",
		category: "Viltolycka",
		description: "Viltolycka på väg 26",
		registeredBy: "Åke",
		assignedTo: "Johanna",
		division: "E160",
		vehicle: "5556",
	},
];

const DeviationRow = ({
	data,
}: {
	data: {
		id: number;
		created: string;
		updated: string;
		category: string;
		description: string;
		registeredBy: string;
		assignedTo: string;
		division: string;
		vehicle: string;
	};
}) => {
	return (
		<Link
			to={"/deviations/" + data.id}
			className="flex border-b rounded w-full justify-between items-center hover:bg-red-50 cursor-pointer px-4 py-1.5 ease-out transition-all duration-100"
		>
			<div className="flex flex-row items-center">
				<p className="text-red-600 text-sm py-0.5 rounded font-semibold mr-4">
					{data.category}
				</p>

				<p className="text-xs font-semibold mr-4">{data.vehicle}</p>

				<p className="text-xs">{data.description}</p>
			</div>
			<div className="flex flex-row items-center">
				<p className="text-xs bg-stone-100 py-1 px-2 font-medium rounded">
					{data.created}
				</p>
			</div>
		</Link>
	);
};

const Deviations = () => {
	return (
		<div className="flex flex-1 px-6 flex-col">
			<div className="w-full h-12 bg-stone-100 my-4 rounded flex justify-between px-4 items-center">
				<p className="font-medium bg-stone-200 px-3 rounded">Sortera</p>
				<p className="font-medium bg-stone-200 px-3 rounded">
					Filtrera
				</p>
			</div>
			<div className="flex flex-1 flex-col w-full">
				{incidents.map((item, i) => (
					<DeviationRow key={"dr-" + i} data={item} />
				))}
			</div>
		</div>
	);
};

export default Deviations;
