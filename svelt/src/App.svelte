<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import ColorBox from './colorBox.svelte';
  import InfoBox from './infoBox.svelte';
  import { pb, records } from './lib/pocketbase'

  const color1key = "hkggol7growzaig";
  const color2key = "9cp8zl9xjjiz1um";



  // clean it all up and make it work for anything you want!!!!
  // choosing color logic will be here, you could do some cool stuff
  let color1 = "#579466"
  let color2 = "#262f4d"


  let curClicks1 = records[0].clicks;
  let curClicks2 = records[1].clicks;

  pb.collection('Total_Clicks').subscribe(color1key, function (e) {
    curClicks1 = e.record.clicks;
  }, { /* other options like expand, custom headers, etc. */ });

  pb.collection('Total_Clicks').subscribe(color2key, function (e) {
    curClicks2 = e.record.clicks;
  }, { /* other options like expand, custom headers, etc. */ });



  // updates the clicks number field on the records key given in the 'Total_Clicks' database to +1
  async function updateColor( colorKey : string ) {
    try {
      // Update the record with the specified id and new data
      const record = await pb.collection('Total_Clicks').getOne(colorKey, {
    expand: 'relField1,relField2.subRelField',
      });

      const data = {
    "clicks": record.clicks + 1,
  };

      await pb.collection('Total_Clicks').update(colorKey, data);

    } catch (err) {
      console.error('Error updating record:', err);
    }
  }


</script>

<!--I want it to be able to give it two color names, (or hex), and configure the database and buttons to work with ith perfectly -->

<main>
  <InfoBox num1={curClicks1} num2={curClicks2} />
  <div class="button-container">
    <button id="color1" class="color-button" style="background-color: {color1}" on:click={() => updateColor(color1key)} ></button>
    <button id="color2" class="color-button" style="background-color: {color2}" on:click={() => updateColor(color2key)} ></button>
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
  .color-button {
      width: 50%;
      height: 100%;
      background-color: "white";
      border-radius: 5px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      transition: all 0.5s ease-out;
  }
    .color-button:hover {
      background-color: #fff
  }
</style>
