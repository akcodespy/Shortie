async function shorter() 
{
    const inputBox = document.getElementById('long-url');
    const inputText = inputBox.value;
    const OutputBox = document.getElementById('short-url');        
    
    const response = await fetch('/shorten', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify({ url: inputText })
        });

        const url_with_quote = await response.text()
        OutputBox.value =url_with_quote.replace(/"/g, '');
        document.getElementById('short-url-section').style.display = 'block';
                                    
}
function copyUrl() {
    const outputBox = document.getElementById('short-url');
    const shortUrl = outputBox.value;
    navigator.clipboard.writeText(shortUrl)
        .then(() => {
            const copyButton = document.getElementById('copy-btn');
            const originalText = copyButton.innerText;
            copyButton.innerText = "Copied!";

            setTimeout(() => {
                copyButton.innerText = originalText;
            }, 1000); 
        })
}
