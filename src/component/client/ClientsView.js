import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const ClientsView = () => {
	const [clients, setClients] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadClients();
	}, []);

	const loadClients = async () => {
		const result = await axios.get(
			"http://localhost:9192/clients",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setClients(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:9192/clients/delete/${id}`
		);
		loadClients();
	};

	return (
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Discount</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{clients
						.filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)
						)
						.map((client, index) => (
							<tr key={client.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{client.firstName}</td>
								<td>{client.lastName}</td>
								<td>{client.email}</td>
								<td>{client.discount}</td>
								<td className="mx-2">
									<Link
										to={`/client-profile/${client.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-client/${client.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(student.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default ClientsView;