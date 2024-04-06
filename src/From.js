import React from "react";

const Form = () => {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		// TODO: Submit the form data to your server
	};

	return (
		<>
			<div className="bg-yellow-200 w-full h-screen justify-center items-center flex ">
				<div className="border-4 border-red-400 rounded-lg">
                <form onSubmit={handleSubmit} className=" p-3">
					<input className=" rounded-md m-2 p-2 border-black border-2 "
						type="text"
						name="name"
						placeholder="Name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
                    <br/>
					<input
                        className="rounded-md m-2 p-2 border-black border-2 "
						type="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
                    <br />
					<input
                        className="rounded-md m-2 p-2 border-black border-2 "
						type="phone"
						name="phone"
						placeholder="Phone"
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
					/>
                    <br />
					<button type="submit" className="border-black border-2 bg-green-500 rounded-md p-2 ml-16 hover:bg-green-300 duration-300
                    hover:scale-110">Submit</button>
				</form>
                </div>
			</div>
		</>
	);
};

export default Form;
