// src/services/openAiService.ts

// Define the function to send a message to the OpenAI API.
async function sendMessage(prompt: string): Promise<string> {
  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 150
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Make sure to handle the response correctly; the following line assumes the API's response structure
    return data.choices[0].text.trim();
  } catch (error) {
    console.error("There was an error sending the message to OpenAI:", error);
    return "Error: Could not send message."; // Return error message or handle it as per your application's needs
  }
}

// Export the sendMessage function to be used in other parts of your application.
export { sendMessage };
