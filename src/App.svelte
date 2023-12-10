<!-- src/App.svelte -->
<script lang="ts">
  import MessageList from './components/MessageList.svelte';
  import UserInput from './components/UserInput.svelte';
  import './app.css';
</script>

<div class="chat-container">
  <MessageList />
  <UserInput />
</div>

