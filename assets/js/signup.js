// CONTANTS ---
const fileInput = document.querySelector(".file");
const dummyFileInput = document.querySelector(".file-dummy");
const checkBox = document.querySelector(".check-box");
const formSignUp = document.querySelector(".form-signup");
const optinalAddress = document.querySelector(".optional-address");
const optinalAddressBtn = document.querySelector(".add-address");
const inputs = formSignUp.querySelectorAll(
	"input[type='text'] ,input[type='password']"
);
const isSubscribeNewsLetter = formSignUp.querySelector(".news-sub").checked;

// FUNCTIONS ---

// ADD OPTIONAL ADDRESS
optinalAddressBtn.addEventListener("click", (e) => {
	addressOptionalContaier = document.querySelector(
		".optional-address-container"
	);
	const eleLength = Array.from(
		addressOptionalContaier.querySelectorAll(".optional-address")
	).length;
	e.preventDefault();
	if (eleLength < 5) {
		inputContainer = document.createElement("div");
		inputContainer.classList.add("input-container");
		inputContainer.classList.add("optional-address");

		optionalAddressInput = document.createElement("input");
		optionalAddressInput.setAttribute("type", "text");
		optionalAddressInput.classList.add("input");
		const numberName = () => {
			if (eleLength == 0) return "one";
			else if (eleLength == 1) return "two";
			else if (eleLength == 2) return "three";
			else if (eleLength == 3) return "four";
			else if (eleLength == 4) return "five";
			else return "s";
		};
		optionalAddressInput.setAttribute("name", `address-${numberName()}`);
		optionalAddressInput.setAttribute(
			"placeholder",
			"Address ( Optional )"
		);
		optionalAddressInput.setAttribute("required", "");

		optionalAddressLabel = document.createElement("label");
		optionalAddressLabel.classList.add("input-label");
		optionalAddressLabel.innerHTML = "Addres (optional)";

		inputContainer.appendChild(optionalAddressInput);
		inputContainer.appendChild(optionalAddressLabel);

		addressOptionalContaier.appendChild(inputContainer);
	}
	if (eleLength >= 5) optinalAddressBtn.parentNode.style.display = "none";
});

// ADD PROFILE PIC
dummyFileInput.addEventListener("click", (e) => {
	e.preventDefault();
	fileInput.click();
});
fileInput.addEventListener("change", (e) => {
	const file = fileInput.files[0];
	const reader = new FileReader();

	reader.onloadend = () => {
		const imgContainer = document.querySelector(".profile-pic-box");
		const imgEle = document.createElement("img");
		imgContainer.innerHTML = "";
		imgEle.src = reader.result;
		imgContainer.appendChild(imgEle);
	};
	reader.readAsDataURL(file);
});

// INPUT STYLES
Array.from(document.querySelectorAll("select")).map((select) =>
	select.parentNode.querySelector("label").classList.add("empty")
);

formSignUp.addEventListener("change", () => {
	inputs.forEach((input) => {
		if (input.value !== "") {
			input.parentNode.querySelector("label").classList.add("empty");
		} else {
			input.parentNode.querySelector("label").classList.remove("empty");
		}
	});
});

// CHECKBOX STYLE
checkBox.querySelector(".news-sub").addEventListener("click", () => {
	if (checkBox.querySelector(".news-sub").checked) {
		checkBox.querySelector(".unchecked").style.display = "none";
		checkBox.querySelector(".checked").style.display = "flex";
	} else {
		checkBox.querySelector(".unchecked").style.display = "block";
		checkBox.querySelector(".checked").style.display = "none";
	}
});

document.querySelector(".sign-up").addEventListener("click", (e) => {
	e.preventDefault();
	let inputshasValue = true;
	const displayErrorMessage = () => {
		inputs.forEach((input) => {
			if (input.required && input.value.trim() == "") {
				input.classList.add("input-error");
				setTimeout(() => {
					input.classList.remove("input-error");
				}, 2000);
			}
		});
	};

	// check values
	inputs.forEach((input) => {
		input.addEventListener("submit", (e) => e.preventDefault());
		const inputValue = input.value.trim();
		if (input.required && inputValue == "") {
			return (inputshasValue = false);
		}
	});

	// profile picture
	const profilePic = () => {
		if (fileInput.value) {
			const image = fileInput.files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				const imgContainer = document.querySelector(".profile-pic-box");
				const imgEle = document.createElement("img");
				imgContainer.innerHTML = "";
				imgEle.src = reader.result;
				imgContainer.appendChild(imgEle);
			};
			reader.readAsDataURL(image);
			return image;
		}
	};

	if (inputshasValue) {
		formDataSerialized = $(".form-signup").serialize();
		console.log(profilePic());
		console.log(formDataSerialized);
		formSignUp.submit();
	} else {
		displayErrorMessage();
	}
});
