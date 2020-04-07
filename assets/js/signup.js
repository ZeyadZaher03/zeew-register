const inputs = Array.from(document.querySelectorAll("input[type='text']"));
const fileInput = document.querySelector(".file");
const dummyFileInput = document.querySelector(".file-dummy");
const checkBox = document.querySelector(".check-box");
const formSignUp = document.querySelector(".form-signup");
const optinalAddress = document.querySelector(".optional-address");
const optinalAddressBtn = document.querySelector(".add-address");

optinalAddressBtn.addEventListener("click", (e) => {
	e.preventDefault;
	optinalAddressBtn.style.display = "none";
	optinalAddress.style.display = "inline-block";
});
dummyFileInput.addEventListener("click", (e) => {
	e.preventDefault();
	fileInput.click();
});

Array.from(document.querySelectorAll("select")).map((select) =>
	select.parentNode.querySelector("label").classList.add("empty")
);

document.addEventListener("change", () => {
	inputs.map((input) => {
		if (input.value !== "") {
			input.parentNode.querySelector("label").classList.add("empty");
		} else {
			input.parentNode.querySelector("label").classList.remove("empty");
		}
	});
});

checkBox.querySelector(".news-sub").addEventListener("click", () => {
	if (checkBox.querySelector(".news-sub").checked) {
		checkBox.querySelector(".unchecked").style.display = "none";
		checkBox.querySelector(".checked").style.display = "flex";
	} else {
		checkBox.querySelector(".unchecked").style.display = "block";
		checkBox.querySelector(".checked").style.display = "none";
	}
});

formSignUp.addEventListener("submit", (e) => {
	e.preventDefault();
	Array.from(formSignUp.querySelectorAll("input")).map((input) => {
		console.log(input.name);
		console.log(input.value);
	});
});

document.querySelector(".sign-up").addEventListener("click", (e) => {
	e.preventDefault();
	const formData = [];

	Array.from(formSignUp.querySelectorAll("input[type='text']")).map(
		(input) => {
			if (input.required && input.value === "") {
				input.classList.add("input-error");
				setTimeout(() => {
					input.classList.remove("input-error");
				}, 2000);
			}

			[input.name] = input.value;

			formData[
				formSignUp.querySelector("input[type='password']").name
			] = formSignUp.querySelector("input[type='password']").value;

			if (fileInput.value) {
				const profileImage = fileInput.files[0];
				const profileImageSize = profileImage.size;
				const profileImageName = profileImage.name;
				const profileImageExtenstion = profileImageName
					.split(".")
					.pop()
					.toLowerCase();
				const imagesFormat = ["jpg", "jpeg", "png"];
			}

			if (fileInput.value) {
				console.log("TFGHIJLK");
				formData[profileImage] = profileImage;
				formData[profileImageSize] = profileImageSize;
				formData[profileImageName] = profileImageName;
				formData[profileImageExtenstion] = profileImageExtenstion;
			}

			// document.querySelector(
			// 	".profile-pic-box"
			// ).style.backgroundImage = `url("/assets/images/${profileImageName}")`;
		}
	);
	console.log(formData);
});
