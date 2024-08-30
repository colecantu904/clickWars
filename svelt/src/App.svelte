<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import ColorBox from './colorBox.svelte';
  import InfoBox from './infoBox.svelte';
  import { pb, records } from './lib/pocketbase'

  // choosing color logic will be here, you could do some cool stuff
  let colors =["red" , "blue"]

  // if the colors inputed in colors are not the same in the database, make new records for them


</script>

<!--I want it to be able to give it two color names, (or hex), and configure the database and buttons to work with ith perfectly -->

<main>
  <InfoBox num1={30} num2={10} />
  <div class="button-container">
    {#each colors as color}
      <ColorBox color={color} />
    {/each}
  </div>
</main>

<style>
  .button-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 90vh;
    width: 100vw;
  }
</style>
