<!-- src/components/UserInput.svelte -->
<script lang="ts">
  import { sendMessage } from '../services/openAiService';
  import { messages } from '../stores/messageStore';
  let input = '';

  async function handleSubmit() {
    if (input.trim() === '') return;
    const userMessage = {
      isUser: true,
      text: input,
      id: Math.random().toString(36).substring(2) // Simple unique ID for key tracking
    };
    messages.update(allMessages => [...allMessages, userMessage]);
    input = ''; // Clear the input field

    const botResponse = await sendMessage(userMessage.text);
    messages.update(allMessages => [
      ...allMessages,
      { isUser: false, text: botResponse, id: Math.random().toString(36).substring(2) }
    ]);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input 
    type="text" 
    bind:value={input} 
    placeholder="Type your message..."
    id="message-input" 
    name="message" 
  />
  <button type="submit">Send</button>
</form>

<!-- UserInput.svelte -->
<style>
</style>
