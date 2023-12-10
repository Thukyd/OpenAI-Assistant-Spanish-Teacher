<!-- src/components/MessageList.svelte -->
<script lang="ts">
  import { messages } from '../stores/messageStore';
</script>

<ul>
  {#each $messages as message (message.id)}
    <li class="{message.isUser ? 'user-message' : 'bot-message'}">
      /* 
      {message.text}
    </li>
  {/each}
</ul>

<!-- MessageList.svelte -->
<style>
</style>

