<!-- src/components/MessageList.svelte -->
<script lang="ts">
  import { messages } from '../stores/messageStore';
</script>

<div class="messages">
  {#each $messages as message (message.id)}
    <div class="{message.isUser ? 'user-message' : 'bot-message'}">
      {message.text}
    </div>
  {/each}
</div>


<!-- MessageList.svelte -->
<style>
</style>

