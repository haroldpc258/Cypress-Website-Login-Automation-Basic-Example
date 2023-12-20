describe("Login into Sample App", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.get('[name="UserName"]').as("usernameInput");
		cy.get('[name="Password"]').as("passwordInput");
		cy.get("#login").as("loginButton");
		cy.get("#loginstatus").as("loginStatusLabel");
	});

	it("Login with valid credentials", () => {
		cy.fixture("credentials.json").then((credentials) => {
			credentials.valid.forEach((credential) => {
				cy.get("@usernameInput").type(credential.username);
				cy.get("@passwordInput").type(credential.password);
				cy.get("@loginButton").click();
				cy.get("@loginStatusLabel").should(
					"contain",
					credential.username
				);
				cy.get("#login").click();
			});
		});
	});

	it("Login with invalid credentials", () => {
		cy.fixture("credentials.json").then((credentials) => {
			credentials.invalid.forEach((credential) => {
				cy.get("@usernameInput").type(credential.username);
				cy.get("@passwordInput").type(credential.password);
				cy.get("@loginButton").click();
				cy.get("@loginStatusLabel").should(
					"contain",
					"Invalid username/password"
				);
				cy.get("#login").click();
			});
		});
	});

	it("Empty credentials", () => {
		cy.get("@loginButton").click();
		cy.get("@loginStatusLabel").should(
			"contain",
			"Invalid username/password"
		);
	});
});
