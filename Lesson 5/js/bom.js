const input = document.querySelector("#chapter");
const button = document.querySelector("button");
const output = document.querySelector(".list");

button.addEventListener("click", () => {
	let li = document.createElement("li");
	let deletebutton = document.createElement("button");
	let defaultval = input.defaultValue;
	let current = input.value;
	li.textContent = input.value;
	deletebutton.textContent = "X";
	li.appendChild(deletebutton);
	output.appendChild(li);
	document.querySelector('input').value = '';
	deletebutton.addEventListener("click", function () {
		output.removeChild(li);
		input.focus();
	});

});
