const sendButton = document.getElementById("submit-contact-form");
const acceptButton = document.getElementById("accept-button");
const affirmationScreen = document.querySelector(".affirmation-screen");
const body = document.querySelector("body");

const inputs = {
    name:  document.getElementById("name-input"),
    email: document.getElementById("email-input"),
    message: document.getElementById("message-input")
};

const hasNoCharacters = (string) => {
    for (char of string) {if (char !== " ") return false};
    return true;
};

const extractFormText = () => {
    const message = {
        name: "",
        email: "",
        message: ""
    };

    for (const input in inputs) {
        
        if (inputs[input].value.length === 0) {
            message[input] = "NO ENTRY";
            continue;
        };

        if (hasNoCharacters(inputs[input].value)) {
            message[input] = "NO ENTRY";
            continue;
        };

        message[input] = inputs[input].value;
    };

    return message;
};

const onSuccessResponse = () => {
    affirmationScreen.classList.add("visible");
    body.classList.add("non-scrollable");
}

const returnToPage = () => {
    for (const input in inputs) inputs[input].value = ""
    affirmationScreen.classList.remove("visible");
    body.classList.remove("non-scrollable");
};

const sendToServer = async () => {
    const message = extractFormText();

    console.log(message);

    const jsonMessage = {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    };

    const lambdaURL = "https://em2yxc7dxekgvlduzv7trg4g2a0jcolt.lambda-url.us-east-1.on.aws/";

    try {
        console.log("HERE")
        await fetch(lambdaURL, jsonMessage);
        onSuccessResponse();
    }

    catch (e) {
        console.log(e);
    };

};

sendButton.addEventListener("click", sendToServer);
acceptButton.addEventListener("click", returnToPage);