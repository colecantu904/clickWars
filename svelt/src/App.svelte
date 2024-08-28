<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'


  // choosing color logic will be here
  let color1: string = "red";
  let color2: string = "blue";


</script>

<main>
  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>
  <div class="button-container">
    <button class="color-button" --color={color1}>Red</button>
    <button class="color-button" --color={color2}>Blue</button>
  </div>

</main>

<style>
  .read-the-docs {
    color: #888;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .color-button {
    width: 50vw;
    height: 90vh;
    background-color: var(--color, #1a1a1a);
}

</style>
