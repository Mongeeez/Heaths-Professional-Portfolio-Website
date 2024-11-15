function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Construct the mailto URL with form data
    const mailtoLink = `mailto:heathlanmon28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;

    console.log('Mailto Link:', mailtoLink);

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
}
