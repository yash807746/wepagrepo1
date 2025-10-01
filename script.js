document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const message = document.getElementById('message');
    
    const colors = ['#f0f0f0', '#ffebee', '#e8f5e9', '#e3f2fd', '#f3e5f5'];
    let colorIndex = 0;
    
    changeColorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });
    
    changeTextBtn.addEventListener('click', function() {
        const messages = [
            "You clicked the button!",
            "Hello from JavaScript!",
            "This text changes dynamically.",
            "Web development is fun!",
            "Thanks for visiting!"
        ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        message.textContent = messages[randomIndex];
    });
});
