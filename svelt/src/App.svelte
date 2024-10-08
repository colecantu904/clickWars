<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import ColorBox from './colorBox.svelte';
  import InfoBox from './infoBox.svelte';
  import { pb, records1 } from './lib/pocketbase'

  let colorRecords = Array.from({ length: records1.length }, (_, index) => [records1[index].id, records1[index].clicks]);
  console.log(colorRecords);

  for (let i = 0; i < colorRecords.length; i++) {
    pb.collection('TotalClicks').subscribe(colorRecords[i][0], function (e) {
      colorRecords[i][1] = e.record.clicks;
    }, { /* other options like expand, custom headers, etc. */ });

  }

</script>

<!--I want it to be able to give it two color names, (or hex), and configure the database and buttons to work with ith perfectly -->

<main>
  {#each colorRecords as value}
    <p>{value[1]}</p>
  {/each}
    {#each records1 as record}
      <ColorBox color={record.color_id} pb={pb} key={record.id} />
    {/each}
</main>

<style>
</style>
