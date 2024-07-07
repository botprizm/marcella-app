import { useState } from "react";

import checkbox from "../assets/checkbox-checked.svg";
import e30 from "../assets/e30.png";
import delete_icon from "../assets/delete.png";

const Start = () => {
	const defaultValueRaw = localStorage.getItem("stored-parts");
	const defaultValue = defaultValueRaw ? JSON.parse(defaultValueRaw) : [];

	const [value, setValue] = useState("");
	const [list, setList] =
		useState<{ value: string; done: boolean }[]>(defaultValue);

	const klickadeMarcellasKnapp = () => {
		if (value === "") {
			return;
		}

		const tempList = [...list];

		tempList.push({
			value,
			done: false,
		});

		setList(tempList);

		setValue("");
		localStorage.setItem("stored-parts", JSON.stringify(tempList));
	};

	const changePartStatus = (i: number) => {
		const tempList = [...list];

		tempList[i] = {
			...tempList[i],
			done: !tempList[i].done,
		};

		setList(tempList);

		localStorage.setItem("stored-parts", JSON.stringify(tempList));
	};

	const removeItem = (i: number) => {
		const tempList = [...list];

		tempList.splice(i, 1);

		setList(tempList);

		localStorage.setItem("stored-parts", JSON.stringify(tempList));
	};

	return (
		<div className="flex items-center flex-1 flex-col font-serif italic relative">
			<div className="flex flex-col items-center mt-20 mb-20">
				<h2 className="text-5xl font-bold mt-2">Marcellas app</h2>
			</div>

			<p>Bildelar att köpa</p>
			<div>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="bg-pink-600 border-2 border-black text-black px-2 py-2 rounded"
				/>
				<button
					className="ml-1 bg-pink-600 border-2 border-black text-black px-2 py-2 rounded"
					onClick={() => klickadeMarcellasKnapp()}
				>
					Lägg till
				</button>
			</div>

			<div className="flex justify-center mt-2 items-center flex-col">
				{list.map((item, i) => (
					<div className="flex flex-row items-center">
						<div
							onClick={() => changePartStatus(i)}
							className="flex select-none hover:opacity-80 cursor-pointer flex-row justify-between ml-1 bg-pink-600 mt-1 border-2 border-black font-medium text-black px-2 py-2 rounded w-[306px] self-center"
						>
							<p>{item.value}</p>
							{item.done ? (
								<img
									src={checkbox}
									className="w-6 hover:opacity-60 cursor-pointer"
								/>
							) : (
								<div className="w-6 h-6 bg-pink-800 rounded hover:opacity-60 cursor-pointer"></div>
							)}
						</div>
						<img
							src={delete_icon}
							onClick={() => removeItem(i)}
							className="w-11 h-11 bg-pink-600 border-2 border-black px-2.5 mt-1 py-2.5 ml-1 rounded cursor-pointer hover:opacity-80"
						/>
					</div>
				))}
			</div>

			<img src={e30} className="grayscale" />
		</div>
	);
};

export default Start;
