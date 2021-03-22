import React, { useState } from "react";
import shortid from "shortid";

//create your first component
export function TodoList() {
	const [todo, setTodo] = useState("");
	const [arrayTodos, setArrayTodos] = useState([]);

	let pendingTodo = arrayTodos.length;

	const delet = uniqueId => {
		let itemDelet = arrayTodos.filter(item => {
			return item.id !== uniqueId;
		});
		setArrayTodos(itemDelet);
	};

	const addTodo = e => {
		e.preventDefault();
		setArrayTodos([
			...arrayTodos,
			{
				id: shortid.generate(),
				nameTodo: todo
			}
		]);
		setTodo("");
	};

	return (
		<div className="container bg-light">
			<div className="row vh-100 align-items-center">
				<div className="todo bg-white">
					<header>
						<h1>todos</h1>
						<form className="form-todo" onSubmit={addTodo}>
							<input
								placeholder="¿Qué necesita hacer?"
								onChange={e => setTodo(e.target.value)}
								value={todo}
							/>
						</form>
					</header>
					<section>
						{pendingTodo === 0 ? (
							<p>Sin pendientes</p>
						) : (
							arrayTodos.map(item => (
								<div key={item.id}>
									<ul className="list-group">
										<li className="list-group-item lista">
											{" "}
											{item.nameTodo}{" "}
											<i
												onClick={() => {
													delet(item.id);
												}}
												className="fas fa-trash basurero"></i>
										</li>
									</ul>
								</div>
							))
						)}
					</section>
					<footer className="footer">
						<p>{pendingTodo} Pendientes</p>
					</footer>
				</div>
			</div>
		</div>
	);
}
